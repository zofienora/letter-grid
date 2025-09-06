import { useState } from "react";

const LETTERS = [
  "M","X","A","Ö","K",
  "E","U","B","Y","Ï",
  "N","C","L","Ä","S",
  "J","Z","D","O","T",
  "F","P","G","R","H",
  "Q","Ü","I","V","W"
];

const COLS = 5;
const ROWS = LETTERS.length / COLS;

export default function GridLetters() {
  // keep track of size per letter
  const [sizes, setSizes] = useState(Array(LETTERS.length).fill(36)); // base 36px

  function grow(index) {
    setSizes((prev) =>
      prev.map((size, i) => (i === index ? size + 10 : size))
    );
  }

  return (
    <div
      className="grid-viewport"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
    >
      {LETTERS.map((ch, i) => (
        <button
          key={ch + i}
          className="tile"
          onMouseEnter={() => grow(i)}
        >
          <span className="letter" style={{ fontSize: `${sizes[i]}px` }}>
            {ch}
          </span>
        </button>
      ))}
    </div>
  );
}