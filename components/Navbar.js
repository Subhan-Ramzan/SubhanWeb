//components/Navbar.js
import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 shadow-lg item-center">
        <div className="container mx-auto px-6 py-3 items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex justify-center items-center text-center py-1">
                <Link href="/">
                  <span className="text-white text-2xl font-semibold hover:text-white transition duration-300">
                    <span className="text-blue-500">&lt;</span>
                    <span className="text-white">Port</span>
                        <span className="text-blue-500">Folio/&gt;</span>
                  </span>
                </Link>
              </div>

              <ul className="hidden md:flex space-x-8 ml-8">
                <li>
                  <Link href="/">
                    <span className="text-white hover:text-blue-700 transition duration-300">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="text-white hover:text-blue-700 transition duration-300">
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="text-white hover:text-blue-700 transition duration-300">
                      Services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="text-white hover:text-blue-700 transition duration-300">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex items-center">
              <Link href="/login">
                <span className="text-white hover:text-blue-700 transition duration-300 px-4">
                  Login
                </span>
              </Link>
              <Link href="/signup">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                  Sign up
                </button>
              </Link>
            </div>
            <div className="md:hidden flex">
              <button className="text-white focus:outline-none">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
