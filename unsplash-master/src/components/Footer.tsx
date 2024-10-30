// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 text-white fixed inset-x-0 bottom-0 z-50">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Imagify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;



