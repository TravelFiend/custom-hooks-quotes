import React from 'react';
import PropTypes from 'prop-types';
import CharacterDrop from './CharacterDrop';
import styles from './DropDown.css';
import NumberDrop from './NumberDrop';

const DropDown = ({ onChange, onNumChange }) => {
  return (
    <div className={styles.Drop}>
      <CharacterDrop onChange={onChange} />
      <NumberDrop onNumChange={onNumChange} />
    </div>
  );
};

DropDown.propTypes = {
  onChange: PropTypes.func.isRequired,
  onNumChange: PropTypes.func.isRequired
};

export default DropDown;
