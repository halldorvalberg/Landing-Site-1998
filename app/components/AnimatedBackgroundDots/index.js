import React, { useRef, useEffect } from 'react';

const AnimatedBackgroundDots = ({
  gridSize = 20,
  spacing = 30,
  dotColor = '#ffffff', // Set default dot color to white
  animationSpeed = 1,
  gradient = false,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let time = 0; // Initialize time for animation

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      if (!ctx) return;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const distance = Math.sqrt(
            Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)
          );
          const offset = (distance / (spacing * 2) + time * animationSpeed) % Math.PI;

          // Create a more random, blob-like effect
          const randomFactor = Math.sin(x * 0.05 + time) * Math.cos(y * 0.05 + time);
          const radius = (Math.sin(offset) + 1 + randomFactor) * (spacing / 16); // Adjusted for blob effect

          ctx.globalAlpha = 0.05; // Set a low alpha for a more subtle effect
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0, radius), 0, Math.PI * 2); // Ensure radius is non-negative
          ctx.closePath();

          if (gradient) {
            const gradientColor = ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradientColor.addColorStop(0, dotColor);
            gradientColor.addColorStop(1, '#ffffff');
            ctx.fillStyle = gradientColor;
          } else {
            ctx.fillStyle = dotColor;
          }

          ctx.fill();
        }
      }
    };

    const animate = () => {
      time += 0.02; // Increment time for continuous flow
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [spacing, dotColor, animationSpeed, gradient]);

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
};

export default AnimatedBackgroundDots;
