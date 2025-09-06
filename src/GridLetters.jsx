// src/GridLetters.jsx

const LETTERS = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

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