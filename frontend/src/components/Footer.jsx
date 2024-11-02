import React from 'react';

const Footer = () => {
  return (
    <footer className="flex items-center bg-dark-green justify-center h-10 text-white">
        <p>&copy; {new Date().getFullYear()} MD. All rights reserved.</p>

    </footer>
  );
};

export default Footer;