import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { scrollReveal, staggerContainer } from '../utils/animations';

const ForHosts = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section id="hosts" className="py-24 md:py-32 bg-cream-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="order-2 md:order-1"
          >
            <motion.span 
              className="inline-block text-sand-800 mb-2 text-sm font-medium tracking-wider uppercase"
              variants={scrollReveal}
            >
              For Hosts
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-6 text-charcoal-900 leading-tight"
              variants={scrollReveal}
            >
              Create spaces worth<br />experiencing.
            </motion.h2>
            
            <motion.p 
              className="text-lg text-charcoal-700 mb-8"
              variants={scrollReveal}
            >
              Luma empowers hosts to create intimate, meaningful experiences with people who truly want to be there.
            </motion.p>
            
            <div className="space-y-6">
              <HostFeature 
                title="Full control of the room"
                description="Review applications and curate your attendees. No more random guests or last-minute cancellations."
                controls={controls}
              />
              
              <HostFeature 
                title="Guest screening"
                description="See why people want to attend and their past engagement. Accept those who will contribute value."
                controls={controls}
              />
              
              <HostFeature 
                title="Balanced, respectful spaces"
                description="Create the exact dynamic you envision. Luma's reputation system ensures quality participation."
                controls={controls}
              />
            </div>
          </motion.div>
          
          {/* Right Visual */}
          <motion.div 
            className="order-1 md:order-2"
            variants={scrollReveal}
            initial="hidden"
            animate={controls}
          >
            <div className="relative rounded-2xl overflow-hidden bg-sand-50 border border-sand-100 shadow-sm p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-cream-100/50 to-sand-100/50 opacity-50"></div>
              
              <div className="relative rounded-xl overflow-hidden bg-cream-50 p-5 md:p-8">
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display text-xl text-charcoal-900">Evening Salon: Ideas Worth Exploring</h3>
                      <p className="text-sm text-charcoal-600">Hosted by Alexandra</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-sand-100 px-2.5 py-0.5 text-xs font-medium text-sand-800">
                      8 Attendees
                    </span>
                  </div>
                  
                  {/* Divider */}
                  <div className="border-t border-cream-200"></div>
                  
                  {/* Applicant */}
                  <div className="bg-cream-50 rounded-lg p-4 border border-cream-200">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-sand-200 flex items-center justify-center text-sand-700">
                          TM
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-charcoal-900">Thomas M.</h4>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-charcoal-500">4.9</span>
                            <div className="flex text-sand-400">
                              <span>★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-charcoal-500">Applied 2h ago</span>
                    </div>
                    
                    <p className="text-charcoal-700 text-sm">
                      I've been exploring the intersection of technology and philosophy. Excited to discuss how AI is changing our understanding of consciousness with like-minded people.
                    </p>
                    
                    <div className="mt-4 flex space-x-2">
                      <button className="px-4 py-1.5 rounded-full bg-charcoal-900 text-cream-50 text-sm font-medium">
                        Accept
                      </button>
                      <button className="px-4 py-1.5 rounded-full bg-transparent text-charcoal-800 border border-charcoal-200 text-sm font-medium">
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HostFeature = ({ title, description, controls }) => {
  return (
    <motion.div
      className="flex flex-col"
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
    >
      <h3 className="text-lg font-medium text-charcoal-900 mb-1">{title}</h3>
      <p className="text-charcoal-700">{description}</p>
    </motion.div>
  );
};

export default ForHosts;