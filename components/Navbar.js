"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaShoppingCart, FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll to change navbar opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full transition-opacity duration-300 ${isScrolled ? 'bg-gray-900/70' : 'bg-gray-900'}`}>
      <nav className="shadow-lg">
        <div className="container mx-auto px-4 py-3"> {/* Adjusted padding for better mobile experience */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <span className="relative group text-white text-2xl font-semibold hover:animate-spin hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
                  <span className="text-blue-500">&lt;</span>
                  <span className="text-white group-hover:rotate-45 transition-transform duration-500">Port</span>
                  <span className="text-blue-500 group-hover:text-blue-900 group-hover:rotate-45 transition-all duration-1000">Folio/&gt;</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link href="/" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3">
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3">
                  <FaInfoCircle /> About
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3">
                  <FaServicestack /> Services
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3">
                  <FaEnvelope /> Contact
                </Link>
              </li>
            </ul>

            {/* Auth & Cart Section */}
            <div className="hidden md:flex items-center gap-2">
              {status === "authenticated" ? (
                <>
                  <p className="text-white">
                    Welcome, {session.user.name || session.user.email.split(/(?=\d)/)[0]}
                  </p>
                  <button
                    onClick={() => signOut()}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-white hover:text-blue-500 transition-colors duration-300">
                    Login
                  </Link>
                  <Link href="/signup">
                    <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                      Sign up
                    </button>
                  </Link>
                </>
              )}
              <FaShoppingCart className="text-white text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-300 transform hover:scale-110" />
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <FaBars
                  className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""} transform hover:scale-110`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
          } overflow-hidden bg-gray-900 py-1`}
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3">
                <FaInfoCircle /> About
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3">
                <FaServicestack /> Services
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3">
                <FaEnvelope /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
