import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { movie, selectedSeats, totalPrice, showTime } = location.state || {};

  if (!movie || !selectedSeats || !totalPrice || !showTime) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-green-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Booking Detail</h1>

        <div className="mb-4">
          <h2 className="text-lg font-bold">Schedule</h2>
          <p className="text-sm">Movie Title</p>
          <p className="text-xl mb-2">{movie.title}</p>
          <p className="text-sm">Date</p>
          <p className="text-md">{showTime.date}</p>
          <p className="text-sm">Ticket Time</p>
          <p className="text-md">{showTime.time}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold">Selected Seats</h2>
          <div className="flex flex-wrap gap-2">
            {selectedSeats.map(seat => (
              <span key={seat.seatNumber} className="bg-gray-700 px-2 py-1 rounded">{seat.seatNumber}</span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold">Total Price</h2>
          <p className="text-2xl font-bold">Rs. {totalPrice}/-</p>
        </div>

        <button
          className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 mt-4"
          onClick={() => navigate('/')}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingDetail;
