import requests
from bs4 import BeautifulSoup
import time
import psycopg2
from psycopg2 import sql
from dotenv import load_dotenv
import os

def create_table(conn):
    with conn.cursor() as cur:
        cur.execute("""
            CREATE TABLE IF NOT EXISTS konst (
                id SERIAL PRIMARY KEY,
                artist TEXT,
                price INTEGER,
                description TEXT,
                image_url TEXT
            )
        """)
        cur.execute("""
            CREATE TABLE IF NOT EXISTS all_items (
                id SERIAL PRIMARY KEY,
                artist TEXT,
                price INTEGER,
                description TEXT,
                image_url TEXT
            )
        """)
    conn.commit()

def insert_data(conn, data):
    if data['price'] is not None:
        with conn.cursor() as cur:
            cur.execute(
                sql.SQL("""
                    INSERT INTO konst (artist, price, description, image_url)
                    VALUES (%s, %s, %s, %s)
                """),
                (data['artist'], data['price'], data['description'], data['image'])
            )
            cur.execute(
                sql.SQL("""
                    INSERT INTO all_items (artist, price, description, image_url)
                    VALUES (%s, %s, %s, %s)
                """),
                (data['artist'], data['price'], data['description'], data['image'])
            )
        conn.commit()
    else:
        print(f"Skipping item with artist '{data['artist']}' due to missing price.")

def get_soup(url):
    response = requests.get(url)
    return BeautifulSoup(response.content, 'html.parser')

def scrape_listing_page(url):
    soup = get_soup(url)
    try:
        artist = soup.find('h1', class_='c-lot-heading__title').text.strip()
    except AttributeError:
        artist = "Artist not found"

    try:
        priceDiv = soup.find('div', class_='c-live-lot-show-info__final-price-amount').text.strip()
        # Remove non-digit characters and convert to integer
        price = int(''.join(filter(str.isdigit, priceDiv)))
    except (AttributeError, ValueError):
        price = None  # Use None instead of "Price not found"

    try:
        description = soup.find('div', class_='c-lot-description').text.strip()
    except AttributeError:
        description = "Description not found"

    try:
        image = soup.find('img', class_='c-lot-gallery__carousel_image')['src']
    except (AttributeError, KeyError):
        image = "Image not found"

    return {'artist': artist, 'price': price, 'description': description, 'image': image}

def main():
    load_dotenv()
    # Database connection parameters
    db_params = {
        'dbname': os.getenv('DB_NAME'),
        'user': os.getenv('DB_USER'),
        'password': os.getenv('DB_PASSWORD'),
        'host': os.getenv('DB_HOST'),
        'port': os.getenv('DB_PORT')
    }
    # Connect to the database
    conn = psycopg2.connect(**db_params)

    # Create the table if it doesn't exist
    create_table(conn)

    main_url = 'https://www.bukowskis.com/sv/auctions/578/results'
    main_soup = get_soup(main_url)
    
    listing_divs = main_soup.find_all('div', class_='c-lot-index-lot')
    
    for div in listing_divs:
        link = div.find('a', class_='c-lot-index-lot__link')
        if link:
            listing_url = 'https://www.bukowskis.com' + link['href']
            print(f"Scraping: {listing_url}")
            listing_data = scrape_listing_page(listing_url)
            
            if listing_data['price'] is not None:
                insert_data(conn, listing_data)
                print("\nListing Data:")
                print(f"Artist: {listing_data['artist']}")
                print(f"Price: {listing_data['price']}")
                print(f"Description: {listing_data['description'][:100]}...")  # Print first 100 characters of description
                print(f"Image URL: {listing_data['image']}")
                print("-" * 50)
            else:
                print(f"Skipping listing due to missing price: {listing_url}")
            
            time.sleep(0.3)
    
    # Close the database connection
    conn.close()
    
    print(f"\nTotal listings scraped: {len(listing_divs)}")

if __name__ == '__main__':
    main()