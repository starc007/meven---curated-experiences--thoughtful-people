import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { fadeIn, fadeUp } from '../utils/animations';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section id="cta" className="py-24 md:py-32 bg-cream-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-6 text-charcoal-900 leading-tight"
            variants={fadeUp}
          >
            Join the Luma<br />community
          </motion.h2>
          
          <motion.p 
            className="text-lg text-charcoal-700 mb-10"
            variants={fadeUp}
          >
            Request access to start hosting or attending experiences that value intention over attention.
          </motion.p>
          
          <motion.div 
            className="max-w-md mx-auto"
            variants={fadeUp}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 rounded-md border border-cream-300 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-sand-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-6 py-3 rounded-md bg-charcoal-900 text-cream-50 font-medium tracking-wide transition-all duration-300 hover:bg-charcoal-800 ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? 'Processing...' : 'Request Access'}
                  </button>
                </div>
                
                <p className="text-xs text-charcoal-500 mt-2">
                  We'll reach out with access details based on capacity. No spam.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-cream-50 border border-sand-200 rounded-lg p-6"
              >
                <svg className="w-10 h-10 mx-auto mb-4 text-sand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-display font-medium mb-2 text-charcoal-900">
                  Thank you for your interest
                </h3>
                <p className="text-charcoal-700 mb-4">
                  We've received your request and will be in touch soon with next steps.
                </p>
              </motion.div>
            )}
          </motion.div>
          
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-6"
            variants={fadeUp}
          >
            <TestimonialPill text="The most thoughtful conversations I've had in years." />
            <TestimonialPill text="Finally, events where everyone actually wants to be there." />
            <TestimonialPill text="I've met the most interesting people through Luma." />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialPill = ({ text }) => (
  <div className="inline-flex items-center rounded-full border border-sand-200 bg-cream-50 px-4 py-2 text-sm text-charcoal-700">
    {text}
  </div>
);

export default CallToAction;