import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import heroImg from '../assets/images/hero_fish_1780145471773.png';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Premium grilled seafood dish"
          className="w-full h-full object-cover scale-105 transform motion-safe:animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-6 block"
        >
          Lekki Phase I, Lagos
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8"
        >
          An Elevation of <br className="hidden md:block" />
          <span className="italic">Coastal Cuisine</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#order"
            className="group flex items-center bg-brand-gold hover:bg-brand-gold-dark text-brand-dark px-8 py-4 rounded-full text-base font-medium transition-all"
          >
            Contact & Order
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#menu"
            className="text-white hover:text-brand-gold border border-white/30 hover:border-brand-gold px-8 py-4 rounded-full text-base font-medium transition-all"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-brand-gold animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
