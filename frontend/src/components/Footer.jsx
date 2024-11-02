import React from 'react';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center h-10">
        <p>&copy; {new Date().getFullYear()} MD. All rights reserved.</p>

    </footer>
  );
};

export default Footer;