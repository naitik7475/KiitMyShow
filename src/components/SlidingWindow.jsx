// src/components/SlidingWindow.jsx
import React from 'react';
import { Carousel } from "flowbite-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from 'react-router-dom';
import xmen from '../assets/movies/xmenwide.png';
import blackpanther from '../assets/movies/blackpantherwide.png';
import babydriver from '../assets/movies/babydriverwide.png';
import jumanji from '../assets/movies/jumanjiwide.png';
import cinema from '../assets/movies/cinema.jpg';

const movies = [
  {
    id: 1,
    title: 'X-Men: Apocalypse',
    releaseDate: 'May 27, 2016',
    duration: '2h 24min',
    poster: xmen,
    trailer: 'https://youtu.be/PfBVIHgQbYk?si=s-p2fibgZJgbNqRy'
  },
  {
    id: 2,
    title: 'Black Panther',
    releaseDate: 'February 16, 2018',
    duration: '2h 14min',
    poster: blackpanther,
    trailer: 'https://youtu.be/xjDjIWPwcPU?si=6e48ctCzFy9CWU4c'
  },
  {
    id: 3,
    title: 'Baby Driver',
    releaseDate: 'June 28, 2017',
    duration: '1h 53min',
    poster: babydriver,
    trailer: 'https://youtu.be/zTvJJnoWIPk?si=TnKlGrYGWox1A_ZR'
  },
  {
    id: 4,
    title: 'Jumanji',
    releaseDate: 'December 20, 2017',
    duration: '1h 59min',
    poster: jumanji,
    trailer: 'https://youtu.be/2QKg5SZ_35I?si=9-eQNafHeZfNewv8'
  },
];

export default function MovieSlider() {
  const navigate = useNavigate();

  const handleGetTicket = (movieId) => {
    navigate(`/select-seats/${movieId}`);
  };
  return (
    <div className="min-h-screen p-8 bg-[#011B34] relative"> {/* Set background color */}
      <img
        src={cinema}
        alt="Cinema Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30" // Background image with low opacity
      />
      <div className="h-128 sm:h-64 xl:h-128 2xl:h-128 mx-auto max-w-screen-lg relative z-10"> {/* Ensure carousel is above the background */}
        <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
          {movies.map((movie) => (
            <div key={movie.id} className="flex h-full items-center justify-center relative">
              <img src={movie.poster} alt={movie.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="z-20 absolute bottom-12 left-40 text-white">
                <div className="flex flex-col">
                  <div className="font-bold text-3xl my-2">{movie.title}</div>
                  <div className="flex gap-4">
                    <div className="flex gap-1 items-center">
                      <Icon icon="uil:calender" style={{ color: "#ffffff" }} />
                      <p className="font-normal">{movie.releaseDate}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Icon icon="flowbite:clock-outline" style={{ color: "#ffffff" }} />
                      <p className="font-normal">{movie.duration}</p>
                    </div>
                  </div>
                  <div className="flex my-4 gap-8">
                    <div
                      className="bg-blue-600 text-white flex rounded p-3 gap-1 items-center cursor-pointer hover:bg-blue-700 transition-colors"
                      onClick={() => handleGetTicket(movie.id)}
                    >
                      <Icon icon="ri:coupon-3-fill" />
                      <div className="font-semibold">Get Ticket</div>
                    </div>
                    <div
                      className="flex my-3 font-semibold cursor-pointer hover:underline"
                      onClick={() => window.open(movie.trailer, '_blank')}
                    >
                      <Icon icon="humbleicons:play" width="24" height="24" style={{ color: "#ffffff" }} />
                      <div className="ml-1">
                        Watch Trailer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
