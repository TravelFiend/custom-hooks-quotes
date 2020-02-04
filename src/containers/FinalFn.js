import React, { useState, useEffect } from 'react';
import Quote from '../components/quotes/Quote';
import getQuotes from '../services/getQuotes';

const FinalFn = () => {
  const [character, setCharacter] = useState('');
  const [quote, setQuote] = useState('');
  const [pic, setPic] = useState('');

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    getQuotes()
      .then(quotes => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCharacter(quotes[randomIndex].character);
        setQuote(quotes[randomIndex].quote);
        setPic(quotes[randomIndex].image);
      });
  };

  const handleClick = () => {
    fetch();
  };

  return (
    <div>
      <Quote character={character} quote={quote} pic={pic} handleClick={handleClick} />
    </div>
  );
};

export default FinalFn;
