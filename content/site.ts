/**
 * Site-wide details — the things to edit first.
 * Real data from Tony's CV; swap the LinkedIn URL and drop in the CV PDF.
 */
export const CONTACT = {
  name: "Tony Syme",
  firstName: "Tony",
  role: "B2B Marketing Manager",
  email: "tonysyme.ts2@gmail.com",
  location: "Stirling / Glasgow, Scotland",
  availability: "Available now — immediate start",
  /** Drop tony-syme-cv.pdf into /public to enable the download button. */
  cvUrl: "/tony-syme-cv.pdf",
  year: 2026,
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anthony-syme/" },
  ],
} as const;
