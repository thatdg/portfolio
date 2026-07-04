/**
 * CV content — professional profile, experience, skills, tools, education.
 * Sourced from Tony's CV. Financial figures are expressed as growth
 * percentages / outcomes only (no absolute turnover), per the site brief.
 */

export type Role = {
  title: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

/** One-line, employer-facing positioning used in the hero. */
export const PROFILE =
  "Commercially minded B2B marketing manager with 5+ years leading multi-brand digital strategies, technical web builds, and visual asset production. I turn brand, web, and campaigns into measurable growth for distribution, trade, and live-events businesses across Scotland.";

/** Longer bio for the About section. */
export const BIO: string[] = [
  "I work end-to-end: positioning and strategy, the campaigns that carry it, the identity it lives in, and the websites where it converts. Most of my work has been for trade, distribution, and live-events businesses — the kind where marketing has to pay for itself.",
  "Alongside client work I've co-founded and marketed my own ventures, including a live-music venue I grew by roughly 3.5× (+249%) in annual turnover. That owner's-eye view keeps me focused on the numbers a brand actually needs to move, not just the ones that look good in a deck.",
];

/** Headline proof points for the hero strip — outcomes only, no £. */
export const PROOF: { value: string; label: string }[] = [
  { value: "+249%", label: "turnover growth" },
  { value: "+40%", label: "lead conversion" },
  { value: "100%", label: "event capacity" },
  { value: "88+", label: "workshops delivered" },
];

export const EXPERIENCE: Role[] = [
  {
    title: "Co-Founder & Marketing Lead",
    org: "AMAC Events",
    period: "2024 — 2026",
    summary:
      "Stood up the marketing engine for a fast-paced live-events venture from scratch.",
    highlights: [
      "Delivered a profitable first year of trading through targeted cross-channel campaigns.",
      "Designed campaign visuals and high-converting ticket landing pages with consistent uptime.",
      "Coordinated corporate venues, suppliers, and partners across promotional initiatives.",
    ],
  },
  {
    title: "Co-Founder & Creative Lead",
    org: "The Attic Club",
    period: "2023 — 2026",
    summary:
      "Owned creative direction, campaigns, and brand for a live-music venue.",
    highlights: [
      "Grew annual turnover by roughly 3.5× (+249%) through brand and promotion.",
      "Ran multi-channel B2B comms, supplier workflows, and ticketing operations.",
      "Recruited and managed permanent and temporary teams across live sites.",
    ],
  },
  {
    title: "Founder & B2B Digital Consultant",
    org: "That Digital Guy",
    period: "2023 — 2026",
    summary:
      "Built web, e-commerce, and marketing funnels for independent retailers and corporate clients.",
    highlights: [
      "Engineered SEO frameworks and ran Meta Ads campaigns to lift organic visibility and trade enquiries.",
      "Delivered custom WordPress / WooCommerce and Shopify builds end-to-end.",
      "Maintained centralised CRM systems to safeguard data accuracy and deadlines.",
    ],
  },
  {
    title: "Technical Trainer & Web Delivery Specialist",
    org: "Tablet Academy Scotland",
    period: "2021 — 2024",
    summary:
      "Delivered digital deployment programmes for enterprise partners including Google and Microsoft.",
    highlights: [
      "Coordinated and delivered 88+ technical workshops across Scotland.",
      "Translated complex documentation into actionable toolkits for corporate stakeholders.",
      "Managed programme logistics and cross-site communications under tight timelines.",
    ],
  },
  {
    title: "Digital Marketer & Admin Assistant",
    org: "Stewart Accounting Services",
    period: "2020 — 2022",
    summary:
      "Owned the digital footprint for a chartered accountancy firm.",
    highlights: [
      "Enhanced B2B presence via targeted marketing and landing-page optimisation.",
      "Integrated internal admin systems to streamline client onboarding.",
    ],
  },
  {
    title: "Project Support (Salesforce migration)",
    org: "Blue Arrow",
    period: "2025",
    summary:
      "Managed large-scale data migration during a high-volume national transition.",
    highlights: [
      "Ensured record consistency within Salesforce CRM across cross-functional teams.",
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    name: "B2B campaign strategy & execution",
    items: [
      "Trade customer acquisition",
      "Multi-channel promotional campaigns",
      "Automated email marketing",
      "Lead generation",
      "Commercial performance tracking",
    ],
  },
  {
    name: "Digital design & print media",
    items: [
      "Brand identity frameworks",
      "B2B brochures & catalogues",
      "Promotional literature & graphics",
      "High-quality digital artwork",
    ],
  },
  {
    name: "Website administration & SEO",
    items: [
      "WordPress / WooCommerce & Shopify",
      "Third-party API integration",
      "Technical SEO audits",
      "Landing-page optimisation",
    ],
  },
  {
    name: "Stakeholder & event coordination",
    items: [
      "Supplier & contractor liaison",
      "Showroom & trade-event logistics",
      "Cross-functional team leadership",
      "Budget tracking",
    ],
  },
];

export const TOOLS: string[] = [
  "Adobe InDesign",
  "Adobe Photoshop",
  "Canva",
  "WordPress",
  "WooCommerce",
  "Shopify",
  "Wix",
  "Mailchimp",
  "Meta Ads Manager",
  "Salesforce CRM",
  "Stripe",
  "Square POS",
  "Google Workspace",
  "Microsoft Office",
];

export const EDUCATION: string[] = [
  "Modern Apprenticeship in Digital Marketing (SCQF 6 / SVQ 3), 2021",
  "Accredited Diploma in Internet Marketing",
  "Facebook Ad Accelerator Certification",
  "LinkedIn Marketing Masterclass",
  "Entrepreneurs Marketing System Certification",
];
