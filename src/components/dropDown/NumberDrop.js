import React from 'react';
import PropTypes from 'prop-types';

const NumberDrop = ({ onNumChange }) => {


  return (
    <div>
      <label htmlFor="dropDown">How Many Quotes?: </label>
      <select id="dropDown" onChange={onNumChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
};

NumberDrop.propTypes = {
  onNumChange: PropTypes.func.isRequired
};

export default NumberDrop;
