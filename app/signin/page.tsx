"use client";

import Spinner from "@/components/Spinners";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // send/receive cookies
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Invalid credentials");

      const data = await res.json();
      setUser(data);
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex  pt-30 pb-10 justify-center  px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border rounded-2xl shadow-xl p-8">
        {/* Logo */}
        <h1 className="font-extrabold text-4xl sm:text-5xl tracking-tight text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg italic">
          Instagram
        </h1>

        {/* Error Message */}
        {error && (
          <div
            className="flex items-center p-4 mb-6 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-red-900/20 dark:text-red-300"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 mr-3 text-red-600 dark:text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9 14h2v2H9v-2Zm0-8h2v6H9V6Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-medium">{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent
                text-gray-700 dark:text-gray-200 placeholder-gray-400 
                bg-gray-50 dark:bg-gray-800 shadow-sm transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent
                text-gray-700 dark:text-gray-200 placeholder-gray-400 
                bg-gray-50 dark:bg-gray-800 shadow-sm transition-all duration-300"
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white bg-pink-600 hover:bg-pink-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? <Spinner /> : "Log In"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
