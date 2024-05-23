// ColorSpreader.js
import React, { useEffect } from 'react';
import gsap from 'gsap';
import './ColorSpreader.css'

const ColorSpreader = ({ x, y, colors }) => {
  useEffect(() => {
    colors.forEach((color, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.style.backgroundColor = color;
      dot.style.left = `${x}px`; // Mouse position
      dot.style.top = `${y}px`; // Mouse position
      document.body.appendChild(dot);

      gsap.to(dot, {
        duration: 1,
        scale: 0,
        opacity: 0,
        delay: index * 0.05, // Delay each dot to stagger the animation
        onComplete: () => {
          document.body.removeChild(dot);
        }
      });
    });
  }, [x, y, colors]);

  return null;
};

export default ColorSpreader;
