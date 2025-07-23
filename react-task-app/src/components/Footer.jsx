import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-4 mt-auto">
      <span className="text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} TaskApp. All rights reserved.
      </span>
    </footer>
  );
}
