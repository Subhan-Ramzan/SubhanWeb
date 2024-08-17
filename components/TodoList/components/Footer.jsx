import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-2 mt-auto text-center rounded-b-lg">
        <p className="text-sm">© 2024 iTask. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
          <a href="#" className="hover:text-blue-400">Contact Us</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;