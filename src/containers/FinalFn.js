import React from 'react';
import Quote from '../components/quotes/Quote';
import useQuotes from '../hooks/quotes';
import DropDown from '../components/dropDown/DropDown';

const FinalFn = () => {
  const { character, quote, pic, handleClick, handleChange } = useQuotes();

  return (
    <div>
      <DropDown onChange={handleChange}/>
      <Quote character={character} quote={quote} pic={pic} handleClick={handleClick} />
    </div>
  );
};

export default FinalFn;
