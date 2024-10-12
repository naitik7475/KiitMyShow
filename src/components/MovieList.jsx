// src/components/MovieList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import xmen from '../assets/movies/xmen.png';
import blackpanther from '../assets/movies/blackpanther.png';
import babydriver from '../assets/movies/babydriver.png';
import jumanji from '../assets/movies/jumanji.png';

const MovieList = () => {
  const navigate = useNavigate();
  const movies = [
    { 
      id: 1,
      title: 'X-Men: Apocalypse', 
      times: ['11:20 AM', '03:00 PM', '06:45 PM'], 
      poster: xmen,
      trailer: 'https://youtu.be/PfBVIHgQbYk?si=s-p2fibgZJgbNqRy' 
    },
    { 
      id: 2,
      title: 'Black Panther', 
      times: ['11:20 AM', '03:00 PM', '06:45 PM'], 
      poster: blackpanther,
      trailer: 'https://youtu.be/xjDjIWPwcPU?si=6e48ctCzFy9CWU4c' 
    },
    { 
      id: 3,
      title: 'Baby Driver', 
      times: ['11:20 AM', '03:00 PM', '06:45 PM'], 
      poster: babydriver,
      trailer: 'https://youtu.be/zTvJJnoWIPk?si=TnKlGrYGWox1A_ZR' 
    },
    { 
      id: 4,
      title: 'Jumanji', 
      times: ['11:20 AM', '03:00 PM', '06:45 PM'], 
      poster: jumanji,
      trailer: 'https://youtu.be/2QKg5SZ_35I?si=9-eQNafHeZfNewv8' 
    },
  ];

  const handleGetTicket = (movieId) => {
    navigate(`/select-seats/${movieId}`);
  };
  return (
    <div className="p-6 bg-[#011B34] min-h-screen">
      {/* Tabs for navigation */}
      <div className="flex items-center space-x-2 text-lg mb-4">
        <a href="#" className="text-white font-semibold border-b-2 border-blue-600 pb-1">Now Showing</a>
        <span className="text-white">/</span>
        <a href="#" className="text-white hover:text-blue-600">Coming Soon</a>
        <span className="text-white">/</span>
        <a href="#" className="text-white hover:text-blue-600">Buy Tickets</a>
        <span className="flex-grow border-b border-gray-300"></span>
        <a href="#" className="text-white hover:text-blue-600">View All &gt;</a>
      </div>

      {/* Movie Cards Section */}
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative group aspect-[3/4] rounded-lg overflow-hidden"
          >
            {/* Movie Poster Image */}
            <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />

            {/* Movie content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-gradient-to-t from-black to-transparent">
              <div className="text-lg font-semibold">{movie.title}</div>
              <div className="text-sm">
                Today - {movie.times.join(' / ')}
              </div>
            </div>

            {/* Hover Options */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-md mb-2"
                onClick={() => handleGetTicket(movie.id)}
              >
                Get Ticket
              </button>
              <div 
                className="text-white hover:underline cursor-pointer"
                onClick={() => window.open(movie.trailer, '_blank')}
              >
                Watch Trailer
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
