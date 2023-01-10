import './App.css';
import React from 'react';
import { Profile } from './Components/Profile';
import { Navbar } from './Components/Navbar';
import { About } from './Components/About';
import { ChakraProvider } from '@chakra-ui/react'
import { Project } from './Components/Project';
import { Calender } from './Components/Calender';
import { Stats } from './Components/Stats';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Navbar />
      <Profile />
      <About />
      <Project />
      <Calender />
      <Stats />
      </ChakraProvider>
      
    </div>
  );
}

export default App;
