import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {

  const singleSquares = [].concat(...squares);
  return singleSquares.map((square) => {
    return <Square
      value={square.value}
      id={square.id}
      key={square.id}
      onClickCallback={onClickCallback}
    />
  });
}

const Board = ({ squares, onClickCallback }) => {
  
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid">
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
