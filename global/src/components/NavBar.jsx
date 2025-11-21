import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-[#f8f8f6] text-gray-800 border-b border-gray-200 z-50 backdrop-blur-md dark:bg-[#0d0d0d] dark:text-gray-100`}
    >
      <div className="flex justify-between items-center px-10 py-5">
        <div className="flex gap-8 text-lg font-medium tracking-wide">
          <Link
            to="/"
            className="border-b-2 border-gray-900 pb-1 text-gray-900 transition dark:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/perfisprofissionais"
            className="border-b-2 border-gray-900 pb-1 text-gray-600 hover:text-gray-900 transition dark:text-gray-300"
          >
            Profissionais
          </Link>
        </div>

        <button
          onClick={toggleDark}
          className="rounded-full px-4 py-2 bg-neutral-800 text-neutral-200 dark:bg-neutral-300 dark:text-neutral-900 transition"
        >
          {darkMode ? "LIGHT" : "DARK"}
        </button>
      </div>
    </nav>
  );
}
