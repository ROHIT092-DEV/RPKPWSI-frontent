"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogIn, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/store/auth";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-pink-500 italic hover:opacity-80 transition"
        >
          Instagram
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4">
              {/* <span className="text-sm text-gray-300">{user.fullName}</span> */}
              <Image
                src={user.avatar || "/default-avatar.png"}
                alt={user.fullName || "User Avatar"}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full ring-2 ring-blue-400 shadow-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={logout}
                className="px-3 py-1 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/signin"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-800 transition"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button (with animation only here) */}
        <motion.button
          className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 px-6 py-4 space-y-4 shadow-lg"
          >
            {user ? (
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-3">
  {/* Profile Avatar */}
  <Image
    src={user.avatar || "/default-avatar.png"}
    alt={user.fullName || "User Avatar"}
    width={40}
    height={40}
    className="h-10 w-10 rounded-full ring-2 ring-pink-500 shadow-md object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
  />

  {/* Logout Button */}
  <button
    onClick={() => {
      logout();
      setIsOpen(false);
    }}
    className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-sm font-medium shadow hover:bg-red-700 hover:shadow-lg transition-all"
  >
    Logout
  </button>
</div>

                
              </div>
            ) : (
              <Link
                href="/signin"
                className="block w-full text-center rounded-lg border border-gray-700 px-3 py-2 text-gray-200 hover:bg-gray-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
