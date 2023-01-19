import React from 'react';
import './FlagCard.css';

export default function FlagCard({ name, iso2 }) {
  return (
    <div className="flag-card">
      <div className="name">{name}</div>
      <div className="img">
        <img src={`https://flagcdn.com/96x72/${iso2.toLowerCase()}.png`} />
      </div>
    </div>
  );
}
