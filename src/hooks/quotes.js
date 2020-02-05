import { useEffect, useState } from 'react';
import getApiData from '../services/getApiData';

const useQuotes = () => {
  const [character, setCharacter] = useState('');
  const [quote, setQuote] = useState('');
  const [pic, setPic] = useState('');

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    getApiData('https://futuramaapi.herokuapp.com/api/quotes/163')
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
