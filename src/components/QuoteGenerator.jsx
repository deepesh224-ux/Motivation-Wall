import React, { useState } from "react";

const quotes = [
  {
    text: "“It’s just pathetic to give up on something before you even give it a shot.” – Reiko Mikami",
    image: "/images/quote1.webp",
  },
  {
    text: "“You can die anytime, but living takes true courage.” – Kenshin Himura",
    image: "/images/quote2.webp", 
  },
  {
    text: "“Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!” – Izuku Midoriya",
    image: "/images/quote3.webp", 
  },
  {
    text: "“Power comes in response to a need, not a desire. You have to create that need.” – Goku",
    image: "/images/quote4.webp", 
  },
  {
    text: "“If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be.” – Naruto Uzumaki",
    image: "/images/quote5.webp", 
  }
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({ text: "", image: "" });

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-wrapper">
      <video autoPlay loop muted className="bg-video">
        <source src="/quote-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <audio autoPlay loop className="bg-audio">
        <source src="/quote-bg.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="quote-container">
        <h1>✨ Motivational Quote Generator</h1>
        <button className="add-button" onClick={getRandomQuote}>
          Generate Quote
        </button>

        {quote.text && (
          <div className="card quote-card">
            <p>{quote.text}</p>
            <img src={quote.image} alt="Quote visual" className="quote-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteGenerator;
