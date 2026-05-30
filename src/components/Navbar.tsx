import { MapPin, Phone, Clock, Menu as MenuIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`font-serif text-2xl font-bold tracking-wider uppercase transition-colors ${
          isScrolled ? 'text-white' : 'text-white drop-shadow-md'
        }`}>
          The Fish Lady
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isScrolled ? 'text-gray-300 hover:text-brand-gold' : 'text-white/90 hover:text-brand-gold drop-shadow-md'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#order"
            className="bg-brand-gold hover:bg-brand-gold-dark text-brand-dark px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105"
          >
            Contact & Order
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-serif"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#order"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-gold text-brand-dark text-center px-6 py-3 rounded-full font-medium mt-4"
              >
                Contact & Order
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
