import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { scrollReveal, staggerContainer } from '../utils/animations';

const FeatureItem = ({ title, description }) => {
  return (
    <motion.div 
      className="flex flex-col items-start"
      variants={scrollReveal}
    >
      <h3 className="text-xl md:text-2xl font-display font-medium mb-3 text-charcoal-900">{title}</h3>
      <p className="text-charcoal-700 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const WhatIsMeven = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section 
      id="what-is-meven" 
      className="py-20 md:py-32 bg-cream-50 relative"
      ref={ref}
    >
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-cream-50 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-0"
        >
          <FeatureItem 
            title="Application-based access"
            description="MEVEN prioritizes intent and fit over first-come-first-serve. Hosts review applications to curate balanced, engaged rooms."
          />
          
          <FeatureItem 
            title="Host-led curation"
            description="Hosts have complete control over their experiences. They decide who attends, creating spaces that fulfill their vision."
          />
          
          <FeatureItem 
            title="Reputation-driven community"
            description="Quality compounds. Behavior matters. Both hosts and guests build trust through thoughtful participation."
          />
        </motion.div>

        <motion.div 
          className="mt-24 md:mt-32 max-w-3xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-6 text-charcoal-900 leading-tight"
            variants={scrollReveal}
          >
            It's not about<br />the algorithm.
          </motion.h2>
          <motion.p 
            className="text-lg text-charcoal-700 max-w-2xl mx-auto"
            variants={scrollReveal}
          >
            We believe in human curation over endless feeds. MEVEN is built for hosts who care about creating memorable experiences and guests who value quality over quantity.
          </motion.p>
        </motion.div>
        
        <div className="mt-20 border-t border-cream-200"></div>
      </div>
    </section>
  );
};

export default WhatIsMeven;