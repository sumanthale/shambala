import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Footprints, Mountain, Clock, Users } from 'lucide-react';
import SacredGeometry from './SacredGeometry';

const TrekRealm: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const treks = [
    {
      name: 'Annapurna Awakening',
      duration: '21 Days',
      difficulty: 'Transcendent',
      elevation: '5,416m',
      participants: '8-12',
      description: 'Journey through diverse landscapes from subtropical forests to alpine deserts',
      highlights: ['Thorong La Pass', 'Muktinath Temple', 'Poon Hill Sunrise']
    },
    {
      name: 'Everest Enlightenment',
      duration: '18 Days',
      difficulty: 'Sacred',
      elevation: '5,364m',
      participants: '6-10',
      description: 'Stand at the base of the world\'s highest peak while connecting with Sherpa wisdom',
      highlights: ['Namche Bazaar', 'Tengboche Monastery', 'Kala Patthar']
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-cosmic-800 via-gray-900 to-cosmic-950"
    >
      {/* Mountain Backdrop */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_100%,rgba(71,85,105,0.1),rgba(15,23,42,0.3),rgba(71,85,105,0.1))]" />
        
        {/* Snow Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, window.innerHeight + 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cosmic font-thin text-white mb-4">
              High Altitude Journeys
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Footprints className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-24 md:w-32" />
              <Mountain className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-24 md:w-32" />
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
            </div>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Ascend beyond limits. Where every step elevates consciousness and every breath deepens understanding.
            </p>
          </motion.div>

          {/* Elevation Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="mb-12 md:mb-16 p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10"
          >
            <div className="relative">
              <svg className="w-full h-32 md:h-48" viewBox="0 0 1000 200">
                {/* Elevation Path */}
                <motion.path
                  d="M50,180 Q150,160 250,140 Q350,120 450,100 Q550,80 650,90 Q750,100 850,70 Q900,60 950,50"
                  stroke="url(#elevationGradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 4, ease: 'easeInOut' }}
                />
                
                {/* Elevation Points */}
                {[0, 25, 50, 75, 100].map((percent, index) => (
                  <motion.g key={index}>
                    <motion.circle
                      cx={50 + (percent * 9)}
                      cy={180 - (index * 25)}
                      r="6"
                      fill="#64748b"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    />
                    <motion.text
                      x={50 + (percent * 9)}
                      y={195}
                      textAnchor="middle"
                      fill="#94a3b8"
                      fontSize="12"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      {1500 + (index * 1000)}m
                    </motion.text>
                  </motion.g>
                ))}
                
                <defs>
                  <linearGradient id="elevationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#64748b" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Trek Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {treks.map((trek, index) => (
              <motion.div
                key={trek.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="cursor-hover group"
              >
                <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 group-hover:bg-white/10 transition-all duration-500 h-full">
                  {/* Sacred Geometry Corner */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <SacredGeometry 
                      type={index === 0 ? 'star' : 'yantra'} 
                      className="w-full h-full text-slate-400 animate-float" 
                    />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-cosmic text-white mb-3">{trek.name}</h3>
                    <p className="text-white/70 mb-6 text-sm md:text-base">{trek.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-slate-400 flex-shrink-0" />
                        <span className="text-white/80 text-sm md:text-base">{trek.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mountain className="w-4 h-4 md:w-5 md:h-5 text-slate-400 flex-shrink-0" />
                        <span className="text-white/80 text-sm md:text-base">{trek.elevation}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 md:w-5 md:h-5 text-slate-400 flex-shrink-0" />
                        <span className="text-white/80 text-sm md:text-base">{trek.participants}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Footprints className="w-4 h-4 md:w-5 md:h-5 text-slate-400 flex-shrink-0" />
                        <span className="text-neon-gold text-sm md:text-base">{trek.difficulty}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-base md:text-lg font-cosmic text-white mb-3">Sacred Highlights</h4>
                    <div className="space-y-2">
                      {trek.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlight}
                          className="flex items-center space-x-2 text-white/70"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.5, 
                            delay: (index * 0.3) + (highlightIndex * 0.1) 
                          }}
                        >
                          <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0" />
                          <span className="text-xs md:text-sm">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    className="w-full py-2 md:py-3 rounded-lg bg-gradient-to-r from-slate-600/20 to-cosmic-600/20 border border-slate-400/30 text-slate-300 font-cosmic tracking-wide text-sm md:text-base group-hover:from-slate-600/30 group-hover:to-cosmic-600/30 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Begin Ascension
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrekRealm;