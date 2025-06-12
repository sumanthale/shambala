import React from 'react';
import { motion } from 'framer-motion';
import SacredGeometry from './SacredGeometry';

const SacredOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Large background mandala */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <SacredGeometry type="mandala" className="w-full h-full text-neon-cyan" />
      </motion.div>
      
      {/* Floating sacred elements */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-32 h-32 opacity-10"
        animate={{ 
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <SacredGeometry type="lotus" className="w-full h-full text-neon-purple" />
      </motion.div>
      
      <motion.div
        className="absolute top-3/4 right-1/6 w-24 h-24 opacity-8"
        animate={{ 
          rotate: [360, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <SacredGeometry type="yantra" className="w-full h-full text-neon-gold" />
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-20 h-20 opacity-6"
        animate={{ 
          rotate: [0, -360],
          x: [0, 30, 0],
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
          x: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <SacredGeometry type="star" className="w-full h-full text-emerald-400" />
      </motion.div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      {/* Energy streams */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-gold to-transparent"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>
    </div>
  );
};

export default SacredOverlay;