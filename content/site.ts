/**
 * Site-wide details — the things to edit first.
 * Real data from Tony's CV; swap the LinkedIn URL and drop in the CV PDF.
 */
export const CONTACT = {
  name: "Tony Syme",
  firstName: "Tony",
  role: "B2B Marketing Manager",
  email: "tonysyme.ts2@gmail.com",
  phone: "07886 759197",
  phoneHref: "+447886759197",
  location: "Stirling / Glasgow, Scotland",
  availability: "Open to B2B marketing manager roles",
  /** Drop tony-syme-cv.pdf into /public to enable the download button. */
  cvUrl: "/tony-syme-cv.pdf",
  year: 2026,
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anthony-syme-5043651a8/" },
  ],
} as const;
