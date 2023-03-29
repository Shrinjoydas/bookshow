import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import MovieDetails from './Component/MovieDetails';

function App() {
  return (
    <>
      <Router basename='/bookshow'> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:name" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
