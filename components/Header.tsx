"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogIn, Menu, X, ChevronDown, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/store/auth";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur shadow-lg">
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
          {user?.role === "admin" && (
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 rounded-lg border border-gray-700 px-3 py-2 text-sm text-gray-200 hover:bg-gray-800 transition"
            >
              <LayoutDashboard size={16} />
              Admin Dashboard
            </Link>
          )}

          {user ? (
            <div className="relative">
              {/* Profile Avatar */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2"
              >
                <Image
                  src={user.avatar || "/default-avatar.png"}
                  alt={user.fullName || "User Avatar"}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full ring-2 ring-pink-500 shadow-md object-cover transition-transform hover:scale-105 cursor-pointer"
                />
                <ChevronDown
                  className={`h-4 w-4 text-gray-300 transition-transform ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Profile Dropdown */}
              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-44 rounded-xl bg-gray-800 shadow-lg border border-gray-700 p-2"
                  >
                    <p className="px-3 py-2 text-sm text-gray-400">
                      {user.fullName}
                    </p>
                    <button
                      onClick={logout}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              <div className="flex flex-col gap-4">
                {user.role === "admin" && (
                  <Link
                    href="/admin"
                    className="block rounded-lg border border-gray-700 px-3 py-2 text-gray-200 hover:bg-gray-700 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}

                <div className="flex items-center gap-3">
                  <Image
                    src={user.avatar || "/default-avatar.png"}
                    alt={user.fullName || "User Avatar"}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full ring-2 ring-pink-500 shadow-md object-cover cursor-pointer"
                  />
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
                className="block text-center rounded-lg border border-gray-700 px-3 py-2 text-gray-200 hover:bg-gray-700 transition"
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
