// src/GridLetters.jsx

const LETTERS = [
  "M","X","A","Ö","K",
  "E","U","B","Y","Ï",
  "N","C","L","Ä","S",
  "J","Z","D","O","T",
  "F","P","G","R","H",
  "Q","Ü","I","V","W"
];

const COLS = 5; // fixed 5 columns for your mobile layout
const rowsNeeded = Math.ceil(LETTERS.length / COLS);

export default function GridLetters() {
  return (
    <div
      className="grid-viewport"
      style={{
        gridTemplateRows: `repeat(${rowsNeeded}, 1fr)`, // fill 100vh evenly
      }}
    >
      {LETTERS.map((ch, i) => {
        // rotate base font family: sans → serif → mono
        const baseFont =
          i % 3 === 0 ? "font-sans" : i % 3 === 1 ? "font-serif" : "font-mono";

        return (
          <button key={ch} className="tile" aria-label={`Letter ${ch}`}>
            <span className={`letter ${baseFont}`}>{ch}</span>
          </button>
        );
      })}
    </div>
  );
}