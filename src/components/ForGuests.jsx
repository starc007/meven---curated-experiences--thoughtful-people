import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { scrollReveal, staggerContainer } from '../utils/animations';

const ForGuests = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section id="guests" className="py-24 md:py-32 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <motion.div 
            className="relative"
            variants={scrollReveal}
            initial="hidden"
            animate={controls}
          >
            <div className="relative rounded-2xl overflow-hidden bg-sand-50 border border-sand-100 shadow-sm p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-cream-100/50 to-sand-100/50 opacity-50"></div>
              
              <div className="relative rounded-xl overflow-hidden bg-cream-50 p-5 md:p-8">
                <div className="space-y-6">
                  {/* Card Header */}
                  <div>
                    <h3 className="font-display text-xl text-charcoal-900 mb-1">Upcoming Experiences</h3>
                    <p className="text-sm text-charcoal-600">Curated for you based on your interests and reputation</p>
                  </div>
                  
                  {/* Experience List */}
                  <div className="space-y-4">
                    <ExperienceCard 
                      title="Wine Tasting: Natural Wines" 
                      host="James K."
                      date="May 24 · 7:00 PM"
                      attendees="6/8 confirmed"
                      status="Pending"
                    />
                    
                    <ExperienceCard 
                      title="Photography Walk: Urban Geometry" 
                      host="Mia T."
                      date="May 26 · 10:00 AM"
                      attendees="4/10 confirmed"
                      status="Accepted"
                      highlight={true}
                    />
                    
                    <ExperienceCard 
                      title="Dinner Series: Southeast Asian Cuisine" 
                      host="Leila N."
                      date="June 3 · 6:30 PM"
                      attendees="8/10 confirmed"
                      status="Apply"
                    />
                  </div>
                  
                  <div className="border-t border-cream-200 pt-4">
                    <a href="#" className="text-charcoal-900 text-sm font-medium hover:text-charcoal-700 transition-colors duration-200 flex items-center">
                      <span>Explore more experiences</span>
                      <span className="ml-1.5">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
          >
            <motion.span 
              className="inline-block text-sand-800 mb-2 text-sm font-medium tracking-wider uppercase"
              variants={scrollReveal}
            >
              For Guests
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-6 text-charcoal-900 leading-tight"
              variants={scrollReveal}
            >
              Experiences that<br />value your presence.
            </motion.h2>
            
            <motion.p 
              className="text-lg text-charcoal-700 mb-8"
              variants={scrollReveal}
            >
              Discover intimate gatherings where your contribution matters and your presence is valued, not just counted.
            </motion.p>
            
            <div className="space-y-6">
              <GuestFeature 
                title="Discover intimate events"
                description="Access experiences designed for genuine connection, not networking or social climbing."
                controls={controls}
              />
              
              <GuestFeature 
                title="Earn access through intention"
                description="Express why you want to attend. Show hosts that you'll contribute to the experience in a meaningful way."
                controls={controls}
              />
              
              <GuestFeature 
                title="Build trust over time"
                description="As you attend experiences and engage positively, your reputation grows, opening doors to more exclusive rooms."
                controls={controls}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GuestFeature = ({ title, description, controls }) => {
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

const ExperienceCard = ({ title, host, date, attendees, status, highlight = false }) => {
  const bgClass = highlight ? 'bg-sand-50' : 'bg-cream-50';
  const borderClass = highlight ? 'border-sand-200' : 'border-cream-200';
  
  let statusElement;
  if (status === "Accepted") {
    statusElement = <span className="inline-flex items-center rounded-full bg-sand-100 px-2.5 py-0.5 text-xs font-medium text-sand-800">Accepted</span>;
  } else if (status === "Pending") {
    statusElement = <span className="inline-flex items-center rounded-full bg-cream-200 px-2.5 py-0.5 text-xs font-medium text-charcoal-600">Pending</span>;
  } else {
    statusElement = <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-charcoal-800 border border-charcoal-200">Apply</span>;
  }
  
  return (
    <div className={`rounded-lg p-3 border ${borderClass} ${bgClass}`}>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-charcoal-900">{title}</h4>
          <p className="text-xs text-charcoal-600">Hosted by {host}</p>
          <div className="flex items-center mt-2 space-x-3">
            <span className="text-xs text-charcoal-700">{date}</span>
            <span className="text-xs text-charcoal-500">{attendees}</span>
          </div>
        </div>
        <div>
          {statusElement}
        </div>
      </div>
    </div>
  );
};

export default ForGuests;