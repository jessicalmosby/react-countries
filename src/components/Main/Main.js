import React from 'react';
import { useCountries } from '../../hooks/useCountries.js';
import FlagCard from '../FlagCard/FlagCard.js';
import './Main.css';

export default function Main() {
  const countries = useCountries();

  return (
    <main>
      {countries.map((country) => (
        <FlagCard key={country.name} {...country} />
      ))}
    </main>
  );
}
