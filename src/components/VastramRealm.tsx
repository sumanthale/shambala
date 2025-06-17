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
        {[...Array(12)].map((_, i) => (
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
            <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-indigo-400" />
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
              Vastram Collection
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Shirt className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent w-16 sm:w-24 lg:w-32"
                animate={{ scaleX: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent w-16 sm:w-24 lg:w-32"
                animate={{ scaleX: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
            </div>
            <p className="text-body-lg text-white/70 max-w-3xl mx-auto">
              Wear your consciousness. Sacred apparel for elevated souls seeking to express their inner cosmos.
            </p>
          </motion.div>

          {/* Central Sacred Runway */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <div className="relative w-64 h-16 lg:w-80 lg:h-20">
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
              <div className="absolute -top-6 lg:-top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16">
                <SacredGeometry 
                  type="lotus" 
                  className="w-full h-full text-indigo-400 animate-sacred-spin opacity-60" 
                />
              </div>
            </div>
          </motion.div>

          {/* Collection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            {collections.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50, rotateY: 15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="cursor-hover group"
              >
                <div className="card-base card-hover p-4 lg:p-6 h-full">
                  {/* Floating Item Representation */}
                  <motion.div
                    className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 flex items-center justify-center"
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
                    <Shirt className="w-8 h-8 lg:w-10 lg:h-10 text-indigo-400 group-hover:text-neon-cyan transition-colors duration-500" />
                  </motion.div>

                  <div className="text-center spacing-content">
                    <div className="spacing-items">
                      <h3 className="text-heading-md text-white">{item.name}</h3>
                      <div className="text-indigo-400 text-body-md">{item.category}</div>
                      <div className="text-xl lg:text-2xl font-bold text-neon-gold">{item.price}</div>
                      <p className="text-white/60 text-body-md">{item.description}</p>
                    </div>

                    <div className="spacing-items">
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
                          <Star className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                          <span className="text-xs">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      className="button-primary w-full text-xs lg:text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Consciousness
                    </motion.button>
                  </div>
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
              className="button-primary text-base lg:text-lg"
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