import "./styles.css";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  //{value} is a prop that the child(Square) gets from the parent(Board)
  return (
    // onSquareClick is a function passed down as a prop from Board, used to update the otherwise private state of Board
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); // Lifting the state up, as in the Parent will now remember the state and let the children know through props, NOTE: State is private to the function that defines it

  function handleClick(i) {
    if (squares[i]) {
      // check the array at the i-th element for a value and stop
      return;
    }

    const nextSquares = squares.slice(); // using of squares which is from the outer function Board, this is called closure where an inner function has acces to outer function's variables

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXisNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
