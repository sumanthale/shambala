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
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
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
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 text-neon-cyan opacity-20 animate-sacred-spin"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <SacredGeometry
              type="lotus"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 text-neon-purple opacity-40 animate-pulse"
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center spacing-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="spacing-content"
        >
          <motion.h1
            className="text-heading-xl text-white mb-6 sm:mb-8"
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
          
          <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent w-full max-w-2xl mx-auto mb-6 sm:mb-8" />
          
          <div className="spacing-items max-w-4xl mx-auto">
            <p className="text-body-lg font-sacred text-neon-cyan/80">
              The Higher Dimension
            </p>
            <p className="text-body-md text-white/70 leading-relaxed">
              Step into a higher dimension where every moment is an awakening — a living journey through sacred adventures, luminous memories, and boundless wonder.
            </p>
          </div>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          className="button-primary tap-target"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Begin your cosmic journey"
        >
          <span className="relative z-10 text-sm sm:text-base lg:text-lg">AWAKEN NOW</span>
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20"
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 tap-target"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default ArrivalGateway;