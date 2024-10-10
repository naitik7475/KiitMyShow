// src/components/Navbar.jsx
import React, { useState } from 'react';
import LoginModal from './LoginModal'; // Import the LoginModal component

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header style={{ backgroundColor: '#02284D' }} className="text-white">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">KiitMyShow</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Showtimes</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Notice</a>
          <a href="#" className="hover:underline">More</a>
        </nav>
        <div>
          <button className="bg-blue-600 text-white p-2 rounded-md" onClick={handleLoginClick}>Login</button>
        </div>
      </div>

      {/* Render the modal */}
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Navbar;
