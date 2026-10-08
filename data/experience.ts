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
        dates: "2025 — Present",
        highlights: [
          "Scaled an AI voice shopping assistant to 2M+ new monthly active users in low-literacy, vernacular-first cohorts",
          "Built voice-first payment & address flows, lifting user activation by 3%",
          "Led the new-user activation charter across tier 2/3/4 cohorts",
        ],
        tags: ["AI", "PRODUCT", "GROWTH", "CONSUMER"],
      },
      {
        role: "Manager — Tech Strategy",
        dates: "2025",
        highlights: [
          "Built Meesho's 0→1 GenAI strategy with CXOs, launching 10+ org-wide AI initiatives",
          "Founding researcher for Meesho's AI-services business",
          "Owned program management and OKR cadence for the tech organisation",
        ],
        tags: ["STRATEGY", "GENAI", "0→1"],
      },
    ],
  },
  {
    company: "Accenture Strategy",
    roles: [
      {
        role: "Management Consulting Analyst",
        dates: "2022 — 2024",
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
