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
    <section className="py-16 dark:bg-gray-950 bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900 dark:text-white">
          🚀 My Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-200 text-yellow-900 dark:bg-yellow-600 dark:text-yellow-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2 text-yellow-500">
                  {"⭐".repeat(Math.floor(project.rating))}
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                    {project.rating.toFixed(1)}
                  </span>
                </div>

                {/* Visit Button */}
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 px-5 py-2 text-sm font-semibold text-white bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-700 transition-colors"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
