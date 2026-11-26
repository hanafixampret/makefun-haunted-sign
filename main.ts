import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "WARNING: THE GHOST IN RACK 4 HAS ROOT ACCESS. DO NOT FEED IT AFTER MIDNIGHT.";

// Gate from the kit: /output/entry.txt must be 1-120 UTF-8 chars, one line.
if (entry.length < 1 || entry.length > 120 || entry.includes("\n")) {
  throw new Error(`entry fails gate: ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
