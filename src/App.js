import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div className="footer">
        Designed by
        <span></span>
        <a
          href="https://github.com/sammy-jay/reactjs-cocktails-app"
          target="_blank"
        >
          Tolulope Soneye
        </a>
      </div>
    </>
  );
}
