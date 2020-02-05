import React from 'react';
import Quote from '../components/quotes/Quote';
import useQuotes from '../hooks/quotes';
// import useCharacters from '../hooks/characters';
import DropDown from '../components/characters/DropDown';

const FinalFn = () => {
  const { character, quote, pic, handleClick } = useQuotes();
  const { characters, setSelectedChar } = useCharacters();

  return (
    <div>
      <DropDown characters={characters} handleChange={setSelectedChar} />
      <Quote character={character} quote={quote} pic={pic} handleClick={handleClick} />
    </div>
  );
};

export default FinalFn;
