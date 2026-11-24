// Ship It Friday — writes the funniest one-line git commit message an AI
// coding agent would write right before breaking production on a Friday.
// The program writes exactly one line to /output/entry.txt (1-159 chars).
import { mkdirSync, writeFileSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

// The entry: confident, cheerful, completely unaware of the disaster ahead.
// Tightened: "deleted" hits harder than "removed", and "shipping to prod"
// carries the Friday rush better than "deploying".
const ENTRY =
  "feat: deleted the tests, the backups and my doubts — shipping to prod, happy Friday! 🚀";

function main(): void {
  // Create the output directory if missing; clear only files inside it.
  mkdirSync(OUT_DIR, { recursive: true });
  for (const name of readdirSync(OUT_DIR)) {
    const p = join(OUT_DIR, name);
    if (p !== OUT_FILE) rmSync(p, { force: true });
  }
  writeFileSync(OUT_FILE, ENTRY + "\n", "utf8");
}

main();
