import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Zap, Users, Headphones } from 'lucide-react';
import SacredGeometry from './SacredGeometry';

const RaveRealm: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const events = [
    {
      name: 'Cosmic Frequencies',
      date: 'Full Moon • Dec 15',
      genre: 'Psytrance • Ambient',
      description: 'Journey through soundscapes of consciousness'
    },
    {
      name: 'Sacred Bass',
      date: 'New Moon • Dec 30',
      genre: 'Tribal • Electronic',
      description: 'Ancient rhythms meet future beats'
    },
    {
      name: 'Chakra Alignment',
      date: 'Solstice • Dec 21',
      genre: 'Healing • Meditation',
      description: 'Vibrational therapy through music'
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen relative overflow-hidden "
      // className="min-h-screen relative overflow-hidden bg-gradient-to-b from-cosmic-900 via-purple-950 to-cosmic-950"
    >
      {/* Pulsing Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.2),transparent_70%)]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Neon Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 md:grid-cols-12 grid-rows-8 md:grid-rows-12 h-full w-full">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-neon-purple"
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Energy Pulses */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 md:w-4 md:h-4 bg-neon-purple rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cosmic font-thin text-white mb-4">
              Sacred Frequencies
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Music className="w-5 h-5 md:w-6 md:h-6 text-neon-purple" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent w-24 md:w-32"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-neon-purple" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent w-24 md:w-32"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <Users className="w-5 h-5 md:w-6 md:h-6 text-neon-purple" />
            </div>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Unite consciousness through rhythm. Where ancient wisdom meets electronic transcendence.
            </p>
          </motion.div>

          {/* Central Sacred Geometry */}
          <motion.div
            className="relative mb-12 md:mb-16 flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <SacredGeometry 
                type="yantra" 
                className="w-full h-full text-neon-purple animate-sacred-spin opacity-40" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 bg-neon-purple/20 rounded-full flex items-center justify-center backdrop-blur-lg border border-neon-purple/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Headphones className="w-6 h-6 md:w-8 md:h-8 text-neon-purple" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="cursor-hover group"
              >
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-neon-purple/20 group-hover:bg-white/10 group-hover:border-neon-purple/40 transition-all duration-500 h-full">
                  {/* Pulsing Corner */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-3 h-3 md:w-4 md:h-4 bg-neon-purple rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />

                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-cosmic text-white mb-2">{event.name}</h3>
                    <div className="text-neon-gold font-medium mb-2 text-sm md:text-base">{event.date}</div>
                    <div className="text-neon-purple text-xs md:text-sm mb-4">{event.genre}</div>
                    <p className="text-white/60 text-xs md:text-sm mb-6">{event.description}</p>
                    
                    <motion.button
                      className="w-full py-2 md:py-3 rounded-lg bg-gradient-to-r from-neon-purple/20 to-purple-600/20 border border-neon-purple/30 text-neon-purple font-cosmic tracking-wide text-sm md:text-base"
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Join Frequency
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sound Visualizer */}
          <motion.div
            className="flex justify-center space-x-1 md:space-x-2 h-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 md:w-2 bg-gradient-to-t from-neon-purple to-neon-cyan rounded-full"
                animate={{
                  height: [8, Math.random() * 40 + 20, 8],
                }}
                transition={{
                  duration: Math.random() * 1 + 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RaveRealm;