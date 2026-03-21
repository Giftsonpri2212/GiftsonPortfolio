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
    title: "Tab Tracker",
    description:
      "A developer analytics platform that tracks coding activity across LeetCode, CodeChef, and HackerRank, with dashboards for streaks, difficulty-wise progress, and solved-problem trends.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/Tabtracker.png",
    featured: true,
    alignLeft: false,
    yearCompleted: "2024",
  },
  {
    title: "TechnoSphere Blog",
    description:
      "A full-stack MERN blogging platform for tech articles and interview prep, featuring rich-text authoring, category filters, comments, and an admin workflow for content management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/blog-platform.svg",
    alignLeft: true,
    yearCompleted: "2024",
  },
  {
    title: "Scalable URL Shortener",
    description:
      "A high-throughput URL shortener service with click analytics, built using Redis caching and BullMQ queues, with support for custom aliases, expiry, and rate-limited REST APIs.",
    tech: ["Node.js", "PostgreSQL", "Redis", "BullMQ"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/url-shortener.svg",
    alignLeft: false,
    yearCompleted: "2024",
  },
  {
    title: "ML Autonomous Robot",
    description:
      "An autonomous pick-and-place robot using ML-based object recognition and OpenCV vision for real-time detection, built for IndiaSkills mechatronics workflows under competition constraints.",
    tech: ["TensorFlow", "OpenCV", "JavaScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/ml-robot.svg",
    alignLeft: true,
    yearCompleted: "2023",
  },
];
