import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tent, Star, TreePine } from 'lucide-react';
import SacredGeometry from './SacredGeometry';

const TentRealm: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const tents = [
    {
      name: 'Celestial Dome',
      description: 'Experience the cosmos from within',
      price: '₹12,000/night',
      features: ['360° Sky View', 'Sacred Geometry Design', 'Meditation Space']
    },
    {
      name: 'Forest Sanctuary',
      description: 'Commune with ancient spirits',
      price: '₹8,000/night',
      features: ['Tree Integration', 'Natural Aromatherapy', 'Wildlife Viewing']
    },
    {
      name: 'Mystic Pavilion',
      description: 'Luxury meets enlightenment',
      price: '₹15,000/night',
      features: ['Crystal Energy Grid', 'Private Yoga Deck', 'Gourmet Kitchen']
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Mystical Forest Background */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
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
              Sacred Dwellings
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <TreePine className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-16 sm:w-24 lg:w-32" />
              <Tent className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-16 sm:w-24 lg:w-32" />
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
            </div>
            <p className="text-body-lg text-white/70 max-w-3xl mx-auto">
              Rest in harmony with nature's energy, where luxury accommodation meets spiritual awakening
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tents.map((tent, index) => (
              <motion.div
                key={tent.name}
                initial={{ opacity: 0, y: 50, rotateY: 45 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="cursor-hover group"
              >
                <div className="card-base card-hover p-6 lg:p-8 h-full">
                  {/* Sacred Geometry Decoration */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 lg:w-16 lg:h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <SacredGeometry type="lotus" className="w-full h-full text-emerald-400 animate-float" />
                  </div>

                  <div className="spacing-content">
                    <div className="text-center spacing-items">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 relative">
                        <Tent className="w-full h-full text-emerald-400 group-hover:text-neon-cyan transition-colors duration-500" />
                        <motion.div
                          className="absolute inset-0 border-2 border-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        />
                      </div>
                      <h3 className="text-heading-md text-white">{tent.name}</h3>
                      <p className="text-body-md text-white/60">{tent.description}</p>
                      <div className="text-2xl lg:text-3xl font-bold text-neon-gold">{tent.price}</div>
                    </div>

                    <div className="spacing-items">
                      {tent.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-3 text-white/70"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        >
                          <Star className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-body-md">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      className="button-primary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Reserve Sacred Space
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

export default TentRealm;