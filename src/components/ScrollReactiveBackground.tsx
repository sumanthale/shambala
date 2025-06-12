import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollReactiveBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  
  // All hooks must be called unconditionally at the top level
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 0.8, 0.6, 0.8, 0.4, 0.2]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0.3, 0.6, 0.9, 0.6, 0.8, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Pre-calculate all useTransform values for the cosmic energy streams
  const streamY0 = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);
  const streamY1 = useTransform(scrollYProgress, [0, 1], ['-40%', '70%']);
  const streamY2 = useTransform(scrollYProgress, [0, 1], ['-30%', '90%']);
  const streamY3 = useTransform(scrollYProgress, [0, 1], ['-20%', '110%']);
  const streamY4 = useTransform(scrollYProgress, [0, 1], ['-10%', '130%']);
  
  const streamYValues = [streamY0, streamY1, streamY2, streamY3, streamY4];

  // Other useTransform values for nebula clouds and portals
  const nebulaY1 = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const nebulaOpacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.1]);
  
  const nebulaY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-150%']);
  const nebulaOpacity2 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.5, 0.8, 0.3]);
  
  const nebulaY3 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const nebulaX3 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const nebulaOpacity3 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.4, 0.2, 0.6, 0.1]);

  const streamOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.1]);

  const portal1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.8]);
  const portal1Rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const portal1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.8, 0.2]);

  const portal2Scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.3, 1, 0.6]);
  const portal2Rotate = useTransform(scrollYProgress, [0, 1], [0, -540]);
  const portal2Opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 0.5, 0.7, 0.1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Early return after all hooks have been called
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary cosmic layer */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"
          style={{ opacity: opacity1, scale }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-cyan-900/15 via-transparent to-transparent"
          style={{ opacity: opacity2, scale, rotate }}
        />
      </motion.div>

      {/* Parallax nebula clouds */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl"
        style={{ 
          y: nebulaY1,
          opacity: nebulaOpacity1
        }}
      />
      
      <motion.div
        className="absolute top-2/3 right-1/3 w-80 h-80 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl"
        style={{ 
          y: nebulaY2,
          opacity: nebulaOpacity2
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-2/3 w-64 h-64 bg-gradient-radial from-amber-500/8 to-transparent rounded-full blur-2xl"
        style={{ 
          y: nebulaY3,
          x: nebulaX3,
          opacity: nebulaOpacity3
        }}
      />

      {/* Cosmic energy streams */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: streamOpacity }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              height: '200%',
              y: streamYValues[i],
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Dimensional portals */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full border border-neon-purple/20"
        style={{
          scale: portal1Scale,
          rotate: portal1Rotate,
          opacity: portal1Opacity
        }}
      >
        <div className="absolute inset-2 rounded-full border border-neon-purple/10" />
        <div className="absolute inset-4 rounded-full border border-neon-purple/5" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full border border-neon-cyan/20"
        style={{
          scale: portal2Scale,
          rotate: portal2Rotate,
          opacity: portal2Opacity
        }}
      >
        <div className="absolute inset-2 rounded-full border border-neon-cyan/10" />
      </motion.div>
    </div>
  );
};

export default ScrollReactiveBackground;