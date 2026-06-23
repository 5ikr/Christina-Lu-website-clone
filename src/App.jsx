import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work';
import Critiques from './components/Critiques';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="">
      <Navbar />

      <Hero />

      <Work />

      <Critiques />

      <Footer />
    </div>
  );
}

export default App
