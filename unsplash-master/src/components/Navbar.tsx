// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto text-center">
        <h1 className="text-white text-4xl font-extrabold tracking-widest">
          <Link to="/">Imagify</Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
