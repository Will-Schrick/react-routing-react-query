# React Countries Explorer

A React application that allows users to explore information about different countries using the REST Countries API. This project demonstrates the implementation of React Router for navigation and React Query for efficient data fetching.

## Features

- Browse a comprehensive list of all countries
- View detailed information about each country
- Responsive navigation with a persistent navbar
- Client-side routing with React Router
- Efficient data fetching and caching with React Query

## Technologies Used

- React + Vite
- React Router DOM
- React Query (TanStack Query)
- REST Countries API

## Project Setup Steps

1. Initialize a new Vite project:
```bash
npm create vite@latest react-countries -- --template react
```

2. Install required dependencies:
```bash
npm install @tanstack/react-query react-router-dom
```

3. Set up the router configuration in `App.jsx`
4. Create the required pages and components
5. Implement API calls using React Query

## Available Routes

- `/` - Home page
- `/countries` - List of all countries
- `/country/:id` - Detailed view of a specific country

## API Integration

This project uses the REST Countries API (https://restcountries.com) to fetch country data. The API endpoints used are:

- `GET /v3.1/all` - Fetch all countries
- `GET /v3.1/name/{name}` - Fetch country by name

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [REST Countries API](https://restcountries.com) for providing the country data
- [React Query](https://tanstack.com/query/latest) for efficient data fetching
- [React Router](https://reactrouter.com) for client-side routing
