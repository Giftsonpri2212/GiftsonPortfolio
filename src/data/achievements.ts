export type Achievement = {
  icon: "medal" | "bronze" | "code" | "hackathon";
  title: string;
  description: string;
  image: string;
};

export const achievements: Achievement[] = [
  {
    icon: "medal",
    title: "TNSkills Gold Medal",
    description: "Autonomous robotics competition at state level.",
    image: "/achievements/TNskills Gold.png",
  },
  {
    icon: "bronze",
    title: "IndiaSkills Bronze Medal",
    description:
      "National robotics competition organized by Government of India.",
    image: "/achievements/indiaskills Bronze.png",
  },
  {
    icon: "code",
    title: "LeetCode Achievement",
    description: "500+ problems solved with rating 1603.",
    image: "/achievements/leetcode.png",
  },
  {
    icon: "hackathon",
    title: "Smart India Hackathon",
    description: "Selected among 1000+ applications.",
    image: "/achievements/sih-selection.svg",
  },
];
