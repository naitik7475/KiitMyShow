// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import SlidingWindow from "./components/SlidingWindow.jsx";
import MovieList from './components/MovieList';
import SeatSelection from './components/SeatSelection';
import BookingDetail from './components/BookingDetail';
import Calender from './components/Calender.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <SlidingWindow />
              <MovieList />
            </>
          } />
          <Route path="/select-seats/:movieId" element={
            <>
              <Calender />
              <SeatSelection />
            </>
          } />
          <Route path="/booking-detail" element={<BookingDetail />} /> {/* BookingDetail Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
