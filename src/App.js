import './App.css';
import React from 'react';
import { Profile } from './Components/Profile';
import { Navbar } from './Components/Navbar';
import { About } from './Components/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
    </div>
  );
}

export default App;
