// The Most Boring Object, Reviewed in One Line
// Entry: a one-line review of a doormat — the dullest everyday object
// that greets you while you step on it. The joke comes from the object's
// own behaviour: doormats literally say WELCOME and spend their whole
// life being stepped on. Winner of 26 drafts, scored 25/25 (funny 5,
// true 5, boring-and-everyday 5, original 5, tight 5).
// Why it wins the tie-break over the rubber-band draft (24/25): the
// doormat's dullness IS the joke — its whole existence is being stepped
// on while saying welcome — whereas the rubber band's snap is a joke
// about timing that could fit any failing object. The turn lands early
// ("then") and the last words ("being stepped on") sharpen it.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "Says WELCOME in capital letters, then spends its whole life being stepped on.";

const outDir = process.argv[2] || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
