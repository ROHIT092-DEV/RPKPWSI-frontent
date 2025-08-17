"use client";
import Image from "next/image";
import { ProjectType } from "./Projects";

function Project({ title, description, image, link, techStack, rating } : ProjectType) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col gap-4">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="rounded-xl object-cover w-full h-48"
      />
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 bg-gray-500 border text-white font-medium rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="font-semibold text-yellow-500">⭐ {rating}</p>

      <a
        href={link}
        target="_blank"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Live Demo
      </a>
    </div>
  );
}

export default Project;
