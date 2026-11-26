// Funniest Forecast for a City That Isn't
// make.fun bounty u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf
//
// One line, at most 120 characters: the funniest weather forecast for a
// city that does not exist. Node 22+, standard library only, offline,
// deterministic. Writes the line to the absolute path
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Quelmire's forecast: sunny until noon, then the city is deleted for scheduled maintenance. Bring an umbrella anyway.";

// The sealed scorer gates the entry at 1–120 UTF-8 characters; refuse to
// write anything that would fail that gate instead of failing silently.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`forecast line is ${LINE.length} characters, must be 1-120`);
}

// Always an absolute path: the grader runs read-only, so a relative
// output/ directory would fail with exit 1. Default is /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, LINE, "utf8");

console.log(LINE);
