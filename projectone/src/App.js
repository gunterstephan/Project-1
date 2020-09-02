import React from 'react';
import Navbar from './components/nav/navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <About />
    </div>
  );
}

export default App;
