import './App.css';
import React from 'react';
import { Profile } from './Components/Profile';
import { Navbar } from './Components/Navbar';
import { About } from './Components/About';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Navbar />
      <Profile />
      <About />
      </ChakraProvider>
      
    </div>
  );
}

export default App;
