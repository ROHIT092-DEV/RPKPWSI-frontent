"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <span className="absolute w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-10 left-10" />
        <span className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob bottom-10 right-10 animation-delay-2000" />
        <span className="absolute w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-40 right-40 animation-delay-4000" />
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 lg:px-16 py-24 flex flex-col-reverse lg:flex-row items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Build Your{" "}
            <span className="text-yellow-300">Dream Project</span> with Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0">
            We create stunning digital solutions with design & technology that
            helps your business grow faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/get-started"
              className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold text-lg shadow-lg hover:bg-yellow-300 transition"
            >
              Get Started
            </Link>
            <Link
              href="/learn-more"
              className="px-6 py-3 rounded-xl border border-white/40 text-white font-semibold text-lg shadow-lg hover:bg-white/20 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Hero Animated Images */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 mb-12 lg:mb-0 relative flex justify-center"
        >
          <div className="relative w-[320px] h-[320px] lg:w-[450px] lg:h-[450px]">
            {images.map((src, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ scale: 0, rotate: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  rotate: i % 2 === 0 ? 6 : -6,
                  opacity: 1,
                  y: [0, -10, 0], // floating effect
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.3,
                  y: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 3 + i,
                  },
                }}
                style={{
                  top: i % 2 === 0 ? `${i * 60}px` : `${i * 40}px`,
                  left: i % 2 === 0 ? `${i * 40}px` : `${i * 80}px`,
                }}
              >
                <Image
                  src={src}
                  alt={`Hero ${i}`}
                  width={200}
                  height={200}
                  className="rounded-xl shadow-xl border-4 border-white/40"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
