import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Tent, Mountain, Zap, Footprints, Shirt, Coffee } from 'lucide-react';
import SacredGeometry from './SacredGeometry';

interface NavigationProps {
  currentRealm: number;
  realms: string[];
}

const navIcons = [Eye, Tent, Mountain, Zap, Footprints, Shirt, Coffee];

const Navigation: React.FC<NavigationProps> = ({ currentRealm, realms }) => {
  const scrollToRealm = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed -bottom-20 right-6 md:right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-4 md:space-y-6">
        {realms.map((realm, index) => {
          const Icon = navIcons[index];
          const isActive = currentRealm === index;
          
          return (
            <motion.button
              key={realm}
              onClick={() => scrollToRealm(index)}
              className="cursor-hover relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 glass-morphism ${
                  isActive 
                    ? 'cosmic-border shadow-cosmic' 
                    : 'border border-white/10 hover:border-white/30'
                }`}
                animate={isActive ? {
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                    '0 0 40px rgba(139, 92, 246, 0.6)',
                    '0 0 20px rgba(139, 92, 246, 0.3)'
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon 
                  size={16} 
                  className={`md:w-5 md:h-5 transition-all duration-300 ${
                    isActive ? 'text-neon-cyan neon-glow' : 'text-white/70 group-hover:text-white'
                  }`} 
                />
                
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <SacredGeometry 
                      type="circle" 
                      className="w-full h-full text-neon-cyan animate-spin-slow opacity-40" 
                    />
                  </motion.div>
                )}
                
                {/* Pulse effect for active state */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-neon-cyan"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
              
              {/* Enhanced tooltip */}
              <motion.div 
                className="absolute right-full mr-4 md:mr-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                initial={{ x: 10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                <div className="glass-morphism cosmic-border px-4 py-2 rounded-lg whitespace-nowrap">
                  <span className="text-white text-sm md:text-base capitalize font-cosmic aurora-text">
                    {realm}
                  </span>
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-cosmic-900 rotate-45 border-r border-b border-white/10" />
                </div>
              </motion.div>
            </motion.button>
          );
        })}
      </div>
      
      {/* Progress indicator */}
      <motion.div
        className="absolute -left-6 top-0 w-1 bg-white/10 rounded-full"
        style={{ height: `${(realms.length - 1) * (48 + 24)}px` }}
      >
        <motion.div
          className="w-full bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full"
          animate={{ 
            height: `${(currentRealm / (realms.length - 1)) * 100}%` 
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </motion.div>
    </nav>
  );
};

export default Navigation;