import "./styles.css";
import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null); // Here value is used to store the state, and setValue can be used to update it, null is used as the initial value of the state in this case
  function handleClick() {
    setValue("X"); // using setValue from above, this will tell React to rerender the element clicked
  }

  //{value} is a prop that the child(Square) gets from the parent(Board)
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
