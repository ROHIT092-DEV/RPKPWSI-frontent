"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#1e1b16] to-[#2e2a21] text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_60%)]"></div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:gap-16">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Introducing
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              ZERO TO COMPLETE BUSINESS WEBSITE
            </span>
          </h2>

          <p className="mt-4 font-medium text-lg text-gray-300">
            Build your professional website with everything you need from
            <span className="text-indigo-400 font-semibold"> start to finish</span>.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
              <span>
                <strong>Admin Dashboard</strong> — Manage your business seamlessly
                with a complete admin panel.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
              <span>
                <strong>Regular Updates</strong> — Stay ahead with continuous
                improvements tailored to business needs.
              </span>
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="/project"
              className="inline-flex items-center rounded-lg bg-indigo-500 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-600 hover:shadow-indigo-500/50 transition-all duration-300"
            >
              CLICK HERE FOR MORE INFO!
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-12 flex-1 lg:mt-0">
          <div className="relative mx-auto max-w-lg rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              className="w-full h-64 md:h-96 rounded-2xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Hero Video"
              allowFullScreen
            ></iframe>

            {/* Floating glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-30 blur-2xl animate-pulse -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
