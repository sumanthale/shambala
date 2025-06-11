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
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-cosmic-900 via-emerald-950 to-cosmic-800"
    >
      {/* Mystical Forest Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        {/* Floating Orbs */}
        {[...Array(20)].map((_, i) => (
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

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cosmic font-thin text-white mb-4">
              Sacred Dwellings
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <TreePine className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-24 md:w-32" />
              <Tent className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-24 md:w-32" />
              <Star className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
            </div>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Rest in harmony with nature's energy, where luxury accommodation meets spiritual awakening
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tents.map((tent, index) => (
              <motion.div
                key={tent.name}
                initial={{ opacity: 0, y: 50, rotateY: 45 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="cursor-hover group"
              >
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 group-hover:bg-white/10 transition-all duration-500 h-full">
                  {/* Sacred Geometry Decoration */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <SacredGeometry type="lotus" className="w-full h-full text-emerald-400 animate-float" />
                  </div>

                  <div className="mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 relative">
                      <Tent className="w-full h-full text-emerald-400 group-hover:text-neon-cyan transition-colors duration-500" />
                      <motion.div
                        className="absolute inset-0 border-2 border-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-cosmic text-white mb-2">{tent.name}</h3>
                    <p className="text-white/60 mb-4 text-sm md:text-base">{tent.description}</p>
                    <div className="text-2xl md:text-3xl font-bold text-neon-gold mb-4">{tent.price}</div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {tent.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-2 text-white/70"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                      >
                        <Star className="w-3 h-3 md:w-4 md:h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-xs md:text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full mt-auto py-2 md:py-3 rounded-lg bg-gradient-to-r from-emerald-600/20 to-cosmic-600/20 border border-emerald-400/30 text-emerald-400 font-cosmic tracking-wide text-sm md:text-base group-hover:from-emerald-600/30 group-hover:to-cosmic-600/30 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Reserve Sacred Space
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

export default TentRealm;