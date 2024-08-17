import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../index.css";

const Page = () => {
    return (
        <>
            <Navbar />
            <div className="h-auto p-4">
                <h1 className="text-center font-bold text-4xl py-4">About Me</h1>
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center py-10 space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="lg:w-2/3 p-6 rounded-lg shadow-md bg-gradient-to-r from-purple-900 to-blue-700 hover:from-purple-800 hover:to-blue-700">
                        <img
                            className="w-44 h-44 object-cover object-top rounded-3xl shadow-md"
                            src="/Subhan.jpg"
                            alt="Subhan Ramzan"
                        />
                        <h2 className="text-2xl font-semibold mb-4">Education</h2>
                        <p className="mb-2">Subhan Ramzan</p>
                        <p className="mb-4">Web Developer</p>

                        <h2 className="text-xl font-semibold mb-2">Contact</h2>
                        <p className="mb-2">+92 3250826305</p>
                        <p className="mb-2">subhanramzan215@gmail.com</p>
                        <p className="mb-4">Chor Chowk, Mukarram Town, Rawalpindi</p>
                        <p className="mb-4">www.subhanweb.com</p>

                        <h2 className="text-xl font-semibold mb-2">Skills</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Web Development</li>
                            <li>Full Stack Developer</li>
                            <li>Project Management</li>
                            <li>Teamwork</li>
                            <li>Time Management</li>
                            <li>C++</li>
                            <li>Effective Communication</li>
                            <li>Critical Thinking</li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">Education</h2>
                        <p className="mb-2">Harvard College</p>
                        <p className="mb-2">ICS - Computer Science (2022 - 2024)</p>
                        <p className="mb-4">DSA - C++ (2020 - 2022)</p>
                        <p className="mb-4">Matric - Computer Science</p>

                        <h2 className="text-xl font-semibold mb-2">Languages</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>English (Basics)</li>
                            <li>Urdu (Fluent)</li>
                            <li>Punjabi (Fluent)</li>
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">Profile</h2>
                        <p className="mb-4">Front-End: HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Responsive design using Tailwind CSS</p>
                        <p className="mb-4">Back-End: Node.js, Express.js, MongoDB (Mongoose)</p>


                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-center">Projects</h2>
                        <ul className="list-disc list-inside mb-4 space-y-4 w-[50vw] bg-white rounded-3xl p-10">
                            <li className="text-black"><span className="font-bold text-black">Portfolio Website:</span> Developed a personal portfolio website with Next.js, Tailwind CSS, and MongoDB, featuring user login, signup, and support messaging.</li>
                            <li className="text-black"><span className="font-bold text-black">Spotify Clone:</span> Created a Spotify clone with JavaScript functionality for browsing singers, displaying their song libraries, and controlling playback (play, stop, skip, and adjust volume).</li>
                            <li className="text-black"><span className="font-bold text-black">SafePass:</span> Created a saved password manager website to save the user's website name, username, and password, storing this information in MongoDB.</li>
                            <li className="text-black"><span className="font-bold text-black">Netflix Clone:</span> Created a Netflix home page clone using HTML and CSS.</li>
                            <li className="text-black"><span className="font-bold text-black">TodoList:</span> Built a Todo List website using React.js, allowing users to input, edit, delete, and finish todo items, with data stored in local storage.</li>
                            <li className="text-black"><span className="font-bold text-black">Games:</span> Developed a Tic-Tac-Toe website using JavaScript for win, lose, and two-player modes, and a Rock-Paper-Scissors website with a computer opponent.</li>
                        </ul>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Page;
