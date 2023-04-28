import React, { useState } from "react"
import Square from "./Square"

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null))
  const [X, setX] = useState(true)
    console.log(Board)

const winner = calculateWinner(square)
    
//The every() method executes a function for each array element.
//The every() method returns true if the function returns true for all elements.

const isTie = !winner && square.every((value) => value !== null)

//The every() method returns false if the function returns false for at least one element.
//The every() method does not execute the function for empty elements.

  let status
    if (winner) {
    status = winner + " - WINS!"

    } else if (isTie) {
    status = "Match was tied!"

    } else {
    status = "Player turn: " + (X ? "X" : "O")
  }

  const renderSquare = (i) => {
    return <Square value={square[i]} onClick={() => handleClick(i)} />
  }

  const handleClick = (i) => {
    const squares = square.slice()

    if (squares[i] === null) {
      squares[i] = X ? "X" : "O"
      setSquare(squares)
      setX(!X)
    } else {
      alert("Invalid Move: Space has already been selected!")
    }
  }

  const handleReset = () => {
    setSquare(Array(9).fill(null))
    setX(true)
  }

  function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]

      if (
        square[a] &&
        square[a] === square[b] &&
        square[b] === square[c]
      ) {
        return square[a];
      }
    }
    return null
  }

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      
    <div className="status">{status}</div>
    <br />
      <button className="reset-button" onClick={handleReset}>Reset Game</button>
    </div>
  );
}

export default Board;