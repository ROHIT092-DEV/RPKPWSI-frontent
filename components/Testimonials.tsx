"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Working with Rohit was a pleasure. His ability to transform ideas into functional and beautiful designs exceeded my expectations.",
  },
  {
    name: "James Carter",
    role: "Founder of StartupX",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The project delivery was smooth and efficient. His knowledge of modern technologies like Next.js and Node.js is outstanding.",
  },
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "His eye for detail and design consistency really stood out. The collaboration was easy and professional throughout.",
  },
  {
    name: "Michael Lee",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    quote:
      "The code quality and scalability were top-notch. I’d highly recommend him for any web development project.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-950 py-20 overflow-hidden">
      {/* background gradient decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/30 via-transparent to-purple-300/20 dark:from-yellow-500/10 dark:to-purple-500/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          🌟 What People Say
        </h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Trusted by clients and collaborators worldwide
        </p>

        {/* grid */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between h-full border border-transparent hover:border-yellow-400"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover ring-4 ring-yellow-400/70 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                “{testimonial.quote}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
