export type TimelineItem = {
  year: string;
  title: string;
  place: string;
  type: "education" | "work";
};

export const timeline: TimelineItem[] = [
  {
    year: "2015 — 2020",
    title: "B.Tech, Engineering Design & M.Tech, Biomedical Design",
    place: "IIT Madras",
    type: "education",
  },
  {
    year: "2020 — 2022",
    title: "MBA",
    place: "IIM Calcutta",
    type: "education",
  },
  {
    year: "2022 — 2024",
    title: "Management Consulting Analyst",
    place: "Accenture Strategy",
    type: "work",
  },
  {
    year: "2025 — Present",
    title: "Manager, Tech Strategy → Growth Product Manager",
    place: "Meesho",
    type: "work",
  },
];
