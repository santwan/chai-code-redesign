import { useState } from 'react';
import './index.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar></Navbar>
      <Home />
    </div>
  );
}

export default App
