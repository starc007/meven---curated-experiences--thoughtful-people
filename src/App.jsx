import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsLuma from './components/WhatIsMeven';
import ForHosts from './components/ForHosts';
import ForGuests from './components/ForGuests';
import HowItWorks from './components/HowItWorks';
import TrustReputation from './components/TrustReputation';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative z-10">
              <Navbar />
              <main>
                <Hero />
                <WhatIsLuma />
                <ForHosts />
                <ForGuests />
                <HowItWorks />
                <TrustReputation />
                <CallToAction />
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;