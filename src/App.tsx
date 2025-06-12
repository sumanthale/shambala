import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrivalGateway from './components/ArrivalGateway';
import TentRealm from './components/TentRealm';
import TravelRealm from './components/TravelRealm';
import RaveRealm from './components/RaveRealm';
import TrekRealm from './components/TrekRealm';
import VastramRealm from './components/VastramRealm';
import CafeRealm from './components/CafeRealm';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import AudioControls from './components/AudioControls';
import SacredGeometry from './components/SacredGeometry';
import CosmicBackground from './components/CosmicBackground';
import SacredOverlay from './components/SacredOverlay';
import ScrollReactiveBackground from './components/ScrollReactiveBackground';

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
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newRealm = Math.floor(scrollPosition / windowHeight);
      setCurrentRealm(Math.min(newRealm, realms.length - 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-cosmic-950 flex items-center justify-center z-50">
        <CosmicBackground />
        <div className="text-center relative z-10">
          <div className="w-32 h-32 mb-8 relative mx-auto">
            <SacredGeometry type="mandala" className="w-full h-full animate-sacred-spin text-neon-cyan" />
          </div>
          <motion.h1 
            className="text-2xl font-cosmic text-white mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Awakening Portal...
          </motion.h1>
          <div className="w-64 h-1 bg-cosmic-800 rounded-full mx-auto overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Cosmic Background Layers */}
      <CosmicBackground />
      <SacredOverlay />
      <ScrollReactiveBackground />
      
      {/* UI Components */}
      <CustomCursor />
      <Navigation currentRealm={currentRealm} realms={realms} />
      <AudioControls isEnabled={isAudioEnabled} onToggle={setIsAudioEnabled} />
      
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
  );
}

export default App;