import { useQuery } from '@tanstack/react-query';

// Fetch function for country details
const fetchCountryDetails = async (name) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  if (!response.ok) {
    throw new Error('Country not found');
  }
  return response.json();
};

// Custom Hook for fetching country details
export function useCountry(name) {
  return useQuery({
    queryKey: ['country', name],
    queryFn: () => fetchCountryDetails(name),
  });
}
