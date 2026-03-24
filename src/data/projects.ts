export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  featured?: boolean;
  alignLeft?: boolean;
  yearCompleted?: string;
};

export const projects: Project[] = [
  {
    title: "AlgoPulse AI",
    description:
      "A developer analytics platform that tracks coding activity across LeetCode, CodeChef, and HackerRank, with dashboards for streaks, difficulty-wise progress, and solved-problem trends.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/Giftsonpri2212",
    liveUrl: "https://example.com",
    image: "/projects/Algopulse.png",
    featured: true,
    alignLeft: true,
    yearCompleted: "2026",
  },
  {
    title: "Scalable URL Shortener",
    description:
      "A high-throughput URL shortener service with click analytics, built using Redis caching and BullMQ queues, with support for custom aliases, expiry, and rate-limited REST APIs.",
    tech: ["Node.js", "PostgreSQL", "Redis", "BullMQ"],
    githubUrl: "https://github.com/Giftsonpri2212",
    liveUrl: "https://example.com",
    image: "/projects/url.png",
    alignLeft: false,
    yearCompleted: "2025",
  },
  {
    title: "ML Robot",
    description:
      "An autonomous pick-and-place robot using ML-based object recognition and OpenCV vision for real-time detection, built for IndiaSkills mechatronics workflows under competition constraints.",
    tech: ["TensorFlow", "OpenCV", "JavaScript", "Arduino"],
    githubUrl: "https://github.com/Giftsonpri2212",
    liveUrl: "https://example.com",
    image: "/projects/robot2.png",
    alignLeft: true,
    yearCompleted: "2025",
  },
  {
    title: "DevPort",
    description:
      "A full-stack MERN blogging platform for tech articles and interview prep, featuring rich-text authoring, category filters, comments, and an admin workflow for content management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Giftsonpri2212",
    liveUrl: "https://example.com",
    image: "/projects/devport.png",
    alignLeft: false,
    yearCompleted: "2025",
  },
  
];
