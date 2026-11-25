import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh-Off entry: a single original joke, written to /output/entry.txt.
// The gate requires 1-200 UTF-8 characters, not only whitespace, so the program
// validates the line before writing and fails loudly instead of emitting an
// invalid entry.
const line =
  "My Roomba ran away from home, so now I vacuum the house looking for the thing that was supposed to vacuum the house.";

const chars = [...line].length;
if (chars < 1 || chars > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
