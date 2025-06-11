import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shirt, Star, Sparkles, ShoppingBag } from 'lucide-react';
import SacredGeometry from './SacredGeometry';

const VastramRealm: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const collections = [
    {
      name: 'Cosmic Threads',
      category: 'Sacred Geometry Wear',
      price: '₹3,999',
      description: 'Meditation robes infused with yantra patterns',
      features: ['Organic Hemp', 'Hand-printed Mandalas', 'Chakra Alignment']
    },
    {
      name: 'Stellar Hoodies',
      category: 'Urban Mysticism',
      price: '₹4,999',
      description: 'Contemporary streetwear with cosmic consciousness',
      features: ['Glow-in-dark Prints', 'Sustainable Cotton', 'Sacred Symbols']
    },
    {
      name: 'Ethereal Scarves',
      category: 'Mystical Accessories',
      price: '₹2,499',
      description: 'Flowing fabrics that dance with your energy',
      features: ['Silk Blend', 'Crystal Infusion', 'Protective Prayers']
    },
    {
      name: 'Transcendence Tees',
      category: 'Consciousness Wear',
      price: '₹2,999',
      description: 'Casual wear for elevated beings',
      features: ['Bamboo Fiber', 'Sacred Typography', 'Eco-friendly Dyes']
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-cosmic-950 via-indigo-950 to-cosmic-900"
    >
      {/* Floating Runway Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_60%)]" />
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
          </motion.div>
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
              Vastram Collection
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shirt className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent w-24 md:w-32"
                animate={{ scaleX: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <Star className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent w-24 md:w-32"
                animate={{ scaleX: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
            </div>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Wear your consciousness. Sacred apparel for elevated souls seeking to express their inner cosmos.
            </p>
          </motion.div>

          {/* Central Sacred Runway */}
          <motion.div
            className="relative mb-12 md:mb-16 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <div className="relative w-64 h-16 md:w-80 md:h-20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full backdrop-blur-sm border border-white/20" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              />
              
              {/* Floating Sacred Geometry */}
              <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16">
                <SacredGeometry 
                  type="lotus" 
                  className="w-full h-full text-indigo-400 animate-sacred-spin opacity-60" 
                />
              </div>
            </div>
          </motion.div>

          {/* Collection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {collections.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50, rotateY: 15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="cursor-hover group"
              >
                <div className="relative p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 group-hover:bg-white/10 group-hover:border-indigo-400/30 transition-all duration-500 h-full">
                  {/* Floating Item Representation */}
                  <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 flex items-center justify-center"
                    animate={{
                      y: [0, -5, 0],
                      rotateY: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <Shirt className="w-8 h-8 md:w-10 md:h-10 text-indigo-400 group-hover:text-neon-cyan transition-colors duration-500" />
                  </motion.div>

                  <div className="text-center mb-4">
                    <h3 className="text-lg md:text-xl font-cosmic text-white mb-1">{item.name}</h3>
                    <div className="text-indigo-400 text-xs md:text-sm mb-2">{item.category}</div>
                    <div className="text-xl md:text-2xl font-bold text-neon-gold mb-3">{item.price}</div>
                    <p className="text-white/60 text-xs md:text-sm mb-4">{item.description}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-2 text-white/70"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: (index * 0.1) + (featureIndex * 0.05) 
                        }}
                      >
                        <Star className="w-2 h-2 md:w-3 md:h-3 text-indigo-400 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full py-2 md:py-3 rounded-lg bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-400/30 text-indigo-400 font-cosmic tracking-wide text-xs md:text-sm group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Consciousness
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Collection CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              className="px-8 md:px-12 py-3 md:py-4 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-400/40 text-indigo-400 font-cosmic text-base md:text-lg tracking-wide backdrop-blur-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Full Collection
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VastramRealm;