/**
 * Portfolio content — real projects delivered by Tony Syme, curated to the
 * strongest ~12 across web, brand, campaign, and creative work.
 *
 * There is no CMS and no MDX; add a project by appending here. Every surface
 * (home index, /work grid, and each /work/[slug] case study) renders from
 * this array.
 *
 * Metrics are percentages / counts / outcomes only — never absolute £, per
 * the site brief. Years are approximate and worth confirming with Tony.
 *
 * No cover art exists yet: `accent` drives a generated poster block so every
 * project renders immediately. To use real images, set `coverImage` (and
 * `gallery[].src`) to files under /public/work/<slug>/ — components upgrade
 * from the generated block to <Image> automatically.
 */

export type Category = "Web" | "Brand" | "Campaign" | "Creative";

export type Metric = {
  /** A percentage, count, or short outcome phrase — e.g. "+40%", "27", "Sold-out". */
  value: string;
  label: string;
};

export type GalleryItem = {
  caption: string;
  /** Optional real image under /public; falls back to a generated panel. */
  src?: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: Category;
  year: number;
  summary: string;
  /** The single coral figure shown on the results index. */
  headlineMetric: Metric;
  /** Hex used to generate the poster/cover block. */
  accent: string;
  tags: string[];
  /** Optional real cover image under /public; falls back to the poster block. */
  coverImage?: string;

  // ---- case study (Challenge / Solution / Result) ----
  role: string[];
  challenge: string;
  solution: string;
  results: Metric[];
  gallery: GalleryItem[];
};

