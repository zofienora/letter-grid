import { useState } from "react";
import { motion } from "framer-motion";

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
const BASE = 36;    // base px font size
const STEP = 40;    // +10px per hover

export default function GridLetters() {
  const [bumps, setBumps] = useState(Array(LETTERS.length).fill(0));

  function grow(i) {
    setBumps((prev) =>
      prev.map((n, idx) => (idx === i ? n + 1 : n))
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
      {LETTERS.map((ch, i) => {
        const scale = 1 + (STEP * bumps[i]) / BASE; // keeps the “+10px per hover” math
        return (
          <button
            key={ch + i}
            className="tile"
            onMouseEnter={() => grow(i)}
          >
            <motion.span
              className="letter"
              style={{
                fontSize: `${BASE}px`,
                lineHeight: 1,
              }}
              animate={{ scale }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {ch}
            </motion.span>
          </button>
        );
      })}
    </div>
  );
}