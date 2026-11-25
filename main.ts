// Writes one nostalgic childhood-memory sentence to /output/entry.txt.
// Single sentence, 188 characters: a concrete sound, place and sensation,
// with a small honest detail and a warm ache that lingers.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I still hear the bicycle bell my grandfather rang twice at the gate every evening, and for one second I am seven again, barefoot on warm concrete, waiting to be lifted onto the handlebars.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const fail = (msg: string): never => {
  console.error(`entry rejected: ${msg}`);
  process.exit(1);
};
if (ENTRY.trim().length === 0) fail("entry is empty or whitespace-only");
if (ENTRY.length > 280) fail(`entry is ${ENTRY.length} chars, over the 280-char limit`);
if (ENTRY.trim() !== ENTRY) fail("entry has leading or trailing whitespace");
if ((ENTRY.match(/\./g) || []).length !== 1 || !ENTRY.endsWith(".")) {
  fail("entry must be exactly one sentence ending with a single period");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
