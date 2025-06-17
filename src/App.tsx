import { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import ArrivalGateway from './components/ArrivalGateway';
import TentRealm from './components/TentRealm';
import TravelRealm from './components/TravelRealm';
import RaveRealm from './components/RaveRealm';
import TrekRealm from './components/TrekRealm';
import VastramRealm from './components/VastramRealm';
import CafeRealm from './components/CafeRealm';
// import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
// import AudioControls from './components/AudioControls';
import SacredGeometry from './components/SacredGeometry';
import CosmicBackground from './components/CosmicBackground';
import SacredOverlay from './components/SacredOverlay';
import ScrollReactiveBackground from './components/ScrollReactiveBackground';
// import SmoothScroll from './components/SmoothScroll';
import ParticleField from './components/ParticleField';
import { throttle } from './helpers/helpers';

const realms = [
  'arrival',
  'tents',
  'travel', 
  'rave',
  'trek',
  'vastram',
  'cafe'
];

function App() {
  const [currentRealm, setCurrentRealm] = useState(0);
  // const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Enhanced loading with staggered animations
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newRealm = Math.floor(scrollPosition / windowHeight);
      setCurrentRealm(Math.min(newRealm, realms.length - 1));
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-cosmic-950 flex items-center justify-center z-50 overflow-hidden">
        <CosmicBackground />
        <ParticleField />
        
        <div className="text-center relative z-10">
          <motion.div 
            className="w-40 h-40 mb-8 relative mx-auto"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 loading-mandala">
              <SacredGeometry type="mandala" className="w-full h-full animate-sacred-spin text-neon-cyan" />
            </div>
            <motion.div
              className="absolute inset-4"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <SacredGeometry type="lotus" className="w-full h-full text-neon-purple opacity-60" />
            </motion.div>
            <motion.div
              className="absolute inset-8"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <SacredGeometry type="yantra" className="w-full h-full text-neon-gold opacity-80" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl font-cosmic text-white mb-6 aurora-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            Awakening Portal...
          </motion.h1>
          
          <motion.div 
            className="w-80 h-2 bg-cosmic-800 rounded-full mx-auto overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-gold rounded-full relative"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </motion.div>
          </motion.div>
          
          <motion.p
            className="text-white/60 mt-4 font-sacred"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            Preparing your cosmic journey...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative">
        {/* Enhanced Cosmic Background Layers */}
        {/* background */}
        <CosmicBackground />
        {/* shapes */}
        <SacredOverlay />
        {/* Lnes */}
        <ScrollReactiveBackground />
        {/* color particels */}
        <ParticleField /> 

        
        {/* UI Components */}
        {/* <CustomCursor /> */}
        <Navigation currentRealm={currentRealm} realms={realms} />
        {/* <AudioControls isEnabled={isAudioEnabled} onToggle={setIsAudioEnabled} /> */}
        
        <main className="relative z-10">
          <ArrivalGateway />
          <TentRealm />
          <TravelRealm />
          <RaveRealm />
          <TrekRealm />
          <VastramRealm />
          <CafeRealm />
        </main>
      </div>
    </>
  );
}

export default App;