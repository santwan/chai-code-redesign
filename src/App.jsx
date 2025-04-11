import { useState } from 'react';
import './index.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar></Navbar>
      <Home />
    </div>
  );
}

export default App
