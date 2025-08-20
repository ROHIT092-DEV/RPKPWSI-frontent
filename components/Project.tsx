"use client";
import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
  rating: number;
};

export default function Project({
  title,
  description,
  image,
  link,
  techStack,
  rating,
}: ProjectType) {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Project Image */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-48 w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition"></div>
        <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-lg">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Rating + Button */}
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1 font-semibold text-yellow-500">
            <Star className="h-4 w-4 fill-yellow-500" /> {rating}
          </p>
          <a
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition-all duration-300"
          >
            Live Demo <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
