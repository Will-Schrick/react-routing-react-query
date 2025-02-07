import { Link } from 'react-router-dom';
import { useCountries } from '../hooks/useCountries'; //
import { useQuery } from '@tanstack/react-query';

function CountriesList() {
  // Call the custom hook
  const { countries, error, isLoading, searchTerm, setSearchTerm } =
    useCountries();

  if (isLoading) return <h1>Loading countries...</h1>;
  if (error) return <h1>Error fetching countries: {error.message}</h1>;

  return (
    <div>
      <h1>List of Countries 📜</h1>

      {/* Search Bar - Now Positioned Below the Heading */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Countries List - Using <h2> Instead of <ul> */}
      {countries.map((country) => (
        <h2 key={country.cca3}>
          <Link to={`/country/${country.name.common}`}>
            {country.name.common}
          </Link>
        </h2>
      ))}
    </div>
  );
}

export default CountriesList;
