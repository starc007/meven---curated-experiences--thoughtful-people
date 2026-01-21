import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { scrollReveal, staggerContainer } from '../utils/animations';

const HowItWorks = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-cream-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={scrollReveal}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-6 text-charcoal-900 leading-tight">
            How Luma works
          </h2>
          <p className="text-lg text-charcoal-700">
            A simple, intentional process designed for quality over quantity.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <StepCard 
            number="01"
            title="Discover"
            description="Browse curated experiences based on your interests. Each room has a clear purpose and intention."
            controls={controls}
          />
          
          <StepCard 
            number="02"
            title="Apply"
            description="Share why you want to attend and what you'll bring to the experience. It's not about status—it's about fit."
            controls={controls}
          />
          
          <StepCard 
            number="03"
            title="Experience"
            description="Participate in intimate, intentional gatherings where every person is valued and every voice matters."
            controls={controls}
          />
        </motion.div>
        
        <motion.div 
          className="mt-20 max-w-3xl mx-auto text-center"
          variants={scrollReveal}
          initial="hidden"
          animate={controls}
        >
          <div className="inline-flex items-center justify-center rounded-full border border-sand-200 bg-cream-50/80 backdrop-blur-sm px-6 py-3">
            <span className="text-charcoal-700 text-sm">
              After each experience, both hosts and guests build reputation through mutual feedback.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StepCard = ({ number, title, description, controls }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
    >
      <div className="mb-6 w-16 h-16 rounded-full flex items-center justify-center bg-cream-50 border border-cream-200 text-2xl font-display text-charcoal-900">
        {number}
      </div>
      
      <h3 className="text-xl md:text-2xl font-display font-medium mb-3 text-charcoal-900">{title}</h3>
      
      <p className="text-charcoal-700 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default HowItWorks;