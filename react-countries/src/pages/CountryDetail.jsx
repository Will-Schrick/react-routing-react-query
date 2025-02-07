import { useParams, Link } from 'react-router-dom';
import { useCountry } from '../hooks/useCountry'; // ✅ Import the hook

function CountryDetail() {
  let { name } = useParams(); // Get country name from URL

  // Use the custom hook
  const { data: country, error, isLoading } = useCountry(name);

  if (isLoading) return <h1>Loading country details...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const countryData = country[0]; // API returns an array, so we get the first item

  return (
    <div>
      <h1>{countryData.name.common}</h1>
      <img
        src={countryData.flags.png}
        alt={`${countryData.name.common} flag`}
        width="200"
      />
      <h2>Capital: {countryData.capital ? countryData.capital[0] : 'N/A'}</h2>
      <h2>Population: {countryData.population.toLocaleString()}</h2>
      <h2>Region: {countryData.region}</h2>
      <h2>
        Languages:{' '}
        {countryData.languages
          ? Object.values(countryData.languages).join(', ')
          : 'N/A'}
      </h2>

      {/* ✅ Back to Countries Button */}
      <Link to="/countries">
        <button>Back to Countries</button>
      </Link>
    </div>
  );
}

export default CountryDetail;
