import fs from "fs";

const html = fs.readFileSync(
  process.argv[2] ||
    "C:/Users/spsjd/.cursor/projects/c-Users-spsjd-OneDrive-Desktop-ServiceMaster-of-the-Desert/agent-tools/faq-page.html",
  "utf8"
);

const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

const residentialStart = html.indexOf('id="residential"');
const commercialStart = html.indexOf('id="commercial"');
const footerStart = html.indexOf('class="footer-divider-wrap"', commercialStart);

function parseSection(start, end, category) {
  const section = html.slice(start, end);
  const re =
    /<div class="faq-wrap">[\s\S]*?<div class="faq-q">([\s\S]*?)<\/div><div class="faq-a">([\s\S]*?)<\/div><\/div>/g;
  const items = [];
  let m;
  while ((m = re.exec(section))) {
    const question = strip(m[1]);
    const answer = strip(m[2]);
    if (question && answer) items.push({ category, question, answer });
  }
  return items;
}

const all = [
  ...parseSection(residentialStart, commercialStart, "residential"),
  ...parseSection(commercialStart, footerStart, "commercial"),
];

const out = `import type { FaqItem } from "./content";

export const FAQS_EXPANDED: FaqItem[] = ${JSON.stringify(all, null, 2)} as const;
`;

fs.writeFileSync(new URL("../data/faqs-expanded.ts", import.meta.url), out);
console.log(`Wrote ${all.length} FAQs`);
