import React from 'react';
import PropTypes from 'prop-types';
import styles from './DropDown.css';

const DropDown = ({ onChange }) => {
  const characters = ['Bender', 'Fry', 'Leela', 'Professor Farnsworth', 'Amy', 'Zapp Brannigan', 'Lurr', 'Dr Zoidberg', 'Linda the reporter', 'Bob Barker', 'Hermes', 'Morgan Proctor', 'Mom', 'Robot Mob', 'Giant Bender', 'Kif', 'Don bot'];

  const characterElements = characters.map(name => {
    const dashed = name.replace(/\s/g, '-');
    return <option key={name} value={dashed}>{name}</option>;
  });

  return (
    <div className={styles.Drop}>
      <label htmlFor="dropDown">Select a character:</label>
      <select id="dropDown" onChange={onChange}>
        <option value="">Choose an option</option>
        {characterElements}
      </select>
    </div>
  );
};

DropDown.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default DropDown;
