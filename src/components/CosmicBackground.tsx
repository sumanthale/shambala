import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

interface Nebula {
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  opacity: number;
}

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const nebulaeRef = useRef<Nebula[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 8000);
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          color: ['#00FFFF', '#8B5CF6', '#F59E0B', '#FFFFFF', '#06B6D4'][Math.floor(Math.random() * 5)]
        });
      }
      starsRef.current = stars;
    };

    const createNebulae = () => {
      const nebulae: Nebula[] = [];
      const nebulaCount = 8;
      
      for (let i = 0; i < nebulaCount; i++) {
        nebulae.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 400 + 200,
          rotation: Math.random() * 360,
          color: ['#8B5CF6', '#06B6D4', '#F59E0B', '#10B981'][Math.floor(Math.random() * 4)],
          opacity: Math.random() * 0.1 + 0.05
        });
      }
      nebulaeRef.current = nebulae;
    };

    const drawNebula = (nebula: Nebula) => {
      ctx.save();
      ctx.translate(nebula.x, nebula.y);
      ctx.rotate((nebula.rotation * Math.PI) / 180);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, nebula.size);
      gradient.addColorStop(0, `${nebula.color}${Math.floor(nebula.opacity * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.5, `${nebula.color}${Math.floor(nebula.opacity * 0.5 * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(-nebula.size, -nebula.size, nebula.size * 2, nebula.size * 2);
      ctx.restore();
    };

    const drawStar = (star: Star) => {
      ctx.save();
      ctx.globalAlpha = star.opacity;
      ctx.fillStyle = star.color;
      ctx.shadowBlur = star.size * 2;
      ctx.shadowColor = star.color;
      
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add twinkling effect
      if (Math.random() < 0.01) {
        ctx.shadowBlur = star.size * 4;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebulae
      nebulaeRef.current.forEach(nebula => {
        nebula.rotation += 0.02;
        drawNebula(nebula);
      });
      
      // Draw stars
      starsRef.current.forEach(star => {
        // Twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        
        // Subtle movement
        star.x += Math.sin(Date.now() * 0.001 + star.y * 0.01) * star.speed * 0.1;
        star.y += star.speed * 0.1;
        
        // Wrap around screen
        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
        
        drawStar(star);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    createNebulae();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createStars();
      createNebulae();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
           <iframe src='https://my.spline.design/particlenebula-mEK1Kow54HSR6iE9krzuy8gz/' frameborder='0' width='100%' height='100%'></iframe>
    </>
  );
};

export default CosmicBackground;