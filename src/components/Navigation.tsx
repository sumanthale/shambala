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
    const targetElement = document.getElementById(`realm-${index}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback to viewport height calculation
      window.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-40  ">
        <div className="flex flex-col space-y-3 sm:space-y-4">
          {realms.map((realm, index) => {
            const Icon = navIcons[index];
            const isActive = currentRealm === index;
            
            return (
              <motion.button
                key={realm}
                onClick={() => scrollToRealm(index)}
                className="cursor-hover relative group tap-target"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Navigate to ${realm} section`}
              >
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 glass-morphism ${
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
                    className={`sm:w-5 sm:h-5 transition-all duration-300 ${
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
                  className="absolute right-full mr-3 sm:mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  initial={{ x: 10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <div className="glass-morphism cosmic-border px-3 py-2 rounded-lg whitespace-nowrap">
                    <span className="text-white text-sm font-cosmic aurora-text capitalize">
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
          className="absolute -left-4 sm:-left-6 top-0 w-1 bg-white/10 rounded-full"
          style={{ height: `${(realms.length - 1) * 52}px` }}
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

      {/* Mobile Navigation */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="glass-morphism cosmic-border rounded-full px-4 py-3">
          <div className="flex space-x-4">
            {realms.map((realm, index) => {
              const Icon = navIcons[index];
              const isActive = currentRealm === index;
              
              return (
                <motion.button
                  key={realm}
                  onClick={() => scrollToRealm(index)}
                  className="cursor-hover relative group tap-target"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Navigate to ${realm} section`}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-neon-cyan/20 border border-neon-cyan/50' 
                        : 'hover:bg-white/10'
                    }`}
                    animate={isActive ? {
                      boxShadow: [
                        '0 0 10px rgba(0, 255, 213, 0.3)',
                        '0 0 20px rgba(0, 255, 213, 0.6)',
                        '0 0 10px rgba(0, 255, 213, 0.3)'
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon 
                      size={18} 
                      className={`transition-all duration-300 ${
                        isActive ? 'text-neon-cyan' : 'text-white/70 group-hover:text-white'
                      }`} 
                    />
                    
                    {isActive && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-neon-cyan rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Mobile tooltip */}
                  <motion.div 
                    className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                    initial={{ y: 5, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <div className="glass-morphism cosmic-border px-2 py-1 rounded-md whitespace-nowrap">
                      <span className="text-white text-xs font-cosmic capitalize">
                        {realm}
                      </span>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cosmic-900 rotate-45 border-b border-r border-white/10" />
                    </div>
                  </motion.div>
                </motion.button>
              );
            })}
          </div>
          
          {/* Mobile progress indicator */}
          <motion.div
            className="absolute bottom-0 left-4 right-4 h-0.5 bg-white/10 rounded-full"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
              animate={{ 
                width: `${((currentRealm + 1) / realms.length) * 100}%` 
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;