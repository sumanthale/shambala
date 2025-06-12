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
    <nav className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-3 md:space-y-4">
        {realms.map((realm, index) => {
          const Icon = navIcons[index];
          const isActive = currentRealm === index;
          
          return (
            <button
              key={realm}
              onClick={() => scrollToRealm(index)}
              className="cursor-hover relative group"
            >
              <motion.div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-neon-cyan/20 backdrop-blur-lg border border-neon-cyan' 
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon 
                  size={16} 
                  className={`md:w-5 md:h-5 transition-colors duration-300 ${
                    isActive ? 'text-neon-cyan' : 'text-white/70 group-hover:text-white'
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
                      className="w-full h-full text-neon-cyan animate-spin-slow opacity-30" 
                    />
                  </motion.div>
                )}
              </motion.div>
              
              <div className="absolute right-full mr-2 md:mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-cosmic-900/90 backdrop-blur-lg px-2 md:px-3 py-1 rounded-lg border border-white/10 whitespace-nowrap">
                  <span className="text-white text-xs md:text-sm capitalize font-cosmic">{realm}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;