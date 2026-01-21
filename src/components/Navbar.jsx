import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItemVariants, scaleOnHover } from '../utils/animations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navClasses = isScrolled 
    ? 'bg-cream-50/90 shadow-sm backdrop-blur-md'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClasses}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-display font-medium tracking-tight text-charcoal-900"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Luma
        </motion.a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavItem href="#hosts">For Hosts</NavItem>
          <NavItem href="#guests">For Guests</NavItem>
          <NavItem href="#how-it-works">How It Works</NavItem>
          
          <motion.a
            href="#cta"
            className="px-5 py-2.5 rounded-full bg-sand-100 hover:bg-sand-200 text-charcoal-800 transition-colors duration-300 border border-sand-200"
            variants={scaleOnHover}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Request Access
          </motion.a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-charcoal-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-6 h-px bg-charcoal-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-px bg-charcoal-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-cream-50 border-t border-cream-100 px-4 py-6 space-y-6">
              <MobileNavItem href="#hosts" onClick={() => setIsMenuOpen(false)}>
                For Hosts
              </MobileNavItem>
              <MobileNavItem href="#guests" onClick={() => setIsMenuOpen(false)}>
                For Guests
              </MobileNavItem>
              <MobileNavItem href="#how-it-works" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </MobileNavItem>
              <div className="pt-2">
                <motion.a
                  href="#cta"
                  className="block w-full text-center px-5 py-3 rounded-full bg-sand-100 hover:bg-sand-200 text-charcoal-800 transition-colors duration-300 border border-sand-200"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request Access
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavItem = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-charcoal-700 hover:text-charcoal-900 font-sans font-medium text-sm tracking-wide transition-colors duration-300"
    variants={menuItemVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {children}
  </motion.a>
);

const MobileNavItem = ({ href, onClick, children }) => (
  <motion.a
    href={href}
    className="block px-3 py-2 text-charcoal-800 text-base font-medium"
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
  >
    {children}
  </motion.a>
);

export default Navbar;