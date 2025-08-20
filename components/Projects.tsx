"use client";
import Project, { ProjectType } from "./Project";

export default function Projects() {
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "E-Commerce Store",
      description:
        "A modern e-commerce platform with product listings, cart, and payment integration.",
      image: "https://picsum.photos/id/1011/600/400",
      link: "https://example.com",
      techStack: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
      rating: 4.8,
    },
    {
      id: 2,
      title: "Fitness App",
      description:
        "A mobile-first fitness app for tracking workouts, diet plans, and progress.",
      image: "https://picsum.photos/id/1015/600/400",
      link: "https://example.com",
      techStack: ["React Native", "Express", "PostgreSQL"],
      rating: 4.7,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A sleek personal portfolio website to showcase projects, blogs, and contact info.",
      image: "https://picsum.photos/id/1025/600/400",
      link: "https://example.com",
      techStack: ["Next.js", "Framer Motion", "TailwindCSS"],
      rating: 4.9,
    },
    {
      id: 4,
      title: "Online Learning Platform",
      description:
        "A full-featured platform for hosting video courses, quizzes, and student dashboards.",
      image: "https://picsum.photos/id/1035/600/400",
      link: "https://example.com",
      techStack: ["React", "Django", "PostgreSQL"],
      rating: 4.6,
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          🚀 My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
