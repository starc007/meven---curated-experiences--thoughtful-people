import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { scrollReveal, staggerContainer } from '../utils/animations';

const TrustReputation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section className="py-24 md:py-32 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="text-center mb-16"
            variants={scrollReveal}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-6 text-charcoal-900 leading-tight">
              Trust & Reputation
            </h2>
            <p className="text-lg text-charcoal-700 max-w-2xl mx-auto">
              In a world of algorithmic feeds and anonymous crowds, Luma brings back human trust and accountability.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            <div className="space-y-8">
              <motion.div
                variants={scrollReveal}
                className="flex flex-col"
              >
                <h3 className="text-xl font-display font-medium mb-2 text-charcoal-900">Quality compounds</h3>
                <p className="text-charcoal-700">
                  As you attend and host experiences, your reputation grows naturally. Positive interactions unlock more opportunities over time.
                </p>
              </motion.div>
              
              <motion.div
                variants={scrollReveal}
                className="flex flex-col"
              >
                <h3 className="text-xl font-display font-medium mb-2 text-charcoal-900">Beyond the event</h3>
                <p className="text-charcoal-700">
                  Your reputation follows you, creating an incentive for genuine engagement and respectful behavior, not just attendance.
                </p>
              </motion.div>
            </div>
            
            <div className="space-y-8">
              <motion.div
                variants={scrollReveal}
                className="flex flex-col"
              >
                <h3 className="text-xl font-display font-medium mb-2 text-charcoal-900">Reciprocal feedback</h3>
                <p className="text-charcoal-700">
                  After each experience, hosts and guests rate each other, creating a cycle of accountability that raises the quality of all interactions.
                </p>
              </motion.div>
              
              <motion.div
                variants={scrollReveal}
                className="flex flex-col"
              >
                <h3 className="text-xl font-display font-medium mb-2 text-charcoal-900">Real identity</h3>
                <p className="text-charcoal-700">
                  Luma verifies the identity of everyone in the community, ensuring accountability and safety while maintaining privacy.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            variants={scrollReveal}
            className="mt-16 p-8 bg-cream-100 rounded-2xl border border-cream-200"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sand-200 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#776B56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 12H8.51" stroke="#776B56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12H12.01" stroke="#776B56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.5 12H15.51" stroke="#776B56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-charcoal-900 mb-2">A note on trust</h3>
                <p className="text-charcoal-700">
                  We believe that when people feel seen and valued, they show up differently. Luma's reputation system isn't about scores or leaderboards. It's about creating a culture where human connection and mutual respect are the default, not the exception.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustReputation;