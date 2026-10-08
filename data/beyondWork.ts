export type BeyondWorkItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

export const beyondWork: BeyondWorkItem[] = [
  {
    id: "build",
    label: "Build",
    title: "I like building small products and experimenting with AI.",
    description:
      "Most weekends go into shipping something small — an app, a tool, a prototype that scratches an itch.",
    image: "/images/beyond/build.jpg",
  },
  {
    id: "aquariums",
    label: "Aquariums",
    title: "I keep planted freshwater aquariums — plecos especially.",
    description:
      "A slow, quiet hobby that's taught me more about patience and systems thinking than most things at work.",
    image: "/images/beyond/aquariums.jpg",
  },
  {
    id: "explore",
    label: "Explore",
    title: "New places, new cuisines, new ways of seeing a city.",
    description: "Space reserved for travel and experiences — more to come here.",
    image: "/images/beyond/explore.jpg",
  },
  {
    id: "life",
    label: "Life",
    title: "The rest of it.",
    description:
      "A more personal shelf — photographs, small observations, and whatever doesn't fit neatly elsewhere.",
    image: "/images/beyond/life.jpg",
  },
];
