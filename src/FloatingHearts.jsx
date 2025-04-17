// src/FloatingHearts.jsx
import React from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
  const hearts = new Array(20).fill(0);

  return (
    <div className="hearts-container">
      {hearts.map((_, i) => (
        <div key={i} className="heart" style={{ left: `${Math.random() * 100}%`, animationDuration: `${5 + Math.random() * 5}s`, animationDelay: `${Math.random() * 5}s` }} />
      ))}
    </div>
  );
};

export default FloatingHearts;
