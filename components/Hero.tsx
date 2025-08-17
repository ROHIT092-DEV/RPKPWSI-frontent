"use client";

import { CheckCircle, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#2e2a21] text-white">
      <div className="mx-auto max-w-7xl px-2 py-10 lg:flex lg:items-center lg:gap-12">
        {/* Left side - Text */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Introducing...
            <br />
            <span className="text-white">ZERO TO COMPLETE BSUINESS WEBSITE</span>
          </h2>

          <p className="mt-6 font-semibold text-lg">
            Additional ZERO TO COMPLETE business Website Features:
          </p>

          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>
                <strong>Admin Dashboard</strong> Complete Admin Dashboard to manage our business softly
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>
                <strong>Regularly Update:</strong> Per Business Requirement its been regularly update
              </span>
            </li>
          </ul>

          <div className="mt-8 items-center justify-center flex">
            <Link
              href="/project"
              className="inline-flex rounded-sm bg-indigo-400  text-lg py-3 px-8 font-semibold text-white shadow-md hover:bg-blue-700 transition"
            >
              CLICK HERE FOR MORE INFO!
            </Link>
          </div>
        </div>

        {/* Right side - Image/Video */}
        <div className="mt-10 flex-1 lg:mt-0">
          <div className="relative w-full max-w-lg mx-auto">
           <iframe className="md:w-[40rem] md:h-96 bg-yellow-200 aspect-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>

          </div>
        </div>
      </div>
    </section>
  );
}
