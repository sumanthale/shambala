import React, {  useMemo } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const ScrollReactiveBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // === Motion Transforms ===
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 0.8, 0.6, 0.8, 0.4, 0.2]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0.3, 0.6, 0.9, 0.6, 0.8, 0.5]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const streamOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.1]);
  const portal1Scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 1.2, 0.8]
  );
  const portal1Rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const portal1Opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.6, 0.8, 0.2]
  );

  const portal2Scale = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0.3, 1, 0.6]
  );
  const portal2Rotate = useTransform(scrollYProgress, [0, 1], [0, -540]);
  const portal2Opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, 0.5, 0.7, 0.1]
  );

  const nebulaConfigs = [
    {
      className: "top-1/4 left-1/4 w-96 h-96 from-purple-500/10",
      y: useTransform(scrollYProgress, [0, 1], ["0%", "200%"]),
      x: undefined,
      opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.1]),
    },
    {
      className: "top-2/3 right-1/3 w-80 h-80 from-cyan-500/10",
      y: useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]),
      x: undefined,
      opacity: useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [0.2, 0.5, 0.8, 0.3]
      ),
    },
    {
      className: "top-1/2 left-2/3 w-64 h-64 from-amber-500/8",
      y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
      x: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]),
      opacity: useTransform(
        scrollYProgress,
        [0, 0.4, 0.8, 1],
        [0.4, 0.2, 0.6, 0.1]
      ),
    },
  ];

  const streamYValues = [
    useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]),
    useTransform(scrollYProgress, [0, 1], ["-40%", "70%"]),
    useTransform(scrollYProgress, [0, 1], ["-30%", "90%"]),
    useTransform(scrollYProgress, [0, 1], ["-20%", "110%"]),
    useTransform(scrollYProgress, [0, 1], ["-10%", "130%"]),
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Cosmic Layers */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"
          style={{ opacity: opacity1, scale }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-cyan-900/15 via-transparent to-transparent"
          style={{ opacity: opacity2, scale, rotate }}
        />
      </motion.div>

      {/* Nebulas */}
      {nebulaConfigs.map((n, i) => (
        <motion.div
          key={i}
          className={`absolute ${n.className} bg-gradient-radial to-transparent rounded-full blur-3xl`}
          style={{ y: n.y, x: n.x, opacity: n.opacity }}
        />
      ))}

      {/* Streams */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: streamOpacity }}
      >
        {streamYValues.map((yVal, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              height: "200%",
              y: yVal,
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Portals */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full border border-neon-purple/20"
        style={{
          scale: portal1Scale,
          rotate: portal1Rotate,
          opacity: portal1Opacity,
        }}
      >
        <div className="absolute inset-2 rounded-full border border-neon-purple/10" />
        <div className="absolute inset-4 rounded-full border border-neon-purple/5" />
      </motion.div>
      <AsteroidImpactBackground />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full border border-neon-cyan/20"
        style={{
          scale: portal2Scale,
          rotate: portal2Rotate,
          opacity: portal2Opacity,
        }}
      >
        <div className="absolute inset-2 rounded-full border border-neon-cyan/10" />
      </motion.div>
    </div>
  );
};

export default ScrollReactiveBackground;


const AsteroidImpactBackground: React.FC = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {[...Array(5)].map((_, i) => (
        <FallingStar key={i} />
      ))}
    </div>
  );
};

// FallingStar.tsx

const getRandomProps = () => {
  const size = Math.random() * 2 + 1; // 1px to 3px width
  const duration = Math.random() * 3 + 2; // 2s to 5s
  const delay = Math.random() * 5; // delay before animation starts
  const left = Math.random() * 100; // percentage across screen
  const xDrift = (Math.random() - 0.5) * 100; // slight horizontal drift
  return { size, duration, delay, left, xDrift };
};

const FallingStar: React.FC = () => {
  const { size, duration, delay, left, xDrift } = useMemo(getRandomProps, []);

  return (
    <motion.div
      initial={{
        y: '-10vh',
        x: 0,
        opacity: 0,
      }}
      animate={{
        y: '110vh',
        x: xDrift,
        opacity: [0, 1, 0],
        transition: {
          duration,
          delay,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 2 + Math.random() * 3,
        },
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: `${left}vw`,
        width: `${size}px`,
        height: `${size * 25}px`,
        background: 'linear-gradient(to bottom, white, transparent)',
        borderRadius: '999px',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
};

