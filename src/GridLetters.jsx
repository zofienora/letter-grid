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
const BASE = 36;   // px
const STEP = 40;   // +10px per interaction

export default function GridLetters() {
  const [bumps, setBumps] = useState(Array(LETTERS.length).fill(0));

  const grow = (i) =>
    setBumps(prev => prev.map((n, idx) => (idx === i ? n + 1 : n)));

  return (
    <div
      className="grid-viewport"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
    >
      {LETTERS.map((ch, i) => {
        const scale = 1 + (STEP * bumps[i]) / BASE;

        return (
          <button
            key={ch + i}
            className="tile"
            // Desktop mouse: grow when pointer enters (hover)
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") grow(i);
            }}
            // Touch/Pen: grow on tap/press
            onPointerDown={(e) => {
              if (e.pointerType === "touch" || e.pointerType === "pen") {
                grow(i);
              }
            }}
            // Keyboard: Enter / Space to grow
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                grow(i);
              }
            }}
          >
            <motion.span
              className="letter"
              style={{ fontSize: `${BASE}px`, lineHeight: 1 }}
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