import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { fadeUp, fadeIn, staggerContainer } from '../utils/animations';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden" ref={ref}>
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-sand-100/20 -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-cream-200/30 translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.h1 
            className="font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-charcoal-900 mb-6"
            variants={fadeUp}
          >
            Curated experiences.
            <br />
            Thoughtful people.
            <br />
            Real rooms.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-charcoal-700 mb-10 max-w-2xl mx-auto"
            variants={fadeUp}
          >
            It's not about "what's happening" — it's about what's worth attending.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            variants={fadeIn}
          >
            <motion.a
              href="#cta"
              className="px-8 py-4 rounded-full bg-charcoal-900 text-cream-50 text-base font-medium tracking-wide transition-all duration-300 hover:bg-charcoal-800"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Request Access
            </motion.a>
            <motion.a
              href="#what-is-meven"
              className="px-8 py-4 rounded-full bg-transparent text-charcoal-800 border border-charcoal-200 hover:bg-cream-100 text-base font-medium tracking-wide transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore Experiences
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-flex items-center justify-center rounded-full border border-sand-200 bg-cream-50/80 backdrop-blur-sm px-6 py-3">
              <span className="text-charcoal-700 text-sm font-medium">Application-based access. Host-led curation.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Subtle scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-px h-12 bg-charcoal-300/50 mb-2"></div>
        <span className="text-xs uppercase tracking-widest text-charcoal-500">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;