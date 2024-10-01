// components/SocialIcons.js
"use client"
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const SocialIcons = () => {
  const [visible, setVisible] = useState(false);
  const whatsappNumber = '+923250826305'; // Replace with your actual number

  // Show icons after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed right-4 bottom-1/2 transform translate-y-1/2 flex flex-col gap-4 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <a 
        href={`https://wa.me/${whatsappNumber}?text=Hi, I want to connect with you!`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 md:p-3 lg:p-4"
      >
        <FaWhatsapp className="text-lg md:text-xl lg:text-2xl" />
      </a>
      <a 
        href="https://github.com/Subhan-Ramzan"
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-gray-800 text-white rounded-full p-4 shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-110 md:p-3 lg:p-4"
      >
        <FaGithub className="text-lg md:text-xl lg:text-2xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
