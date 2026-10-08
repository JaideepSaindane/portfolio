export type ExperienceRole = {
  role: string;
  dates: string;
  highlights: string[];
  tags: string[];
};

export type Experience = {
  company: string;
  roles: ExperienceRole[];
};

export const experience: Experience[] = [
  {
    company: "Meesho",
    roles: [
      {
        role: "Growth Product Manager",
        dates: "Nov 2025 — Present",
        highlights: [
          "Scaled an AI voice shopping assistant to 2M+ new monthly active users in low-literacy, vernacular-first cohorts",
          "Built voice-first payment & address flows, lifting user activation by 3%",
          "Led the new-user activation charter across tier 2/3/4 cohorts",
        ],
        tags: ["AI", "PRODUCT", "GROWTH", "CONSUMER"],
      },
      {
        role: "Manager, Strategy & Operations — CTO's Office",
        dates: "Jul 2025 — Nov 2025",
        highlights: [
          "Built Meesho's 0→1 GenAI strategy with CXOs, launching 10+ org-wide AI initiatives",
          "Led a ₹2Cr innovation charter to source, pilot and scale high-potential AI use-cases",
          "Founding researcher for Meesho's AI-services business, defining the 0→1 market-entry case",
        ],
        tags: ["STRATEGY", "GENAI", "0→1"],
      },
      {
        role: "Assistant Manager, Strategy & Operations — CTO's Office",
        dates: "Jul 2024 — Jul 2025",
        highlights: [
          "Led the design-partner programme for Meesho's AI-Voice-of-Customer platform, shaping UX and adoption",
          "Owned program management and operational cadence for Meesho's Tech team, including the biannual OKR cycle",
          "Managed end-to-end execution of the Meesho hackathon, monthly town-halls and leadership connects",
        ],
        tags: ["STRATEGY", "PROGRAM MGMT"],
      },
    ],
  },
  {
    company: "Accenture Strategy",
    roles: [
      {
        role: "Management Consulting Analyst",
        dates: "May 2022 — May 2024",
        highlights: [
          "Redesigned front-desk operations for the largest hotel chain in the US, improving efficiency by 30%",
          "Identified a $20M revenue opportunity by designing a new sales & delivery strategy",
          "Built a GenAI-led GTM strategy for the travel industry across 200+ use cases",
        ],
        tags: ["STRATEGY", "CONSULTING", "GENAI"],
      },
    ],
  },
];
