import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Services', 'About', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-background/80 shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Aim Bright
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                href={`#${link.toLowerCase()}`}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-cyan"
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
            className="md:hidden backdrop-blur-lg bg-background/95 border-t border-white/10"
          >
            <div className="py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="px-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
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
