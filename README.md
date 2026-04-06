# PanTastic

A cozy recipe discovery app built with React. Search for recipes by ingredient or dish name, browse results, and save your favorites.

## Features

- **Search** — look up recipes by keyword using the Spoonacular API
- **Random recipes** — homepage loads 10 random recipes on first visit
- **Recipe detail** — click any recipe to see cook time, health score, summary, and a link to the full recipe
- **Save recipes** — save recipes to a personal list for later
- **Navigation** — switch between Dashboard, Saved Recipes, and About pages

## Tech Stack

- React (Vite)
- [Spoonacular Food API](https://spoonacular.com/food-api)
- CSS (custom, no UI library)

## Getting Started

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and add your Spoonacular API key:
   ```
   VITE_APP_API_KEY=your_api_key_here
   ```
   Get a free key at [spoonacular.com/food-api](https://spoonacular.com/food-api).

3. Start the dev server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Search input and app title
│   ├── NavBar.jsx       # Page navigation (Dashboard / Saved / About)
│   ├── Card.jsx         # Recipe detail card
│   ├── RecipeList.jsx   # Scrollable list of recipe thumbnails
│   ├── SavedPage.jsx    # Saved recipes view
│   └── AboutPage.jsx    # About page
├── App.jsx              # Root component, state management, API calls
├── App.css              # App-specific styles
└── index.css            # Global styles and CSS variables
```

## Notes

- The free Spoonacular plan has a 150 points/day limit. If you see a 402 error, the daily quota has been reached and will reset the next day.
