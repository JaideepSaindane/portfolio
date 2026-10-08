export type PersonalProject = {
  id: string;
  name: string;
  status: "SHIPPED" | "BUILDING" | "EXPERIMENTING";
  description: string;
  features?: string[];
  concept?: string[];
  url?: string;
};

export const personalProjects: PersonalProject[] = [
  {
    id: "aquaai",
    name: "AquaAI",
    status: "SHIPPED",
    description:
      "A free AI-powered PWA for freshwater and planted aquarium keepers.",
    features: [
      "Fish Doctor",
      "Tank Scan",
      "Tank Planner",
      "Ask Aqua",
      "Community",
      "Care guides for 1,400+ species",
    ],
    url: "https://aquaai-web.vercel.app",
  },
  {
    id: "reelautomator",
    name: "ReelAutomator",
    status: "EXPERIMENTING",
    description: "An AI product that turns a topic into a short vertical video / reel.",
    concept: [
      "20-second videos",
      "11 Indian languages",
      "AI-generated visuals",
      "AI voice",
      "Automated video generation",
    ],
  },
];
