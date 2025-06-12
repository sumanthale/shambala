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
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-cosmic-950/80 via-cosmic-900/60 to-cosmic-800/40" />
        <div className="absolute inset-0 bg-gradient-conic from-neon-cyan/10 via-neon-purple/10 to-neon-gold/10 animate-spin-slower" />

        {/* Enhanced Floating Particles */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ['#00ffd5', '#8b5cf6', '#fbbf24', '#f472b6'][Math.floor(Math.random() * 4)],
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -100, -200],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Aurora Effect */}
        <motion.div
          className="absolute inset-0 bg-aurora opacity-30"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ backgroundSize: '400% 400%' }}
        />
      </div>

      {/* Enhanced Sacred Gateway */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{ scale: 1, rotate: 360, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 w-[500px] h-[500px] rounded-full border border-neon-cyan/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Middle Ring */}
          <motion.div
            className="absolute inset-8 rounded-full border border-neon-purple/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Main Mandala */}
          <SacredGeometry
            type="mandala"
            className="w-96 h-96 text-neon-cyan opacity-30 animate-sacred-spin cosmic-glow"
          />
          
          {/* Center Lotus */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ 
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 25, repeat: Infinity, ease: 'linear' }
              }}
            >
              <SacredGeometry
                type="lotus"
                className="w-48 h-48 text-neon-purple opacity-60 neon-glow"
              />
            </motion.div>
          </div>
          
          {/* Inner Yantra */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            >
              <SacredGeometry
                type="yantra"
                className="w-24 h-24 text-neon-gold"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 2 }}
          className="mb-12"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-cosmic font-bold text-white mb-8 relative"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
                '0 0 40px rgba(159, 122, 234, 0.8), 0 0 60px rgba(0, 255, 255, 0.5)',
                '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)'
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="aurora-text">SHAMBHALA</span>
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{ clipPath: 'inset(0)' }}
            />
          </motion.h1>
          
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent w-full max-w-4xl mx-auto mb-8"
            animate={{ 
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          />
          
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl font-sacred text-cosmic-glow mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1.5 }}
          >
            The Higher Dimension
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 1.5 }}
          >
            Awaken to cosmic luxury. Transcend reality through sacred travel
            experiences that bridge ancient wisdom with infinite possibility.
          </motion.p>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          className="cursor-hover group relative px-12 md:px-16 py-4 md:py-6 rounded-full glass-morphism cosmic-border text-neon-cyan font-cosmic text-lg md:text-xl tracking-wider overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">AWAKEN NOW</span>
          
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-gold/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-neon-cyan opacity-0 group-hover:opacity-100"
            animate={{ scale: [1, 1.5], opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.button>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-white/60 neon-glow" />
        </motion.div>
      </div>
    </section>
  );
};

export default ArrivalGateway;