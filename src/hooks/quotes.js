import { useEffect, useState } from 'react';
import getQuotes from '../services/getQuotes';

const useQuotes = () => {
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

  return { character, quote, pic, handleClick };
};

export default useQuotes;
