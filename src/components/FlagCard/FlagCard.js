import React from 'react';
import './FlagCard.css';

export default function FlagCard({ name, img }) {
  return (
    <div className="FlagCard">
      <div className="name">{name}</div>
      <img src={img} />
    </div>
  );
}
