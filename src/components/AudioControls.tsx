import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioControlsProps {
  isEnabled: boolean;
  onToggle: (enabled: boolean) => void;
}

const AudioControls: React.FC<AudioControlsProps> = ({ isEnabled, onToggle }) => {
  return (
    <div className="fixed top-4 md:top-8 right-4 md:right-8 z-40">
      <motion.button
        onClick={() => onToggle(!isEnabled)}
        className="cursor-hover w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isEnabled ? (
          <Volume2 size={16} className="md:w-5 md:h-5 text-neon-cyan" />
        ) : (
          <VolumeX size={16} className="md:w-5 md:h-5 text-white/70 group-hover:text-white" />
        )}
        
        <motion.div
          className="absolute inset-0 rounded-full border border-neon-cyan"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isEnabled ? [1, 1.2, 1] : 0, 
            opacity: isEnabled ? [1, 0.5, 1] : 0 
          }}
          transition={{ 
            duration: 2, 
            repeat: isEnabled ? Infinity : 0,
            ease: 'easeInOut'
          }}
        />
      </motion.button>
    </div>
  );
};

export default AudioControls;