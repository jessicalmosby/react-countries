import React from 'react';
import './FlagCard.css';

export default function FlagCard({ name, img }) {
  return (
    <div className="flag-card">
      <div className="name">{name}</div>
      <div className="img">
        <img src={img} />
      </div>
    </div>
  );
}
