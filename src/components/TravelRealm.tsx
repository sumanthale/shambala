import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mountain, MapPin, Compass } from 'lucide-react';
import SacredGeometry from './SacredGeometry';

const TravelRealm: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const destinations = [
    { name: 'Kailash Kora', elevation: '5636m', difficulty: 'Sacred', duration: '15 days' },
    { name: 'Annapurna Circuit', elevation: '5416m', difficulty: 'Mystical', duration: '21 days' },
    { name: 'Everest Base Camp', elevation: '5364m', difficulty: 'Transcendent', duration: '18 days' },
    { name: 'Manaslu Circuit', elevation: '5213m', difficulty: 'Enlightened', duration: '16 days' },
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-cosmic-800 via-slate-900 to-cosmic-900"
    >
      {/* Mountain Silhouettes */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cosmic-950/50 to-transparent" />
        <svg className="absolute bottom-0 w-full h-48 md:h-64" preserveAspectRatio="none" viewBox="0 0 1200 400">
          <polygon
            points="0,400 300,100 600,150 900,50 1200,200 1200,400"
            fill="url(#mountainGradient)"
            opacity="0.6"
          />
          <polygon
            points="0,400 200,200 500,250 800,120 1200,280 1200,400"
            fill="url(#mountainGradient2)"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="100%" stopColor="#1f2937" />
            </linearGradient>
          </defs>
        </svg>
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
              Sacred Journeys
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Compass className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-24 md:w-32" />
              <Mountain className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-24 md:w-32" />
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            </div>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Embark on transformative expeditions through the world's most sacred peaks
            </p>
          </motion.div>

          {/* Interactive Trek Map */}
          <div className="relative mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5 }}
              className="relative p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10"
            >
              <div className="absolute inset-4">
                <SacredGeometry type="mandala" className="w-full h-full text-blue-400/10 animate-sacred-spin" />
              </div>
              
              <div className="relative z-10">
                <svg className="w-full h-48 md:h-64" viewBox="0 0 800 300">
                  {/* Trek Path */}
                  <motion.path
                    d="M50,250 Q200,200 350,180 Q500,160 650,140 Q750,120 780,100"
                    stroke="url(#pathGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10,5"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                  />
                  
                  {/* Destination Points */}
                  {destinations.map((dest, index) => (
                    <motion.g key={dest.name}>
                      <motion.circle
                        cx={50 + (index * 180)}
                        cy={250 - (index * 30)}
                        r="8"
                        fill="#3b82f6"
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                      />
                      <motion.circle
                        cx={50 + (index * 180)}
                        cy={250 - (index * 30)}
                        r="15"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        opacity="0.5"
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: [0, 1.5, 1] } : {}}
                        transition={{ duration: 1, delay: index * 0.3 }}
                      />
                    </motion.g>
                  ))}
                  
                  <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="cursor-hover group"
              >
                <div className="p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 group-hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="text-center">
                    <Mountain className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-3 group-hover:text-neon-cyan transition-colors duration-500" />
                    <h3 className="text-base md:text-lg font-cosmic text-white mb-2">{dest.name}</h3>
                    <div className="space-y-1 text-xs md:text-sm text-white/60">
                      <div>{dest.elevation}</div>
                      <div className="text-neon-gold">{dest.difficulty}</div>
                      <div>{dest.duration}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelRealm;