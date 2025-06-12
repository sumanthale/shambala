import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SacredGeometry from "./SacredGeometry";

const ArrivalGateway: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />

        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      {/* Sacred Gateway */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <SacredGeometry
            type="mandala"
            className="w-96 h-96 text-neon-cyan opacity-20 animate-sacred-spin"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <SacredGeometry
              type="lotus"
              className="w-48 h-48 text-neon-purple opacity-40 animate-pulse"
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(0, 255, 255, 0.5)',
                '0 0 40px rgba(159, 122, 234, 0.8)',
                '0 0 20px rgba(0, 255, 255, 0.5)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            SHAMBHALA
          </motion.h1>
          
          <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent w-full max-w-2xl mx-auto mb-6" />
          <p className="text-xl md:text-2xl lg:text-3xl font-sacred text-neon-cyan/80 mb-2">
            The Higher Dimension
          </p>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Awaken to cosmic luxury. Transcend reality through sacred travel
            experiences that bridge ancient wisdom with infinite possibility.
          </p>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          className="cursor-hover group relative px-8 md:px-12 py-3 md:py-4 rounded-full bg-white/5 backdrop-blur-lg border border-neon-cyan/30 text-neon-cyan font-cosmic text-base md:text-lg tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">AWAKEN NOW</span>
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default ArrivalGateway;
