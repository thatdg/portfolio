/**
 * Portfolio content lives here as typed data — no CMS, no MDX.
 * Add a project by appending to `projects`. Everything (home index,
 * /work grid, and each case-study page) renders from this array.
 *
 * There are no image files: `accent` drives a generated poster block so
 * every project renders immediately. Drop real art in later by swapping
 * <CoverBlock> for <Image> and adding a `cover` field.
 */

export type Category = "Campaign" | "Brand" | "Website";

export type Metric = {
  /** Big number, e.g. "+240%" or "8.4M". */
  value: string;
  /** What it measures, e.g. "brand awareness". */
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: Category;
  year: number;
  /** One line for the index and cards. */
  summary: string;
  /** The single coral metric shown on the results index. */
  headlineMetric: Metric;
  /** Hex used to generate the poster/cover block. */
  accent: string;
  tags: string[];

  // ---- case study ----
  role: string[];
  challenge: string;
  approach: string;
  /** Results — a real data set, so a metric grid is warranted here. */
  results: Metric[];
  /** Captions for the placeholder gallery panels. */
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "make-them-look",
    title: "Nightshade",
    client: "Halden Distillery",
    category: "Campaign",
    year: 2025,
    summary:
      "A launch campaign that turned a small-batch gin into a sold-out cult object.",
    headlineMetric: { value: "+240%", label: "brand awareness" },
    accent: "#3b2f6b",
    tags: ["Strategy", "Art direction", "Social", "OOH"],
    role: ["Creative direction", "Campaign strategy", "Art direction"],
    challenge:
      "Halden had a beautiful product and a rounding-error marketing budget, launching into a category where every bottle screams botanical heritage. Blending in was the one thing they couldn't afford.",
    approach:
      "We leaned all the way into the name. One idea — a gin with a dark side — carried across a teaser phase of unbranded OOH, a set of dusk-lit product films, and a bartender seeding program that put Nightshade behind the right bars before a single ad ran. The line held everything together: made to be missed after midnight.",
    results: [
      { value: "+240%", label: "aided brand awareness" },
      { value: "6 wks", label: "to first sell-out" },
      { value: "22", label: "stockists to 190" },
    ],
    gallery: ["Teaser OOH — phase one", "Product film stills", "Bar activation kit"],
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    client: "Northbound Supply Co.",
    category: "Brand",
    year: 2024,
    summary:
      "A full rebrand that moved an outdoor label from wholesale afterthought to DTC destination.",
    headlineMetric: { value: "3.2×", label: "DTC revenue" },
    accent: "#2f5d4a",
    tags: ["Identity", "Packaging", "Art direction", "Guidelines"],
    role: ["Brand strategy", "Identity design", "Packaging"],
    challenge:
      "Northbound made genuinely great gear that looked like everyone else's on the shelf. Retail buyers liked them; customers couldn't remember them. The brand had no voice of its own.",
    approach:
      "We rebuilt the identity around the idea of the field note — a maker's logbook. A utilitarian wordmark, a grid system borrowed from surveyor's maps, and packaging you'd actually keep. Every touchpoint reads like it was documented in the field, because the audience is out there too.",
    results: [
      { value: "3.2×", label: "DTC revenue, year one" },
      { value: "+61%", label: "repeat purchase rate" },
      { value: "18%", label: "wholesale to 54% DTC" },
    ],
    gallery: ["Wordmark & marque", "Packaging system", "Field guide & guidelines"],
  },
  {
    slug: "tidewater",
    title: "Tidewater",
    client: "Tidewater Surf",
    category: "Website",
    year: 2025,
    summary:
      "A commerce site rebuilt around the feeling of the first wave of the morning.",
    headlineMetric: { value: "+58%", label: "conversion rate" },
    accent: "#1f6f86",
    tags: ["UX", "Art direction", "Next.js", "Motion"],
    role: ["Art direction", "UX design", "Front-end build"],
    challenge:
      "The old store buried the product under stock photography and a checkout that fought the customer. Great boards, forgettable site, and a mobile conversion rate that told the whole story.",
    approach:
      "We designed around motion and restraint: full-bleed swell footage on the way in, then a clean, fast, thumb-first buying flow that gets out of the way. Built on Next.js so the pages feel instant on a phone in a parking lot — where surfers actually buy.",
    results: [
      { value: "+58%", label: "mobile conversion" },
      { value: "-41%", label: "checkout drop-off" },
      { value: "0.9s", label: "median load time" },
    ],
    gallery: ["Landing — swell intro", "Product & configurator", "Checkout flow"],
  },
  {
    slug: "second-sun",
    title: "Second Sun",
    client: "Solstice Festival",
    category: "Campaign",
    year: 2024,
    summary:
      "A social-first identity for a music festival that had to feel new without losing its regulars.",
    headlineMetric: { value: "8.4M", label: "impressions" },
    accent: "#c2451f",
    tags: ["Identity", "Social", "Motion", "Content"],
    role: ["Creative direction", "Design system", "Content strategy"],
    challenge:
      "Solstice was rebranding for its tenth year. Longtime fans were protective; the festival needed to grow a younger audience without reading as a sellout to the people who built it.",
    approach:
      "One flexible mark — a sun caught mid-set — that could be posterized, animated, and remixed by fans. We shipped a content kit so the community made most of the feed themselves, then let paid amplify only what already worked.",
    results: [
      { value: "8.4M", label: "campaign impressions" },
      { value: "+37%", label: "under-25 ticket sales" },
      { value: "Sold out", label: "11 days early" },
    ],
    gallery: ["Identity in motion", "Creator content kit", "On-site environmental"],
  },
  {
    slug: "ampersand",
    title: "Ampersand",
    client: "Ampersand Studio",
    category: "Brand",
    year: 2023,
    summary:
      "An identity for a design studio confident enough to be its own hardest client.",
    headlineMetric: { value: "2×", label: "inbound leads" },
    accent: "#7a2f4a",
    tags: ["Identity", "Web", "Editorial"],
    role: ["Brand identity", "Art direction", "Web design"],
    challenge:
      "A studio's own brand is the one everybody judges. Ampersand needed an identity that proved the point in the first three seconds — without disappearing into design-world sameness.",
    approach:
      "We made the ampersand do the talking: one glyph, set enormous, used as image, texture, and navigation all at once. The rest of the system stays deliberately plain so the mark is always the loudest thing in the room.",
    results: [
      { value: "2×", label: "qualified inbound leads" },
      { value: "+3", label: "retainer clients in Q1" },
      { value: "1", label: "very sharp glyph" },
    ],
    gallery: ["The glyph, at scale", "Editorial system", "Studio site"],
  },
];
