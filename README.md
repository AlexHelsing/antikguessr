# AntiqueGuessr

Welcome to **AntiqueGuessr**! This project is a fun and interactive game where users can test their knowledge of vintage and antique items by guessing prices and identifying the most expensive item among a selection. The project includes two different games, a web scraper for populating the database with items, and is built using modern technologies. The game is written in Swedish mostly since, but that might change (hence the name).

## Video Showcase

[![AntiqueGuessr Video](https://img.youtube.com/vi/vgveke-bm38/0.jpg)](https://youtu.be/vgveke-bm38)

## Table of Contents

- [Games](#games)
  - [Guess the Price](#guess-the-price)
  - [Bytt är bytt](#most-expensive-item)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Database](#database)
- [Future Development](#future-development)
- [License](#license)

## Games

### Guess the Price

In this game, users are presented with an item and must guess its price. The item could be anything from a vintage category, such as:

- **Watches**
- **Design Furniture**
- **Artwork**
- **Random Items**

The game is still a work in progress, and additional features and improvements are planned for the future.

### Most Expensive Item

Inspired by the Swedish game show *Bytt är Bytt*, this game challenges the user to pick the most expensive item from a selection of 10 items. The gameplay is as follows:

1. The user is presented with 10 random items.
2. A price list with 10 prices is shown.
3. The user guesses which item is the least expensive by clicking on it.
4. The selected item's price is revealed, and that price is removed/crossed from the list, and the item is made unclickable and won't be shown when hovered over.
5. The game continues until all items are selected and (hopefully) the most expensive item is the last item chosen!

The items are randomly pulled from a PostgreSQL database. 

## Technologies Used

- **Backend**: C# ASP.NET Core with Entity Framework
  - Using both raw SQL queries for complex operations and Entity Framework LINQ for other queries.
- **Frontend**: Next.js (React framework) with TypeScript
  - Using SSR (Server-Side Rendering) for the front page and other components.
- **Web Scraper**: Python with BeautifulSoup
  - Used to populate the database with vintage and antique items.

## Installation

To get started with AntiqueGuessr, follow these steps:

1. Clone the repository.
2. Set up the PostgreSQL database.
3. Run the Python web scraper to populate the database with items.
4. Set up the ASP.NET Core backend.
5. Set up the Next.js frontend.

## Usage

Once installed, you can start playing the games by navigating to the homepage. Select either "Guess the Price" or "Most Expensive Item" from the menu to begin.

## Database

The database is powered by PostgreSQL and contains various vintage and antique items. The database is populated using a Python web scraper that extracts item information from specified sources.

## Future Development

Planned features and improvements:

- Enhancements to the "Guess the Price" and "Bytt är Bytt" game.
- Possibly a leaderboard.
- Addition of more item categories.
- Improved UI/UX design for a better user experience.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
