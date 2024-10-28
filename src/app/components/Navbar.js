import React, { useState } from "react";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className="py-4 bg-black sm:py-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="#" title="" className="flex">
              <img
                className="w-auto h-20"
                src="logo_v3.png"
                // src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                alt=""
              />
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
            <a
              href="#"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Markets
            </a>
            <a
              href="#"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Trade
            </a>
            <a
              href="#"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Future
            </a>
            <a
              href="#"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Earn
            </a>
          </nav>

          <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
            <a
              href="#"
              className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
            >
              Get Started Now
            </a>
          </div>
        </div>

        {expanded && (
          <nav className="flex flex-col pt-8 pb-4 space-y-6">
            <a
              href="#"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Markets
            </a>
            <a
              href="#"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Trade
            </a>
            <a
              href="#"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Future
            </a>
            <a
              href="#"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Earn
            </a>
            <div className="relative inline-flex items-center justify-center group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a
                href="#"
                className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
              >
                Get Started
              </a>
            </div>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
