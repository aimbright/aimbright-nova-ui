import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/#contact' },
  ];

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/80 shadow-lg border-b border-primary/20'
          : 'bg-white/50 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/assets/images/an2.png" 
                alt="Aim Bright Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {link.label === 'Contact' ? (
                  <button
                    onClick={scrollToContact}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-foreground/80 hover:text-primary transition-colors font-medium ${
                      location.pathname === link.path ? 'text-primary' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-cyan"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-xl bg-white/95 border-t border-primary/20"
          >
            <div className="py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.label === 'Contact' ? (
                    <button
                      onClick={() => {
                        scrollToContact();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 ${
                        location.pathname === link.path ? 'text-primary' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => {
                    scrollToContact();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
