import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/cocktail:id" element={<SingleCocktail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
