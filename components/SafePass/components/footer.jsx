import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-800 p-1 shadow-md ">
            <div className=" text-white flex md:flex-row flex-col items-center justify-between ml-0 md:ml-2">
                <div className="flex item-center text-center justify-center flex-col font-bold">
                    <div className='justify-center items-center text-center'>
                        <span className="text-green-400">&lt;</span>
                        <span>Safe</span>
                        <span className="text-green-400">Pass/&gt;</span>
                    </div>
                    <div className='mt-1'>
                        Created by <span className="text-green-300 font-bold italic decoration-green-400 decoration-2">&lt;Subhan&gt;</span>
                    </div>
                </div>
                <div className="space-x-5">
                    <a href="#" className="text-white hover:text-green-400 transition duration-300">Privacy Policy</a>
                    <a href="#" className="text-white hover:text-green-400 transition duration-300">Terms of Service</a>
                    <a href="#" className="text-white hover:text-green-400 transition duration-300">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
