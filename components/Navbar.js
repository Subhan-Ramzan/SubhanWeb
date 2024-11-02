"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toast.info(`Menu ${isMenuOpen ? "closed" : "opened"}`); // Notify user of menu toggle
  };

  const logoutCookies = async () => {
    try {
      await axios.post("/api/logout");
      setUserData(null);
      toast.success("Logout successful!"); // Notify successful logout
    } catch (err) {
      console.error("Logout Error:", err);
      toast.error("Logout failed. Please try again."); // Notify error on logout
    }
  };

  const phoneNumber = "+923250826305"; // Replace with the actual phone number
  const textMessage = encodeURIComponent("Hello! I need help."); // Customize your message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

  useEffect(() => {
    const fetchCookieData = async () => {
      try {
        const response = await axios.get("/api/protected", {
          withCredentials: true,
        });
        setUserData(response.data.user);
        // toast.success("User data fetched successfully!"); // Notify successful fetch
      } catch (error) {
        console.error("Failed to fetch protected data:", error);
        // toast.error("Failed to fetch user data. Please try again."); // Notify fetch error
      }
    };

    if (status === "unauthenticated" && !userData) {
      fetchCookieData();
    }
  }, [status, userData, router]);

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
    <>
      <div
        className={`w-full top-0 left-0 transition-opacity duration-300 ${
          isScrolled ? "bg-gray-900/70 fixed" : "bg-gray-900"
        } z-50`}
      >
        <nav className="shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/">
                  <span className="relative group text-white text-2xl font-semibold hover:animate-spin hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
                    <span className="text-blue-500">&lt;</span>
                    <span className="text-white group-hover:rotate-45 transition-transform duration-500">
                      Port
                    </span>
                    <span className="text-blue-500 group-hover:text-blue-900 group-hover:rotate-45 transition-all duration-1000">
                      Folio/&gt;
                    </span>
                  </span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <ul className="hidden md:flex space-x-8">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
                  >
                    <FaHome /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/read"
                    className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
                  >
                    <FaInfoCircle /> About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
                  >
                    <FaServicestack /> Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={whatsappUrl}
                    target="_blank" // Opens WhatsApp in a new tab
                    rel="noopener noreferrer" // Security feature
                    className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
                  >
                    <FaEnvelope /> Contact
                  </Link>
                </li>
              </ul>

              {/* Auth & Cart Section */}
              <div className="hidden md:flex items-center gap-2">
                {status === "authenticated" || userData !== null ? (
                  <>
                    <p className="text-white">
                      Welcome,{" "}
                      {session?.user?.name ||
                        userData.username ||
                        session?.user?.email?.split(/(?=\d)/)[0]}
                    </p>
                    <button
                      onClick={async () => {
                        await signOut();
                        await logoutCookies();
                      }}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-white hover:text-blue-500 transition-colors duration-300"
                    >
                      Login
                    </Link>
                    <Link href="/signup">
                      <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                        Sign up
                      </button>
                    </Link>
                  </>
                )}
              </div>

              {/* Hamburger Menu */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                >
                  <FaBars
                    className={`h-6 w-6 transition-transform duration-300 ${
                      isMenuOpen ? "rotate-90" : ""
                    } transform hover:scale-110`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out transform ${
              isMenuOpen
                ? "max-h-screen opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4"
            } overflow-hidden bg-gray-900 px-3 py-0`}
          >
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
                >
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/read"
                  className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
                >
                  <FaInfoCircle /> About
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
                >
                  <FaServicestack /> Services
                </Link>
              </li>
              <li>
                <Link
                  href={whatsappUrl}
                  target="_blank" // Opens WhatsApp in a new tab
                  rel="noopener noreferrer" // Security feature
                  className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
                >
                  <FaEnvelope /> Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
