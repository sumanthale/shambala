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
        {[...Array(8)].map((_, i) => (
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
        {[...Array(12)].map((_, i) => (
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
              className="w-6 h-6 md:w-8 md:h-8 text-amber-400" 
            />
          </motion.div>
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
              Celestial Café
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Coffee className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-24 md:w-32"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-24 md:w-32"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <Leaf className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
            </div>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Nourish your being in our cosmic diner. Where every bite and sip elevates consciousness.
            </p>
          </motion.div>

          {/* Central Sacred Table */}
          <motion.div
            className="relative mb-12 md:mb-16 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-amber-500/10 to-purple-500/10 backdrop-blur-lg border border-amber-400/20 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 md:w-32 md:h-32"
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
                  className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-lg border border-amber-400/20 flex items-center justify-center"
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
                  <Icon className="w-4 h-4 md:w-6 md:h-6 text-amber-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-16">
            {menu.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="cursor-hover group"
              >
                <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 group-hover:bg-white/10 group-hover:border-amber-400/30 transition-all duration-500 h-full">
                  {/* Energy Indicator */}
                  <motion.div
                    className="absolute -top-2 -right-2 px-2 md:px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400 text-xs font-cosmic"
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

                  <div className="text-center">
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      <Coffee className="w-6 h-6 md:w-8 md:h-8 text-amber-400 group-hover:text-neon-gold transition-colors duration-500" />
                    </motion.div>

                    <h3 className="text-lg md:text-xl font-cosmic text-white mb-2">{item.name}</h3>
                    <p className="text-white/60 text-xs md:text-sm mb-3">{item.description}</p>
                    <div className="text-xl md:text-2xl font-bold text-neon-gold mb-4">{item.price}</div>
                    
                    <motion.button
                      className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-400/30 text-amber-400 font-cosmic tracking-wide text-xs md:text-sm group-hover:from-amber-600/30 group-hover:to-orange-600/30 transition-all duration-500"
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
            <div className="max-w-md mx-auto p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <h3 className="text-xl md:text-2xl font-cosmic text-white mb-3">Join the Frequency</h3>
              <p className="text-white/60 text-xs md:text-sm mb-4">
                Tune into our higher dimension. Receive cosmic updates and sacred offerings.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  placeholder="your@cosmic.email"
                  className="flex-1 px-3 md:px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 backdrop-blur-sm text-sm"
                />
                <motion.button
                  className="px-4 md:px-6 py-2 rounded-lg bg-gradient-to-r from-amber-600/30 to-orange-600/30 border border-amber-400/40 text-amber-400 font-cosmic text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ascend
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CafeRealm;