import { useEffect, useState } from 'react';
import getApiData from '../services/getApiData';

const useCharacters = () => {
  const [selectedChar, setSelectedChar] = useState('');

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    getApiData(`https://futuramaapi.herokuapp.com/api/characters/${selectedChar}`)
      .then(quotes => quotes);
  };

  return { selectedChar, setSelectedChar };
};

export default useCharacters;
