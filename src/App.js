import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Film from './components/Films';
import Detail from './components/Detail';
import Contact from './components/Contact';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import SearchFilms from './components/Search';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchFilms />
              <Film />
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
