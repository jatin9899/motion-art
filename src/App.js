import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Logo from './Components/Logo';
import Section1 from './Components/Section1';
import Trusted from './Components/Trusted';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import CardSection from './Components/CardSection';
import Footer from './Components/Footer';

function App() {
  const canvasRef = useRef(null);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [mouseMoveStartTime, setMouseMoveStartTime] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId;

    const drawMouseTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 50);
      gradient.addColorStop(0, 'red');
      gradient.addColorStop(0.5, 'green');
      gradient.addColorStop(1, 'blue');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 50, 0, Math.PI * 2);
      ctx.fill();
    };

    const updateMouseCoords = (e) => {
      const newMouseX = e.clientX;
      const newMouseY = e.clientY;
    
      // Check if the mouse position has changed significantly
      const positionChanged = Math.abs(newMouseX - mouseX) > 1 || Math.abs(newMouseY - mouseY) > 1;
    
      if (positionChanged) {
        mouseX = newMouseX;
        mouseY = newMouseY;
    
        // Start animation loop if the mouse is moving
        if (!isMouseMoving) {
          setIsMouseMoving(true);
          setMouseMoveStartTime(Date.now());
        }
    
        // Clear the animation frame and restart the animation loop
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(drawMouseTrail);
      }
    };
    
    

    const handleMouseStop = () => {
      // Stop animation loop when the mouse stops moving
      setIsMouseMoving(false);
    };

    // Add event listeners for mouse movement
    window.addEventListener('mousemove', updateMouseCoords);
    window.addEventListener('mouseout', handleMouseStop);

    // Clean up event listeners and animation frame
    return () => {
      window.removeEventListener('mousemove', updateMouseCoords);
      window.removeEventListener('mouseout', handleMouseStop);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMouseMoving]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', top: 0, left: 0,  }}
        width={window.innerWidth}
        height={window.innerHeight}
      />
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
