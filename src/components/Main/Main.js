import React, { useState } from 'react';
import { useCountries } from '../../hooks/useCountries.js';
import FlagCard from '../FlagCard/FlagCard.js';
import './Main.css';

export default function Main() {
  const { countries, error } = useCountries();
  const [continent, setContinents] = useState('all');
  const continents = [...new Set(countries.map(({ continent }) => continent))];

  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  return (
    <main>
      <select onChange={(e) => setContinents(e.target.value)}>
        <option value="all">All</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
      {filtered.map((country) => (
        <FlagCard key={country.name} {...country} />
      ))}
      <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>
    </main>
  );
}
