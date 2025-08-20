"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LogIn,
  LayoutDashboard,
  Home,
  User,
  Search,
  PlusSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/store/auth";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:opacity-80 transition"
        >
          Instagram
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {user?.role === "admin" && (
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              <LayoutDashboard size={16} />
              Admin Dashboard
            </Link>
          )}

          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2"
              >
                <Image
                  src={user.avatar || "/default-avatar.png"}
                  alt={user.fullName || "User Avatar"}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-blue-500 shadow-sm object-cover transition-transform hover:scale-105 cursor-pointer"
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
                    className="absolute right-0 mt-3 w-44 rounded-xl bg-white shadow-lg border border-gray-200 p-2"
                  >
                    <p className="px-3 py-2 text-sm text-gray-500">
                      {user.fullName}
                    </p>
                    <button
                      onClick={logout}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
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
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 transition"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <nav className="flex justify-around items-center py-2">
          <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
            <Home size={22} />
            <span className="text-xs">Home</span>
          </Link>

          <Link href="/search" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
            <Search size={22} />
            <span className="text-xs">Search</span>
          </Link>

          {user?.role === "admin" && (
            <Link
              href="/admin"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <LayoutDashboard size={22} />
              <span className="text-xs">Admin</span>
            </Link>
          )}

          {user ? (
            <button
              onClick={logout}
              className="flex flex-col items-center text-gray-600 hover:text-red-500"
            >
              <User size={22} />
              <span className="text-xs">Logout</span>
            </button>
          ) : (
            <Link
              href="/signin"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <LogIn size={22} />
              <span className="text-xs">Login</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
