'use client';

import { useEffect, useState } from 'react';

export default function DynamicBackground() {
  const [bgStyle, setBgStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const updateBackground = () => {
      const time = Date.now() * 0.0005; // Slower time progression for smoother transitions
      
      // Create smoother color transitions using sine waves
      const hue1 = (Math.sin(time * 0.3) * 60 + 200) % 360; // Blue-purple range
      const hue2 = (Math.sin(time * 0.2) * 80 + 280) % 360; // Purple-pink range  
      const hue3 = (Math.sin(time * 0.4) * 40 + 320) % 360; // Pink-red range
      
      // Gentle saturation and lightness variations
      const sat1 = 25 + Math.sin(time * 0.1) * 15; // 10-40%
      const sat2 = 30 + Math.cos(time * 0.15) * 20; // 10-50%
      const sat3 = 20 + Math.sin(time * 0.08) * 15; // 5-35%
      
      const light1 = 85 + Math.sin(time * 0.05) * 10; // 75-95%
      const light2 = 90 + Math.cos(time * 0.07) * 8;  // 82-98%
      const light3 = 88 + Math.sin(time * 0.06) * 10; // 78-98%
      
      // Dynamic positions for the gradients
      const x1 = 30 + Math.sin(time * 0.1) * 20;
      const y1 = 40 + Math.cos(time * 0.12) * 25;
      const x2 = 70 + Math.cos(time * 0.08) * 15;
      const y2 = 60 + Math.sin(time * 0.15) * 20;
      const x3 = 50 + Math.sin(time * 0.06) * 30;
      const y3 = 80 + Math.cos(time * 0.09) * 15;
      
      const gradient = `
        radial-gradient(
          circle at ${x1}% ${y1}%,
          hsl(${hue1}, ${sat1}%, ${light1}%) 0%,
          transparent 70%
        ),
        radial-gradient(
          circle at ${x2}% ${y2}%,
          hsl(${hue2}, ${sat2}%, ${light2}%) 0%,
          transparent 60%
        ),
        radial-gradient(
          circle at ${x3}% ${y3}%,
          hsl(${hue3}, ${sat3}%, ${light3}%) 0%,
          transparent 80%
        ),
        linear-gradient(
          ${time * 30}deg,
          hsl(${(hue1 + 30) % 360}, ${sat1 * 0.6}, 95%) 0%,
          hsl(${(hue2 + 30) % 360}, ${sat2 * 0.5}, 98%) 50%,
          hsl(${(hue3 + 30) % 360}, ${sat3 * 0.7}, 96%) 100%
        )
      `;
      
      setBgStyle({
        background: gradient,
        transition: 'background 4s ease-in-out' // Longer transition for smoother effect
      });
    };

    // Update immediately
    updateBackground();
    
    // Update every 4 seconds for very smooth transitions
    const interval = setInterval(updateBackground, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10"
      style={bgStyle}
    />
  );
}
