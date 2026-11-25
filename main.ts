// Writes one nostalgic childhood-memory sentence to /output/entry.txt.
// Single sentence, 188 characters: a concrete sound, place and sensation,
// with a small honest detail and a warm ache that lingers.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I still hear the bicycle bell my grandfather rang twice at the gate every evening, and for one second I am seven again, barefoot on warm concrete, waiting to be lifted onto the handlebars.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
