import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-slate-800 p-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center text-white">
                <div className="text-2xl font-bold">
                    <span className="text-green-400">&lt;</span>
                    <span>Safe</span>
                    <span className="text-green-400">Pass/&gt;</span>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#" className="text-white hover:text-green-400 transition duration-300">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-green-400 transition duration-300">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-green-400 transition duration-300">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
