import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/fetchCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (error) {
        setError('Oops! Please hold, something went wrong.');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}
