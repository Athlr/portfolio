import { Link, useLocation } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  let location = useLocation();

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
  }, [location]);
  return (
    // Was a border-b in nav
    <nav className="bg-gray-100 sticky w-full z-20 top-0 left-0 bg-navFooter">
      <div className="w-full flex flex-wrap items-center justify-between p-4">
        <span className="self-center text-2xl font-semibold text-black">
          AT
        </span>
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:ring-1 focus:ring-white"
            aria-controls="navbar-sticky"
            aria-expanded={!isCollapsed}
            onClick={handleToggleCollapse}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-mainbody md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-navFooter">
            <li>
              <Link
                to="/"
                onClick={() => {
                  setIsCollapsed(true);
                }}
              >
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "home"
                      ? "text-white bg-buttonColor rounded md:rounded-none md:bg-transparent md:text-white md:p-0 md:border-b-2"
                      : "text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:p-0"
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
                }}
              >
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "about"
                      ? "text-white bg-buttonColor rounded md:rounded-none md:bg-transparent md:text-white md:p-0 md:border-b-2"
                      : "text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:p-0"
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
                }}
              >
                <div
                  className={`block py-2 pl-3 pr-4 ${
                    active === "projects"
                      ? "text-white bg-buttonColor rounded md:rounded-none md:bg-transparent md:text-white md:p-0 md:border-b-2"
                      : "text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:p-0"
                  }`}
                >
                  Projects
                </div>
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1yqIJUJHiAY8RspA3Txwpzv1fW7kO5Gq8/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:p-0">
                  Resume
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
