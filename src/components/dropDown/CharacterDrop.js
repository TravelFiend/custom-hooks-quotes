import React from 'react';
import PropTypes from 'prop-types';

const CharacterDrop = ({ onChange }) => {
  const characters = ['Bender', 'Fry', 'Leela', 'Professor Farnsworth', 'Amy', 'Zapp Brannigan', 'Lurr', 'Dr Zoidberg', 'Linda the reporter', 'Bob Barker', 'Hermes', 'Morgan Proctor', 'Mom', 'Robot Mob', 'Giant Bender', 'Kif', 'Don bot'];

  const characterElements = characters.map(name => {
    const dashed = name.replace(/\s/g, '-');
    return <option key={name} value={dashed}>{name}</option>;
  });

  return (
    <div>
      <label htmlFor="dropDown">Select a character: </label>
      <select id="dropDown" onChange={onChange}>
        <option value="">All Quotes</option>
        {characterElements}
      </select>
    </div>
  );
};

CharacterDrop.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default CharacterDrop;
