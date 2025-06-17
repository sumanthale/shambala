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
      className="min-h-screen relative overflow-hidden"
    >
      {/* Mountain Backdrop */}
      <div className="absolute inset-0">
        {/* Snow Particles */}
        {[...Array(20)].map((_, i) => (
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

      <div className="section-container section-padding relative z-10">
        <div className="spacing-section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center spacing-content"
          >
            <h2 className="text-heading-xl text-white mb-6">
              High Altitude Journeys
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Footprints className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-16 sm:w-24 lg:w-32" />
              <Mountain className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-16 sm:w-24 lg:w-32" />
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
            </div>
            <p className="text-body-lg text-white/70 max-w-3xl mx-auto">
              Ascend beyond limits. Where every step elevates consciousness and every breath deepens understanding.
            </p>
          </motion.div>

          {/* Elevation Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="card-base p-6 lg:p-8 mb-12"
          >
            <div className="relative">
              <svg className="w-full h-32 lg:h-48" viewBox="0 0 1000 200">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {treks.map((trek, index) => (
              <motion.div
                key={trek.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="cursor-hover group"
              >
                <div className="card-base card-hover p-6 lg:p-8 h-full">
                  {/* Sacred Geometry Corner */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 lg:w-16 lg:h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <SacredGeometry 
                      type={index === 0 ? 'star' : 'yantra'} 
                      className="w-full h-full text-slate-400 animate-float" 
                    />
                  </div>

                  <div className="spacing-content">
                    <div className="spacing-items">
                      <h3 className="text-heading-lg text-white">{trek.name}</h3>
                      <p className="text-white/70 text-body-md">{trek.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400 flex-shrink-0" />
                          <span className="text-white/80 text-body-md">{trek.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mountain className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400 flex-shrink-0" />
                          <span className="text-white/80 text-body-md">{trek.elevation}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400 flex-shrink-0" />
                          <span className="text-white/80 text-body-md">{trek.participants}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Footprints className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400 flex-shrink-0" />
                          <span className="text-neon-gold text-body-md">{trek.difficulty}</span>
                        </div>
                      </div>
                    </div>

                    <div className="spacing-items">
                      <h4 className="text-heading-md text-white">Sacred Highlights</h4>
                      <div className="spacing-items">
                        {trek.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlight}
                            className="flex items-center space-x-3 text-white/70"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ 
                              duration: 0.5, 
                              delay: (index * 0.3) + (highlightIndex * 0.1) 
                            }}
                          >
                            <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0" />
                            <span className="text-body-md">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      className="button-primary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Begin Ascension
                    </motion.button>
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

export default TrekRealm;