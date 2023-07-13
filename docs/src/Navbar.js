import { Link, useLocation } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);
  let location = useLocation();

  console.log(location);

  const handleItemClick = (link) => {
    setActive(link);
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (location.pathname.includes("projects")) {
      setActive("projects");
    } else if (location.pathname.includes("about")) {
      setActive("about");
    } else {
      setActive("home");
    }
  }, []);
  return (
    <nav className="bg-gray-100 sticky w-full z-20 top-0 left-0 border-b">
      <div className="w-full flex flex-wrap items-center justify-between p-4">
        <span className="self-center text-2xl font-semibold text-black">
          AT
        </span>
        <div className="flex md:order-2 hover:bg-gray-300">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={!isCollapsed}
            onClick={handleToggleCollapse}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isCollapsed ? "hidden" : "md:flex"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100">
            <li>
              <Link
                to="/"
                onClick={() => {
                  setIsCollapsed(true);
                  handleItemClick("home");
                }}
              >
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "home"
                      ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                >
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  setIsCollapsed(true);
                  handleItemClick("about");
                }}
              >
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "about"
                      ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                >
                  About
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => {
                  setIsCollapsed(true);
                  handleItemClick("projects");
                }}
              >
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "projects"
                      ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                >
                  Projects
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
