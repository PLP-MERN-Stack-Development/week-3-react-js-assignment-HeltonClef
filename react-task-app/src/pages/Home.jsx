import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-pink-500 via-yellow-300 to-blue-500 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900 transition-all">
      <Card>
        <div className="flex flex-col items-center">
          <span className="text-7xl mb-4 animate-bounce">🌈</span>
          <h1 className="text-6xl font-extrabold text-white text-center mb-6 drop-shadow-[0_2px_24px_rgba(255,255,255,0.8)]">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Welcome to TaskApp!
            </span>
          </h1>
          <p className="text-2xl text-center mb-8 font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
            Organize your tasks, explore posts, and enjoy a{" "}
            <span className="bg-gradient-to-r from-green-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent underline decoration-wavy decoration-pink-400">
              colorful
            </span>{" "}
            UI.
          </p>
          <p className="text-lg text-center mb-8 font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Switch between <span className="font-bold">Light</span> &amp;{" "}
            <span className="font-bold">Dark</span> mode!
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="/tasks"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold shadow-lg hover:from-blue-500 hover:to-purple-600 transition"
            >
              Get Started
            </a>
            <a
              href="/posts"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-pink-400 text-purple-900 font-bold shadow-lg hover:from-yellow-400 hover:to-pink-500 transition"
            >
              Explore Posts
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
