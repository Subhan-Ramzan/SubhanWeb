"use client";
import { useEffect } from "react";
import Head from 'next/head';

export default function About() {
    useEffect(() => {
        // Adding simple fade-in animations on scroll
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fadeIn");
                    }
                });
            },
            { threshold: 0.2 }
        );

        sections.forEach((section) => observer.observe(section));
    }, []);

    return (
        <>
          <Head>
                <title>About Me | Subhan Ramzan Portfolio</title>
                <meta name="description" content="Learn more about Subhan Ramzan, a passionate web developer and full stack developer with expertise in modern web technologies." />
                <meta name="robots" content="index, follow" /> {/* Allow indexing */}
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="About Subhan Ramzan" />
                <meta property="og:description" content="Explore Subhan Ramzan's journey as a web developer and full stack developer. Discover his projects and skills." />
                <meta property="og:url" content="https://subhanramzan.com/about" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="flex items-center justify-center space-x-5 px-4 md:px-0">
                <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg text-center py-5 sm:py-10 transition-transform duration-500 transform hover:scale-110 hover:rotate-3">
                    About
                </h1>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 drop-shadow-lg text-center py-5 sm:py-10 transition-transform duration-500 transform hover:scale-110 hover:rotate-3">
                    Me
                </h1>
            </div>

            <div className="min-h-screen py-10">
                {/* Container */}
                <div className="max-w-6xl mx-auto px-6 sm:px-4 lg:px-0">
                    {/* Profile Section */}
                    <section className="opacity-0 transition-all duration-700 bg-white p-6 sm:p-10 rounded-lg shadow-lg mb-10 transform">
                        <div className="flex items-center justify-center space-x-2">
                            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 tracking-wider transition-transform duration-500 transform hover:scale-105 hover:rotate-2 drop-shadow-lg">
                                Subhan
                            </h1>
                            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 tracking-wider transition-transform duration-500 transform hover:scale-105 hover:rotate-2 drop-shadow-lg">
                                Ramzan
                            </h1>
                        </div>

                        <h2 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-4">
                            Web Developer & Full Stack Developer
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700">
                            I&apos;m a passionate web developer with a solid background in both
                            front-end and back-end technologies. With experience building
                            highly responsive websites using modern frameworks, I aim to
                            create seamless user experiences while ensuring robust backend
                            functionality.
                        </p>
                        <a
                            href="https://www.subhanweb.com"
                            className="text-blue-500 mt-4 inline-block hover:underline transition-all transform hover:scale-105"
                        >
                            www.subhanweb.com
                        </a>
                    </section>

                    {/* Contact Section */}
                    <section className="opacity-0 transition-all duration-700 bg-white p-6 sm:p-10 rounded-lg shadow-lg mb-10 transform">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                            Contact Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-gray-700 mb-2">
                                    <strong>Phone:</strong> +92 3250826305
                                </p>
                                <p className="text-gray-700 mb-2">
                                    <strong>Email:</strong> subhanramzan215@gmail.com
                                </p>
                                <p className="text-gray-700">
                                    <strong>Address:</strong> Chor Chowk, Mukarram Town,
                                    Rawalpindi
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-700">
                                    <strong>Portfolio:</strong>
                                    <a
                                        href="https://www.subhanweb.com"
                                        className="text-blue-500 hover:underline transition-all transform hover:scale-105"
                                    >
                                        www.subhanweb.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className="opacity-0 transition-all duration-700 bg-white p-6 sm:p-10 rounded-lg shadow-lg mb-10 transform">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Skills</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {[
                                "Web Development",
                                "Full Stack Development",
                                "Project Management",
                                "Teamwork",
                                "Time Management",
                                "C++",
                                "Effective Communication",
                                "Critical Thinking",
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg duration-300 shadow-lg transform transition-all hover:scale-105"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="opacity-0 transition-all duration-700 bg-white p-6 sm:p-10 rounded-lg shadow-lg mb-10 transform">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Education</h2>
                        <ul className="space-y-6">
                            <li>
                                <h3 className="text-lg sm:text-xl font-semibold">
                                    Harvard College - ICS (Computer Science)
                                </h3>
                                <p className="text-gray-700">2022 - 2024</p>
                            </li>
                            <li>
                                <h3 className="text-lg sm:text-xl font-semibold">DSA - C++</h3>
                                <p className="text-gray-700">2020 - 2022</p>
                            </li>
                            <li>
                                <h3 className="text-lg sm:text-xl font-semibold">
                                    Matric - Computer Science
                                </h3>
                                <p className="text-gray-700">
                                    Languages: English (Basics), Urdu (Fluent), Punjabi (Fluent)
                                </p>
                            </li>
                        </ul>
                    </section>

                    {/* Projects Section */}
                    <section className="opacity-0 transition-all duration-700 bg-white p-6 sm:p-10 rounded-lg shadow-lg mb-10 transform">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Projects</h2>
                        <div className="space-y-8">
                            {[
                                {
                                    name: "Portfolio Website",
                                    description:
                                        "Developed a personal portfolio website with Next.js, Tailwind CSS, and MongoDB, featuring user login, signup, support messaging, and showcasing all my projects.",
                                    link: "https://www.subhanweb.vercel.app",
                                },
                                {
                                    name: "E-Commerce Website",
                                    description:
                                        "Developed a responsive e-commerce platform featuring session-based authentication, including social logins (Google, GitHub, Facebook). Integrated MongoDB for product and image management using Multer, Cloudinary, and multer-storage-cloudinary.",
                                    link: "#",
                                },
                                {
                                    name: "Real-Time Location Tracking",
                                    description:
                                        "Developed a dynamic web application that utilizes real-time location tracking and interactive mapping. The application was built using Node.js, Express.js, Socket.io, and Leaflet.js, providing users with live Real-Time Geolocation Update positions.",
                                    link: "https://www.realtimelocation.com",
                                },
                                {
                                    name: "Spotify Clone",
                                    description:
                                        "Create a Spotify clone with JavaScript functionality for browsing singers, displaying their song libraries, and controlling playback (play, stop, skip, and adjust volume).",
                                    link: "/Spotify/spotify3.html",
                                },
                                {
                                    name: "SafePass",
                                    description:
                                        "Create a saved password manager website to save the user&apos;s website name, username, and password. Store this information in MongoDB and allow users to easily view their saved password manager data.",
                                    link: "/safepass",
                                },
                                {
                                    name: "Netflix Clone",
                                    description:
                                        "Created a Netflix home page clone using HTML and CSS.",
                                    link: "/netflix.html",
                                },
                                {
                                    name: "Todo List",
                                    description:
                                        "Our Todo List website is built using React.js, allowing users to input todo items. Each todo item is stored in local storage, enabling users to easily edit, delete, and finish them.",
                                    link: "/todolist",
                                },
                                {
                                    name: 'Tic-Tac-Toe',
                                    description: 'Developed a Tic-Tac-Toe website using JavaScript for win, lose, and two-player modes. Players compete by placing marks on a 3x3 grid to align three in a row, column, or diagonal.',
                                    link: '/TicTacToe/TicTacToe.html',
                                },
                                {
                                    name: 'Rock-Paper-Scissors',
                                    description: 'Created a Rock-Paper-Scissors website where the user can choose one option (rock, paper, or scissors), and the computer randomly selects one as well. The website then displays the result, indicating whether the user wins, loses, or if it&apos;s a draw.',
                                    link: '/RPS/RockPaperScissor.html',
                                },
                            ].map((project, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-lg"
                                >
                                    <h3 className="text-lg sm:text-2xl font-semibold text-black mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-700 mb-2">{project.description}</p>
                                    <a
                                        href={project.link}
                                        className="text-blue-500 hover:underline"
                                    >
                                        {project.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <style jsx>{
        `.animate-fadeIn {
          opacity: 1;
          transform: translateY(0);
        }
        section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }`
      }</style>

        </>
    );
}
