import requests
from bs4 import BeautifulSoup
import time

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
    except AttributeError:
        priceDiv = "Price not found"

    try:
        description = soup.find('div', class_='c-lot-description').text.strip()
    except AttributeError:
        description = "Description not found"

    try:
        image = soup.find('img', class_='c-lot-gallery__carousel_image')['src']
    except (AttributeError, KeyError):
        image = "Image not found"

    return {'artist': artist, 'price': priceDiv, 'description': description, 'image': image}

def main():
    main_url = 'https://www.bukowskis.com/news/1671'
    main_soup = get_soup(main_url)
    
    # Find all listing divs on the main page
    listing_divs = main_soup.find_all('div', class_='c-lot-index-lot')
    
    all_listings_data = []
    for div in listing_divs:
        link = div.find('a', class_='c-lot-index-lot__link')
        if link:
            listing_url = 'https://www.bukowskis.com' + link['href']
            print(f"Scraping: {listing_url}")
            listing_data = scrape_listing_page(listing_url)
            all_listings_data.append(listing_data)
            
            # Print data for each listing
            print("\nListing Data:")
            print(f"Artist: {listing_data['artist']}")
            print(f"Price: {listing_data['price']}")
            print(f"Description: {listing_data['description']}")
            print(f"Image URL: {listing_data['image']}")
            print("-" * 50)

            time.sleep(1)
    
    # Print summary
    print(f"\nTotal listings scraped: {len(all_listings_data)}")

if __name__ == '__main__':
    main()