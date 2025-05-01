// src/components/AffirmationTimer.jsx
import React, { useEffect, useState } from "react";
import "./AffirmationTimer.css";

const affirmations = [
  "You are capable of amazing things.",
  "Every day is a fresh start.",
  "You are stronger than your struggles.",
  "Your potential is endless.",
  "Believe in yourself and all that you are."
];

const AffirmationTimer = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % affirmations.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="affirmation-container">
      <p className="affirmation-text">{affirmations[index]}</p>
    </div>
  );
};

export default AffirmationTimer;
