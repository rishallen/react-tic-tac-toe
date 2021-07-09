import React, { useState } from 'react';
import './App.css';
// import { calculateWinner } from '..helper';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  // const Game = () => {
  //   const [history, setHistory] = useState([Array(9).fill(null)]);
  //   const [stepNumber, setStepNumber] = useState(0);
  //   const [xIsNext, setXisNext] = useState(true);
  //   const winner = calculateWinner(history[stepNumber]);
  //   const xO = xIsNext ? 'X' : 'O';
  
    // const handleClick = (i) => {
    //   const historyPoint = history.slice(0, stepNumber + 1);
    //   const current = historyPoint[stepNumber];
    //   const squares = [...current];
    //   // return if won or occupied
    //   if (winner || squares[i]) return;
    //   // select square
    //   squares[i] = xO;
    //   setHistory([...historyPoint, squares]);
    //   setStepNumber(historyPoint.length);
    //   setXisNext(!xIsNext);
    // };
  
  //   const jumpTo = (step) => {
  //     setStepNumber(step);
  //     setXisNext(step % 2 === 0);
  //   };
  
  //   const renderMoves = () =>
  //     history.map((_step, move) => {
  //       const destination = move ? `Go to move #${move}` : 'Go to Start';
  //       return (
  //         <li key={move}>
  //           <button onClick={() => jumpTo(move)}>{destination}</button>
  //         </li>
  //       );
  //     });
  

    const checkForWinner = () => {
      // Complete in Wave 3
      // You will need to:
      // 1. Go accross each row to see if 
      //    3 squares in the same row match
      //    i.e. same value
      // 2. Go down each column to see if
      //    3 squares in each column match
      // 3. Go across each diagonal to see if 
      //    all three squares have the same value.

    }

    const resetGame = () => {
      // Complete in Wave 4
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>React Tic Tac Toe</h1>
          <h2>The winner is ... -- Fill in for wave 3 </h2>
          <button>Reset Game</button>
        </header>
        <main>
          {/* {<Board squares={history[stepNumber]} onClick={handleClick} />} */}
          <Board squares={squares} onClickCallback={onClick} />
        </main>
        <div>
          {/* <h3>History</h3>
          {renderMoves()} */}
        </div>
      </div>
    );
  // };
}

export default App;