export const projects: Project[] = [
  {
    slug: "the-attic",
    title: "The Attic",
    client: "The Attic, Kirriemuir",
    category: "Brand",
    year: 2023,
    summary:
      "Branding and a booking-ready site that grew a small-town music venue by roughly 3.5×.",
    headlineMetric: { value: "+249%", label: "annual turnover growth" },
    accent: "#3a2d5c",
    coverImage: "/work/the-attic/cover.png",
    tags: ["Brand identity", "Web development", "Ticketing", "Promotion"],
    role: ["Creative direction", "Brand identity", "Web build"],
    challenge:
      "Kirriemuir needed a live-music venue that could pull city-calibre acts to a small town. The brand had to balance underground energy with local accessibility, and the site had to promote events and sell tickets without friction.",
    solution:
      "A bold logo with a modern club edge, a flexible CMS for event listings and ticket links, and a positioning line — 'Perched Above the Ordinary' — that made the room feel like a destination. As co-founder I ran the promotion end-to-end.",
    results: [
      { value: "+249%", label: "annual turnover growth" },
      { value: "Sold-out", label: "headline nights" },
      { value: "City acts", label: "in a small town" },
    ],
    gallery: [
      { caption: "Live-music homepage", src: "/work/the-attic/g1.png" },
      { caption: "What's on & ticketing", src: "/work/the-attic/g2.png" },
      { caption: "Find the venue", src: "/work/the-attic/g3.png" },
    ],
  },
  {
    slug: "heatplan-scotland",
    title: "HeatPlan Scotland",
    client: "HeatPlan Scotland",
    category: "Web",
    year: 2024,
    summary:
      "A postcode-validated enquiry engine that lifted heating-install lead conversion by 40%.",
    headlineMetric: { value: "+40%", label: "lead conversion" },
    accent: "#14504f",
    coverImage: "/work/heatplan-scotland/cover.png",
    tags: ["Web development", "Lead generation", "CRM", "Brand positioning"],
    role: ["Web build", "Lead-generation strategy"],
    challenge:
      "HeatPlan needed to manage large-scale heating-installation enquiries across Scotland without drowning in manual admin.",
    solution:
      "A postcode-validated enquiry system wired to automated CRM syncing, so qualified leads land clean and route themselves to the right place.",
    results: [
      { value: "+40%", label: "lead conversion" },
      { value: "Automated", label: "CRM syncing" },
      { value: "Less", label: "manual admin" },
    ],
    gallery: [
      { caption: "Service & care plans", src: "/work/heatplan-scotland/g1.png" },
      { caption: "Boiler installation", src: "/work/heatplan-scotland/g2.png" },
      { caption: "Services", src: "/work/heatplan-scotland/g3.png" },
    ],
  },
  {
    slug: "chromebook-roadshow",
    title: "Chromebook Roadshow",
    client: "Chromebook Roadshow",
    category: "Campaign",
    year: 2023,
    summary:
      "A high-energy microsite and campaign that booked every date of a regional tour to capacity.",
    headlineMetric: { value: "100%", label: "capacity, all dates" },
    accent: "#1b4fa0",
    coverImage: "/work/chromebook-roadshow/cover.png",
    tags: ["Campaign branding", "Event microsite", "Booking", "Digital strategy"],
    role: ["Campaign branding", "Microsite build"],
    challenge:
      "An education initiative needed a recognisable brand and a registration system for a regional roadshow — and every date had to fill.",
    solution:
      "A vibrant, mobile-first microsite with integrated booking management, driven by targeted digital promotion across the region.",
    results: [
      { value: "100%", label: "capacity booked" },
      { value: "Every date", label: "at capacity" },
      { value: "Mobile-first", label: "registration" },
    ],
    gallery: [
      { caption: "On tour across Scotland", src: "/work/chromebook-roadshow/g1.png" },
      { caption: "Educator training sessions", src: "/work/chromebook-roadshow/g2.png" },
      { caption: "Chromebook demos", src: "/work/chromebook-roadshow/g3.png" },
    ],
  },
  {
    slug: "kyle-falconer",
    title: "Kyle Falconer",
    client: "Kyle Falconer (The View)",
    category: "Creative",
    year: 2024,
    summary:
      "A cohesive tour-poster suite across 27 dates for one of Scotland's best-known frontmen.",
    headlineMetric: { value: "27", label: "tour dates" },
    accent: "#5c1f46",
    coverImage: "/work/kyle-falconer/cover.png",
    tags: ["Poster design", "Tour campaign", "Art direction"],
    role: ["Poster design", "Art direction"],
    challenge:
      "A major Scottish tour needed visually impactful posters that stayed on-brand across every date — and held up when the run was extended.",
    solution:
      "A high-impact poster system built for consistency: an initial 15-date suite, then a 12-date extension, delivered as one coherent look across the whole circuit.",
    results: [
      { value: "27", label: "dates postered" },
      { value: "One system", label: "15 + 12 extension" },
      { value: "Ticket", label: "awareness driven" },
    ],
    gallery: [
      { caption: "Live-in-store poster", src: "/work/kyle-falconer/g1.png" },
      { caption: "Signing & tour dates", src: "/work/kyle-falconer/g2.png" },
      { caption: "Tour key art", src: "/work/kyle-falconer/g3.png" },
    ],
  },
  {
    slug: "club-one-fitness",
    title: "Club One Fitness",
    client: "Club One Fitness",
    category: "Web",
    year: 2025,
    summary:
      "A multi-site rebuild with bookings, shop, and automated email flows for a ladies-only gym chain.",
    headlineMetric: { value: "3 gyms", label: "one platform" },
    accent: "#52234a",
    coverImage: "/work/club-one-fitness/cover.png",
    tags: ["Web development", "E-commerce", "Email automation", "Brand"],
    role: ["Web build", "Marketing automation", "Content"],
    challenge:
      "Club One's ladies-only gyms across Fife, Forfar and Montrose needed to move past placeholder content to a professional site with bookings and an automated lead engine.",
    solution:
      "A rebuilt, community-focused site with a 'Meet the Owner' trust layer, TeamUp class bookings, a WooCommerce + Stripe shop, and automated email flows for welcomes, abandoned carts, and re-engagement.",
    results: [
      { value: "3 sites", label: "unified" },
      { value: "Automated", label: "email flows" },
      { value: "Bookings", label: "+ shop live" },
    ],
    gallery: [
      { caption: "Classes & timetable", src: "/work/club-one-fitness/g1.png" },
      { caption: "Shop (WooCommerce)", src: "/work/club-one-fitness/g2.png" },
      { caption: "Membership", src: "/work/club-one-fitness/g3.png" },
    ],
  },
  {
    slug: "heatmasters",
    title: "HeatMasters",
    client: "HeatMasters",
    category: "Brand",
    year: 2023,
    summary:
      "A memorable mascot brand and an instant-quote tool that launched a heating firm from a standing start.",
    headlineMetric: { value: "Standing start", label: "to local challenger" },
    accent: "#1e5a8a",
    coverImage: "/work/heatmasters/cover.png",
    tags: ["Logo design", "Web development", "Lead generation", "Brand positioning"],
    role: ["Brand identity", "Web build"],
    challenge:
      "HeatMasters had to enter the competitive Angus heating market against national providers with far bigger budgets — needing a warm, professional identity and a site that generated leads on its own.",
    solution:
      "The 'HeatMasters Polar Bear' gave the brand a memorable face; an integrated 'instant boiler quote' tool captured leads immediately; and the narrative leaned on local reliability, speed, and trust.",
    results: [
      { value: "Instant-quote", label: "lead tool" },
      { value: "Memorable", label: "mascot brand" },
      { value: "Local", label: "challenger presence" },
    ],
    gallery: [
      { caption: "Homepage", src: "/work/heatmasters/g1.png" },
      { caption: "Instant boiler quote", src: "/work/heatmasters/g2.png" },
      { caption: "Service locations", src: "/work/heatmasters/g3.png" },
    ],
  },
  {
    slug: "amac-promotions",
    title: "AMAC Promotions",
    client: "AMAC Promotions",
    category: "Campaign",
    year: 2024,
    summary:
      "A youthful, high-energy promoter brand and operations hub for the Scottish music circuit.",
    headlineMetric: { value: "Debut year", label: "profitable" },
    accent: "#6b4a10",
    coverImage: "/work/amac-promotions/cover.png",
    tags: ["Brand identity", "Web development", "Event promotion", "Ticketing"],
    role: ["Brand identity", "Campaign design", "Web build"],
    challenge:
      "A new promotions company needed a brand that felt young and high-energy while carrying the professional credibility to secure bookings with venues and artists.",
    solution:
      "A playful, retro-styled logo with bold typography, plus a digital hub for show promotion, event management, and artist enquiries — positioning AMAC as a fresh, 'big-stage ready' partner.",
    results: [
      { value: "Profitable", label: "first year" },
      { value: "Big-stage", label: "ready brand" },
      { value: "Venue", label: "partnerships" },
    ],
    gallery: [
      { caption: "Primary logo", src: "/work/amac-promotions/g1.png" },
      { caption: "Reversed on ink", src: "/work/amac-promotions/g2.png" },
      { caption: "Brand palette", src: "/work/amac-promotions/g3.png" },
    ],
  },
  {
    slug: "very-spexy",
    title: "Very Spexy",
    client: "Very Spexy",
    category: "Web",
    year: 2024,
    summary:
      "A premium eyewear boutique brought online — store, styling bookings, and a sustainability story.",
    headlineMetric: { value: "Boutique", label: "→ online" },
    accent: "#234d3a",
    coverImage: "/work/very-spexy/cover.png",
    tags: ["E-commerce", "Brand positioning", "Local SEO", "Sustainability"],
    role: ["E-commerce build", "Brand storytelling"],
    challenge:
      "Very Spexy needed to translate the premium, personalised feel of their Aberdeen and Peterhead boutiques into a digital storefront — showcasing frames while communicating styling, repairs, and sustainability.",
    solution:
      "A sophisticated online store that kept the boutique aesthetic, booking for one-to-one styling and 'Eyewear MOT' services, and a dedicated section for their Ecologi sustainability partnership.",
    results: [
      { value: "Online", label: "sales + bookings" },
      { value: "Boutique", label: "feel, digital reach" },
      { value: "Eco", label: "story built in" },
    ],
    gallery: [
      { caption: "Frames & collections", src: "/work/very-spexy/g1.png" },
      { caption: "The boutique story", src: "/work/very-spexy/g2.png" },
      { caption: "Visit & services", src: "/work/very-spexy/g3.png" },
    ],
  },
  {
    slug: "bonnie-scotland-presents",
    title: "Bonnie Scotland Presents",
    client: "Bonnie Scotland Presents",
    category: "Brand",
    year: 2024,
    summary:
      "A single media home for a brand's blog, podcast, and event ticketing.",
    headlineMetric: { value: "One hub", label: "site · podcast · tickets" },
    accent: "#43305e",
    coverImage: "/work/bonnie-scotland-presents/cover.png",
    tags: ["Brand identity", "Web development", "Podcasting", "Ticketing"],
    role: ["Brand narrative", "Web build"],
    challenge:
      "Bonnie Scotland Presents needed one platform to hold a multi-faceted media presence — brand messaging, blog, a podcast series, and event ticketing.",
    solution:
      "A full-brand website with a seamless CMS for blog and podcast content, a user-friendly ticketing system for bookings, and a cohesive narrative aligning every channel.",
    results: [
      { value: "All-in-one", label: "media hub" },
      { value: "Podcast", label: "+ blog CMS" },
      { value: "Ticketing", label: "built in" },
    ],
    gallery: [
      { caption: "Podcast hub", src: "/work/bonnie-scotland-presents/g1.png" },
      { caption: "Reviews & the music blog", src: "/work/bonnie-scotland-presents/g2.png" },
      { caption: "The story", src: "/work/bonnie-scotland-presents/g3.png" },
    ],
  },
  {
    slug: "the-greenporium",
    title: "The Greenporium",
    client: "The Greenporium",
    category: "Creative",
    year: 2023,
    summary:
      "A premium brand identity and custom tin packaging for a CBD wellness range.",
    headlineMetric: { value: "Shelf-ready", label: "brand + packaging" },
    accent: "#3f4a1e",
    coverImage: "/work/the-greenporium/cover.png",
    tags: ["Brand identity", "Packaging design"],
    role: ["Brand identity", "Packaging design"],
    challenge:
      "The Greenporium needed a distinct identity and physical packaging to stand out in the crowded CBD wellness market while conveying trust, quality, and premium appeal.",
    solution:
      "A sleek identity built around natural ingredients and wellness, paired with custom high-quality tin packaging that protects freshness and gives a premium tactile experience — clear, compliant, and shelf-ready.",
    results: [
      { value: "Premium", label: "shelf presence" },
      { value: "Custom", label: "tin packaging" },
      { value: "Compliant", label: "+ distinctive" },
    ],
    gallery: [
      { caption: "Product label design", src: "/work/the-greenporium/g1.png" },
      { caption: "Pattern range", src: "/work/the-greenporium/g2.png" },
      { caption: "Shelf-ready tin", src: "/work/the-greenporium/g3.png" },
    ],
  },
  {
    slug: "suckerpunch",
    title: "Suckerpunch",
    client: "Joe Goodall",
    category: "Creative",
    year: 2024,
    summary:
      "Album artwork for Joe Goodall's 'Suckerpunch' — a striking cover built to stand out across streaming and social.",
    headlineMetric: { value: "Streaming-ready", label: "cover artwork" },
    accent: "#8f2d24",
    coverImage: "/work/suckerpunch/cover.png",
    tags: ["Album art", "Illustration", "Art direction"],
    role: ["Album artwork", "Art direction"],
    challenge:
      "Joe Goodall needed impactful album artwork for his 'Suckerpunch' release that captured the tone of the music and stood out on streaming platforms and social.",
    solution:
      "A distinctive, memorable cover aligned with the artist's aesthetic and the record's themes — an anatomical heart in electric blue against a raw red field — extended into matching assets so the identity stayed consistent across every release platform.",
    results: [
      { value: "Striking", label: "visual identity" },
      { value: "Streaming", label: "+ social ready" },
      { value: "Audience", label: "resonance" },
    ],
    gallery: [
      { caption: "Album cover", src: "/work/suckerpunch/g1.png" },
      { caption: "Cover illustration", src: "/work/suckerpunch/g2.png" },
      { caption: "Release wordmark", src: "/work/suckerpunch/g3.png" },
    ],
  },
];
