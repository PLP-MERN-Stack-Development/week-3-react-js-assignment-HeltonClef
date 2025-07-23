import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
}
