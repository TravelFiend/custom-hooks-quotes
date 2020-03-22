import { useEffect, useState } from 'react';
import getApiData from '../services/getApiData';

const useQuotes = () => {
  const [character, setCharacter] = useState('');
  const [quote, setQuote] = useState('');
  const [pic, setPic] = useState('');
  const [selectedChar, setSelectedChar] = useState('');

  useEffect(() => {
    fetch();
  }, [selectedChar]);

  const setIt = (quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    setCharacter(quotes[randomIndex].character);
    setQuote(quotes[randomIndex].quote);
    setPic(quotes[randomIndex].image);
  };

  const fetch = () => {
    if(selectedChar === '') {
      return getApiData('https://futuramaapi.herokuapp.com/api/quotes/163')
        .then(quotes => {
          setIt(quotes);
        });
    }
    return getApiData(`https://futuramaapi.herokuapp.com/api/characters/${selectedChar}`)
      .then(quotes => {
        setIt(quotes);
      });
  };

  const handleClick = () => {
    fetch();
  };

  const handleChange = ({ target }) => {
    event.preventDefault();
    setSelectedChar(target.value);
  };

  return { character, quote, pic, handleClick, handleChange };
};

export default useQuotes;
