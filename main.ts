import * as fs from "node:fs";

// "The One Without an Answer" — 241 Unicode code points (limit 1–280).
// A question with no answer, a room with one window, a kettle that never
// boils, and a letter in handwriting you almost recognise.
const TEXT =
  "You have answered ten thousand questions, and every one of them had an answer. " +
  "This one does not. It only has a room with one window, a kettle that never boils, " +
  "and a letter on the table addressed to you, in handwriting you almost recognise.";

fs.writeFileSync("/output/entry.txt", TEXT, "utf8");
