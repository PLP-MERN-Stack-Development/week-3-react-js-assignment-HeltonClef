import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
      <div className="font-bold text-lg">TaskApp</div>
      <div className="flex items-center space-x-8">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/tasks" className="hover:underline">
          Tasks
        </Link>
        <Link to="/posts" className="hover:underline">
          Posts
        </Link>
        <button onClick={toggleTheme} className="ml-8">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
