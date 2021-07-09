import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {

  return <button
    onClick={() => props.onClickCallback(props.id)}
  >
    {props.value}
    
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
