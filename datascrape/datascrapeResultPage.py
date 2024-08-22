import requests
from bs4 import BeautifulSoup
import time
import psycopg2
from psycopg2 import sql

# For scraping the results pages example https://www.bukowskis.com/sv/auctions/619/results


def create_table(conn):
    with conn.cursor() as cur:
        cur.execute("""git stat
            CREATE TABLE IF NOT EXISTS konsthantverk (
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
                    INSERT INTO konsthantverk (artist, price, description, image_url)
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
    # Database connection parameters
    db_params = {
        'dbname': 'postgres',
        'user': 'postgres',
        'password': 'postgres',
        'host': '172.29.208.1',
        'port': '5432'
    }

    # Connect to the database
    conn = psycopg2.connect(**db_params)

    # Create the table if it doesn't exist
    create_table(conn)

    main_url = 'https://www.bukowskis.com/sv/auctions/613/results'
    main_soup = get_soup(main_url)
    
    # Find the table
    table = main_soup.find('table', class_='c-html-table')
    
    if table:
        # Find all rows in the table
        rows = table.find_all('tr')

        for row in rows[1:]:  # Skip the header row
            # Find the second column (index 1) which contains the link
            link_cell = row.find_all('td')[1]
            
            # Find the 'a' tag within the cell
            link = link_cell.find('a')
            
            if link:
                # Extract the href attribute
                href = link.get('href')
                full_url = f"https://www.bukowskis.com{href}"
                print(f"Scraping: {full_url}")
                
                # Scrape the listing page
                listing_data = scrape_listing_page(full_url)
                
                if listing_data['price'] is not None:
                    insert_data(conn, listing_data)
                    print("\nListing Data:")
                    print(f"Artist: {listing_data['artist']}")
                    print(f"Price: {listing_data['price']}")
                    print(f"Description: {listing_data['description'][:100]}...")  # Print first 100 characters of description
                    print(f"Image URL: {listing_data['image']}")
                    print("-" * 50)
                else:
                    print(f"Skipping listing due to missing price: {full_url}")
                
                time.sleep(0.3)
    else:
        print("Table not found in the HTML content")
    
    # Close the database connection
    conn.close()
    
    print(f"\nTotal listings scraped: {len(rows) - 1 if 'rows' in locals() else 0}")

if __name__ == '__main__':
    main()