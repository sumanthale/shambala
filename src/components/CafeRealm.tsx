import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coffee, Sparkles, Leaf, Heart } from 'lucide-react';
import SacredGeometry from './SacredGeometry';

const CafeRealm: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const menu = [
    {
      name: 'Cosmic Chai',
      description: 'Himalayan spices meet consciousness',
      price: '₹180',
      energy: 'Awakening'
    },
    {
      name: 'Buddha Bowl',
      description: 'Nourishment for body and soul',
      price: '₹450',
      energy: 'Grounding'
    },
    {
      name: 'Enlightenment Elixir',
      description: 'Cold-pressed juice with adaptogenic herbs',
      price: '₹320',
      energy: 'Clarity'
    },
    {
      name: 'Sacred Sweets',
      description: 'Raw desserts infused with intention',
      price: '₹280',
      energy: 'Joy'
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-cosmic-900 via-amber-950 to-cosmic-950"
    >
      {/* Celestial Diner Atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(245,158,11,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        {/* Steam Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-300 rounded-full opacity-20"
            style={{
              left: `${20 + Math.random() * 60}%`,
              bottom: `${10 + Math.random() * 30}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0.2, 0.6, 0],
              scale: [1, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating Sacred Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <SacredGeometry 
              type={i % 2 === 0 ? 'lotus' : 'circle'} 
              className="w-6 h-6 lg:w-8 lg:h-8 text-amber-400" 
            />
          </motion.div>
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
              Celestial Café
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-16 sm:w-24 lg:w-32"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-16 sm:w-24 lg:w-32"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
            <p className="text-body-lg text-white/70 max-w-3xl mx-auto">
              Nourish your being in our cosmic diner. Where every bite and sip elevates consciousness.
            </p>
          </motion.div>

          {/* Central Sacred Table */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <div className="relative">
              <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-amber-500/10 to-purple-500/10 backdrop-blur-lg border border-amber-400/20 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 lg:w-32 lg:h-32"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <SacredGeometry 
                    type="mandala" 
                    className="w-full h-full text-amber-400/40" 
                  />
                </motion.div>
              </div>
              
              {/* Floating Menu Items */}
              {[Coffee, Leaf, Heart, Sparkles].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/5 backdrop-blur-lg border border-amber-400/20 flex items-center justify-center"
                  style={{
                    top: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                    left: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <Icon className="w-4 h-4 lg:w-6 lg:h-6 text-amber-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            {menu.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="cursor-hover group"
              >
                <div className="card-base card-hover p-4 lg:p-6 h-full">
                  {/* Energy Indicator */}
                  <motion.div
                    className="absolute -top-2 -right-2 px-2 lg:px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400 text-xs font-cosmic"
                    animate={{
                      glow: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {item.energy}
                  </motion.div>

                  <div className="text-center spacing-content">
                    <motion.div
                      className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      <Coffee className="w-6 h-6 lg:w-8 lg:h-8 text-amber-400 group-hover:text-neon-gold transition-colors duration-500" />
                    </motion.div>

                    <div className="spacing-items">
                      <h3 className="text-heading-md text-white">{item.name}</h3>
                      <p className="text-white/60 text-body-md">{item.description}</p>
                      <div className="text-xl lg:text-2xl font-bold text-neon-gold">{item.price}</div>
                    </div>
                    
                    <motion.button
                      className="button-primary w-full text-xs lg:text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Manifest Order
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="max-w-md mx-auto card-base p-6 lg:p-8">
              <div className="spacing-content">
                <h3 className="text-heading-md text-white">Join the Frequency</h3>
                <p className="text-white/60 text-body-md">
                  Tune into our higher dimension. Receive cosmic updates and sacred offerings.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your@cosmic.email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 backdrop-blur-sm text-sm"
                  />
                  <motion.button
                    className="button-secondary tap-target"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ascend
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CafeRealm;