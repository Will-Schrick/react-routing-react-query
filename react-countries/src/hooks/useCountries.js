import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
//this will retreive the countries. I separated it into a hook as we have done in class

// Function to fetch countries
const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Custom Hook
export function useCountries() {
  const [searchTerm, setSearchTerm] = useState(''); // Added search term state

  // Fetch countries using React Query
  const {
    data: countries,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  });

  // Filter countries based on searchTerm
  const filteredCountries = countries
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return {
    countries: filteredCountries,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
  };
}
