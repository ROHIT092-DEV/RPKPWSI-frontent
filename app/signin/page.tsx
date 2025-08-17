'use client'

import Link from "next/link";
import { useState } from "react";


function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
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
            Log In
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
