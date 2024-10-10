// src/components/LoginModal.jsx
import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render anything if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay with blur effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md" onClick={onClose}></div>
      
      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-96">
        <h2 className="text-xl font-bold mb-4 text-black text-center">Log in to your account</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Email:</label>
            <input
              type="email"
              className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Password:</label>
            <input
              type="password"
              className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-md w-full mb-4 hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          <div className="text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={onClose} // Assuming clicking it will close the modal for now
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
