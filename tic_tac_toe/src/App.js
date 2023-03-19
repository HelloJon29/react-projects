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
  const [squares, setSquares] = useState(Array(9).fill(null)); // Lifting the state up, as in the Parent will now remember the state and let the children know through props, NOTE: State is private to the function that defines it

  function handleClick() {
    const nextSquares = squares.splice(); // using of squares which is from the outer function Board, this is called closure where an inner function has acces to outer function's variables
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[4]} />
        <Square value={squares[5]} />
        <Square value={squares[6]} />
      </div>
      <div className="board-row">
        <Square value={squares[7]} />
        <Square value={squares[8]} />
        <Square value={squares[9]} />
      </div>
    </>
  );
}
