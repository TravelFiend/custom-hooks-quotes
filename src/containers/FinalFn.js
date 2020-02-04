import React from 'react';
import Quote from '../components/quotes/Quote';
import useQuotes from '../hooks/quotes';

const FinalFn = () => {
  const { character, quote, pic, handleClick } = useQuotes();

  return (
    <div>
      <Quote character={character} quote={quote} pic={pic} handleClick={handleClick} />
    </div>
  );
};

export default FinalFn;
