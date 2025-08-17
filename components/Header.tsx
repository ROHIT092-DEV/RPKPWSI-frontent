"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronRight, LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo.jpg'

const navLinks = [
  { label: "Project", href: "/project" },
 
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-gray-900 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl  sm:px-6">
        <div className="flex items-center justify-between px-2 py-4">
          {/* Left - Logo */}
          <Link href="/" className="p-2">
            <Image src={logo } alt="" width={40} height={40}/>
          </Link>

          {/* Center - Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className=" transition-colors text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right - Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 text-sm hover:shadow text-white">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </button>

            {/* Mobile menu button */}
            <button
              ref={btnRef}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="topmenu-panel"
              className="inline-flex items-center justify-center rounded-2xl border px-3 py-2 text-white hover:shadow md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drop-down panel (pushes content below instead of overlay) */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="topmenu-panel"
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b bg-gray-900 text-white"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
              <ul className="grid gap-1">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium   active:bg-neutral-200"
                    >
                      <span>{l.label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-2">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium hover:shadow"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
