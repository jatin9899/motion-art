import React, { useEffect, useState } from 'react';
import './ColorfulDust.css';

const ColorfulDust = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const canvas = document.getElementById('colorful-dust-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate initial particles
    const initialParticles = [];
    for (let i = 0; i < 100; i++) {
      initialParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
      });
    }
    setParticles(initialParticles);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

    // Event listener for mouse movement
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const newParticles = [...particles];
      for (let i = 0; i < 5; i++) {
        newParticles.push({
          x: mouseX,
          y: mouseY,
          color: `hsl(${Math.random() * 360}, 100%, 50%)`,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 3 - 1.5,
          speedY: Math.random() * 3 - 1.5,
        });
      }
      setParticles(newParticles);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [particles]);

  return <canvas id="colorful-dust-canvas" className="colorful-dust-canvas"></canvas>;
};

export default ColorfulDust;
