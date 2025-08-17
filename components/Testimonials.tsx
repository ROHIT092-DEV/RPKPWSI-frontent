"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Working with Rohit was a pleasure. His ability to transform ideas into functional and beautiful designs exceeded my expectations.",
  },
  {
    name: "James Carter",
    role: "Founder of StartupX",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The project delivery was smooth and efficient. His knowledge of modern technologies like Next.js and Node.js is outstanding.",
  },
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "His eye for detail and design consistency really stood out. The collaboration was easy and professional throughout.",
  },
  {
    name: "Michael Lee",
    role: "Software Engineer",
    image:
      "https://randomuser.me/api/portraits/men/76.jpg",
    quote:
      "The code quality and scalability were top-notch. I’d highly recommend him for any web development project.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          What People Say
        </h2>
        <p className="mt-2 text-gray-600">
          Testimonials from clients and collaborators
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                “{testimonial.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
