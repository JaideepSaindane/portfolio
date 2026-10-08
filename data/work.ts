export type CaseStudySection = {
  label: string;
  heading: string;
  body: string;
};

export type WorkProject = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  stack?: string[];
  caseStudy: CaseStudySection[];
};

export const work: WorkProject[] = [
  {
    id: "vaani",
    index: "01",
    title: "Vaani",
    subtitle: "Vernacular AI Voice Shopping",
    description:
      "Built and scaled a vernacular AI voice shopping assistant for first-time and rural users.",
    highlights: [
      "Scaled to 2M+ DAU",
      "4M+ conversations",
      "Voice-led shopping journey",
      "Activation of new & underserved users",
    ],
    tags: ["AI", "VOICE", "GROWTH", "CONSUMER"],
    caseStudy: [
      {
        label: "01",
        heading: "Context",
        body: "Meesho serves India's next 500M shoppers — a huge share of whom aren't fully comfortable typing or reading in English.",
      },
      {
        label: "02",
        heading: "Problem",
        body: "A text-first shopping experience quietly excluded a large, low-literacy, vernacular-first user base from discovering and buying products with confidence.",
      },
      {
        label: "03",
        heading: "Insight",
        body: "Voice is a more natural, trusted interface for people who are new to the internet — especially across vernacular languages.",
      },
      {
        label: "04",
        heading: "Solution",
        body: "Built Vaani — a vernacular AI voice shopping assistant covering the end-to-end journey: search, payment, and address addition, entirely in the user's own language.",
      },
      {
        label: "05",
        heading: "My Role",
        body: "Owned product strategy and the activation charter; led voice-first flow design and worked cross-functionally with AI, design, and engineering to ship and scale it.",
      },
      {
        label: "06",
        heading: "Impact",
        body: "Scaled to 2M+ daily active users and 4M+ conversations, unlocking a previously underserved user segment.",
      },
      {
        label: "07",
        heading: "What I Learned",
        body: "Designing for trust matters more than designing for features when your users are new to the internet.",
      },
    ],
  },
  {
    id: "ai-interview-analyzer",
    index: "02",
    title: "AI Customer Interview Analyzer",
    subtitle: "AI-Powered User Research Tool",
    description:
      "Built an AI-powered research tool that analyzed customer interviews and reduced research turnaround time.",
    highlights: [
      "~70% reduction in research TAT",
      "Used across ~3K employees",
      "Supported 1K+ interviews/year",
      "Improved research productivity",
    ],
    tags: ["AI", "RESEARCH", "PRODUCTIVITY"],
    caseStudy: [
      {
        label: "01",
        heading: "Context",
        body: "Meesho runs thousands of user interviews a year — but turning raw conversations into usable insight was slow and manual.",
      },
      {
        label: "02",
        heading: "Problem",
        body: "Teams were spending disproportionate time transcribing and synthesizing interviews instead of acting on what they learned.",
      },
      {
        label: "03",
        heading: "Insight",
        body: "Most of the time cost sat in synthesis, not collection — a problem well suited to AI-assisted analysis.",
      },
      {
        label: "04",
        heading: "Solution",
        body: "Built an AI-powered tool that automatically analyzed customer interviews and surfaced structured, shareable insight.",
      },
      {
        label: "05",
        heading: "My Role",
        body: "Led the 0→1 build end to end — from problem framing to shipping the tool and driving org-wide adoption and new research SOPs.",
      },
      {
        label: "06",
        heading: "Impact",
        body: "Cut research turnaround time by ~70%, scaling to roughly 3,000 employees and 1,000+ interviews a year.",
      },
      {
        label: "07",
        heading: "What I Learned",
        body: "The best AI tools don't replace research — they remove the friction between doing research and acting on it.",
      },
    ],
  },
  {
    id: "genai-recommendations",
    index: "03",
    title: "GenAI Recommendation Engine",
    subtitle: "Personalized Notification System",
    description:
      "Worked on an AI-powered system for generating personalized recommendation notifications.",
    highlights: ["AI + experimentation + growth", "Personalized at the user level", "Built for continuous iteration"],
    tags: ["AI", "GENAI", "EXPERIMENTATION", "GROWTH"],
    stack: ["Gemini", "Vertex AI", "Databricks", "n8n"],
    caseStudy: [
      {
        label: "01",
        heading: "Context",
        body: "Push notifications are one of the highest-leverage, highest-risk growth levers — useful when relevant, costly to trust when not.",
      },
      {
        label: "02",
        heading: "Problem",
        body: "Generic, rules-based notifications couldn't keep pace with how different each user's intent and context actually was.",
      },
      {
        label: "03",
        heading: "Insight",
        body: "Personalized, AI-generated recommendations could make notifications feel individually relevant instead of broadcast.",
      },
      {
        label: "04",
        heading: "Solution",
        body: "Worked on a GenAI-powered system that generated personalized recommendation notifications end to end, built on Gemini and Vertex AI, with Databricks as the data layer and n8n for orchestration.",
      },
      {
        label: "05",
        heading: "My Role",
        body: "Contributed to the experimentation strategy and worked with AI and growth teams to test and iterate on the system.",
      },
      {
        label: "06",
        heading: "Impact",
        body: "An example of AI and experimentation applied directly to a growth lever — built for continuous iteration rather than a one-off launch.",
      },
      {
        label: "07",
        heading: "What I Learned",
        body: "AI personalization is as much a data-and-orchestration problem as it is a model problem.",
      },
    ],
  },
];
