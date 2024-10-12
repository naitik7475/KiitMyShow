import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import xmen from '../assets/movies/xmen.png';
import blackpanther from '../assets/movies/blackpanther.png';
import babydriver from '../assets/movies/babydriver.png';
import jumanji from '../assets/movies/jumanji.png';

const SeatSelection = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const movies = [
    { id: 1, title: 'X-Men: Apocalypse', poster: xmen },
    { id: 2, title: 'Black Panther', poster: blackpanther },
    { id: 3, title: 'Baby Driver', poster: babydriver },
    { id: 4, title: 'Jumanji', poster: jumanji },
  ];

  useEffect(() => {
    const selectedMovie = movies.find(m => m.id === parseInt(movieId));
    setMovie(selectedMovie);
  }, [movieId]);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats(prevSeats => 
      prevSeats.includes(seatNumber)
        ? prevSeats.filter(seat => seat !== seatNumber)
        : [...prevSeats, seatNumber]
    );
  };

  if (!movie) return <div>Loading...</div>;

  const seatRows = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold mb-4">{movie.title} - Seat Selection</h1>
        <div className="flex items-center">
          <img src={movie.poster} alt={movie.title} className="w-32 h-48 object-cover mr-4" />
          <div>
            <p className="text-lg mb-2">Select your seats for the show.</p>
            <p className="text-sm text-gray-400">Price per seat: NRs. 250/-</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-8 rounded-lg">
        <div className="w-full h-8 bg-yellow-400 mb-8 rounded-full flex items-center justify-center text-black font-bold">SCREEN</div>
        <div className="grid grid-cols-10 gap-2 mb-6">
          {seatRows.map(row => (
            <React.Fragment key={row}>
              {[...Array(10)].map((_, index) => {
                const seatNumber = `${row}${index + 1}`;
                return (
                  <button
                    key={seatNumber}
                    className={`w-10 h-10 rounded ${
                      selectedSeats.includes(seatNumber) ? 'bg-yellow-400 text-black' : 'bg-blue-500 text-white'
                    }`}
                    onClick={() => handleSeatClick(seatNumber)}
                  >
                    {seatNumber}
                  </button>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-lg mb-2">Selected Seats:</p>
            <div className="flex flex-wrap gap-2">
              {selectedSeats.map(seat => (
                <span key={seat} className="bg-gray-700 px-2 py-1 rounded">{seat}</span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg">Total</p>
            <p className="text-2xl font-bold">NRs. {selectedSeats.length * 250}/-</p>
          </div>
        </div>
        <button className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500">
          Purchase Tickets
        </button>
      </div>
    </div>
  );
};

export default SeatSelection;