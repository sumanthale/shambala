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
      className="min-h-screen relative overflow-hidden"
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
          <div className="grid grid-cols-8 lg:grid-cols-12 grid-rows-8 lg:grid-rows-12 h-full w-full">
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
            className="absolute w-3 h-3 lg:w-4 lg:h-4 bg-neon-purple rounded-full opacity-60"
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

      <div className="section-container section-padding relative z-10">
        <div className="spacing-section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center spacing-content"
          >
            <h2 className="text-heading-xl text-white mb-6">
              Sacred Frequencies
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Music className="w-5 h-5 sm:w-6 sm:h-6 text-neon-purple" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent w-16 sm:w-24 lg:w-32"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-neon-purple" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent w-16 sm:w-24 lg:w-32"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-neon-purple" />
            </div>
            <p className="text-body-lg text-white/70 max-w-3xl mx-auto">
              Unite consciousness through rhythm. Where ancient wisdom meets electronic transcendence.
            </p>
          </motion.div>

          {/* Central Sacred Geometry */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <div className="relative w-48 h-48 lg:w-64 lg:h-64">
              <SacredGeometry 
                type="yantra" 
                className="w-full h-full text-neon-purple animate-sacred-spin opacity-40" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-neon-purple/20 rounded-full flex items-center justify-center backdrop-blur-lg border border-neon-purple/30"
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
                  <Headphones className="w-8 h-8 lg:w-10 lg:h-10 text-neon-purple" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="cursor-hover group"
              >
                <div className="card-base card-hover p-6 lg:p-8 h-full">
                  {/* Pulsing Corner */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-3 h-3 lg:w-4 lg:h-4 bg-neon-purple rounded-full"
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

                  <div className="text-center spacing-content">
                    <h3 className="text-heading-md text-white">{event.name}</h3>
                    <div className="text-neon-gold font-medium text-body-md">{event.date}</div>
                    <div className="text-neon-purple text-body-md">{event.genre}</div>
                    <p className="text-white/60 text-body-md">{event.description}</p>
                    
                    <motion.button
                      className="button-primary w-full"
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
            className="flex justify-center space-x-1 sm:space-x-2 h-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 sm:w-2 bg-gradient-to-t from-neon-purple to-neon-cyan rounded-full"
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