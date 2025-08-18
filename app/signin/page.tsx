"use client";

import Spinner from "@/components/Spinners";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { authState, User } from "@/recoil/authAtom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
    const setAuth = useSetRecoilState(authState);


  const handleLoginSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Login Logic Here

     try {
      const res = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // send/receive cookies
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Invalid credentials");

      const data: { user: User } = await res.json();

      setAuth({
        isAuthenticated: true,
        user: data.user,
      });

      router.push("/user");
    } catch (err: any) {
      setError(err.message);
    }


  };
  return (
    <div className="lg:max-w-3xl mx-auto min-h-screen ">
      <h1
        className="font-extrabold text-4xl sm:text-5xl tracking-tight  text-center pt-20 pb-14
             bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 
             bg-clip-text text-transparent drop-shadow-lg italic"
      >
        Instagram
      </h1>

      {/* Error Show case */}

      <div className="px-4">
        {error && (
        <div
          className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 shadow-sm "
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-5 h-5 mr-3 text-red-600"
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


      </div>

      <div className="px-2 border">
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="Username or Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-pink-500 
             focus:border-transparent text-gray-700 placeholder-gray-400 
             shadow-sm transition-all duration-300"
          />

          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-pink-500 
             focus:border-transparent text-gray-700 placeholder-gray-400 
             shadow-sm transition-all duration-300"
          />

          <span className="justify-end flex text-indigo-600 hover:text-indigo-900 cursor-pointer">
            Forget password
          </span>

          <button className="bg-blue-600 w-full py-3 text-white font-medium rounded-sm cursor-pointer">
            {loading ? <Spinner /> : "Log In"}
          </button>

          <div>
            <span className="font-medium tracking-tight">
              You do not have an account?
            </span>
            <Link
              href="/signup"
              className="text-indigo-500 hover:bg-indigo-900"
            >
              {" "}
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
