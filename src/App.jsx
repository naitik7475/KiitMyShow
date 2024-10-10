// src/App.jsx
import React from 'react';
import Navbar from './components/navbar';
import SlidingWindow from "./components/SlidingWindow.jsx"
// import HeroSection from './components/HeroSection';
import MovieList from './components/MovieList';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <SlidingWindow />
      <MovieList />
    </div>
  );
};

export default App;
