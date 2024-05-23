import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Logo from './Components/Logo';
import Section1 from './Components/Section1';
import Trusted from './Components/Trusted';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import CardSection from './Components/CardSection';
import Footer from './Components/Footer';
import initFluid from './animation'

function App() {
  useEffect(()=>{
    initFluid();
  },[])
  

  
  return (
    <div>
      
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <div className="bg-[#060623]">
          <Logo />
          <Section1 />
          <Trusted />
          <Section2 />
          <Section3 />
          <CardSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
