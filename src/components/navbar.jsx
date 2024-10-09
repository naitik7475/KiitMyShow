// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-blue-900 text-white">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">KiitMyShow</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:underline">Movies</a>
          <a href="#" className="hover:underline">Events</a>
          <a href="#" className="hover:underline">Plays</a>
          <a href="#" className="hover:underline">Sports</a>
          <a href="#" className="hover:underline">Activities</a>
        </nav>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search" className="hidden md:block p-2 rounded-md text-black" />
          <button className="bg-blue-600 text-white p-2 rounded-md">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
