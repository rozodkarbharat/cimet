// Footer.tsx
import React from 'react';

const Footer= () => {
  return (
    <footer className="bg-black p-4 text-white fixed inset-x-0 bottom-0 z-50">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Unsplash. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;



