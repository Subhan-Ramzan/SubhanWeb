// components/About.js
'use client'; // Yeh directive add karein

import React from 'react';
import Link from 'next/link';

const About = () => {
    const handleResume = () => {
        const link = document.createElement('a');
        link.href = '/Resume.pdf'; // Apne PDF file ka correct path
        link.download = 'Resume.pdf';
        link.click();
    };

    return (
        <div className="mt-10 w-full text-center h-auto py-10 mx-auto flex flex-col items-center">
            <h2 className="font-bold text-4xl mb-5">More About</h2>
            <hr className="w-full mb-10 border-t-2 border-gray-300" />
            
            <div className="mb-10">
                <h2 className="font-bold text-3xl mb-5">React and MongoDB/LocalStorage</h2>
                <div className="py-5 grid md:grid-cols-2 gap-8 grid-cols-1">
                    <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
                        <img className="w-full h-[24vh] object-cover object-top mb-4" src="/safepass.jpeg" alt="SafePass" />
                        <Link href="/safepass">
                            <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Open Link</button>
                        </Link>
                    </div>
                    <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
                        <img className="w-full h-[24vh] object-cover object-top mb-4" src="/todolist.jpeg" alt="TodoList" />
                        <Link href="/todolist">
                            <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Open Link</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <h2 className="font-bold text-3xl mb-5">Spotify and Netflix</h2>
                <div className="py-5 grid md:grid-cols-2 gap-8 grid-cols-1">
                    <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
                        <img className="w-full h-[24vh] object-cover mb-4" src="/spotify.png" alt="Spotify" />
                        <Link href="/Spotify/spotify3.html">
                            <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Open Link</button>
                        </Link>
                    </div>
                    <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
                        <img className="w-full h-[24vh] object-cover mb-4" src="/netflix.png" alt="Netflix" />
                        <Link href="/Netflix/Netflix.html">
                            <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Open Link</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="font-bold text-3xl mb-5">Games</h2>
                <div className="py-5 grid md:grid-cols-2 gap-8 grid-cols-1">
                    <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
                        <img className="w-full h-[24vh] object-cover object-top mb-4" src="/rps.jpeg" alt="Rock Paper Scissors" />
                        <Link href="/RPS/RockPaperScissor.html">
                            <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Open Link</button>
                        </Link>
                    </div>
                    <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
                        <img className="w-full h-[24vh] object-cover mb-4" src="/tickcross.jpeg" alt="Tic Tac Toe" />
                        <Link href="/TicTacToe/TicTacToe.html">
                            <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Open Link</button>
                        </Link>
                    </div>
                </div>
            </div>
            
            <button className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg' onClick={handleResume}>
                Download Resume
            </button>
        </div>
    );
};

export default About;