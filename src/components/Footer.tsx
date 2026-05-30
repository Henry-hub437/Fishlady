export function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl mb-6">The Fish Lady</h2>
            <p className="text-white/50 font-light leading-relaxed mb-6">
              An elevation of coastal cuisine in the heart of Lekki. Where high-end hospitality meets unforgettable flavors.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs text-white/40 mb-6">Explore</h4>
            <ul className="space-y-4 font-light text-white/70">
              <li><a href="#about" className="hover:text-brand-gold transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-brand-gold transition-colors">Featured Menu</a></li>
              <li><a href="#reviews" className="hover:text-brand-gold transition-colors">Testimonials</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs text-white/40 mb-6">Legal</h4>
            <ul className="space-y-4 font-light text-white/70">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Reservation Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs text-white/40 mb-6">Stay Updated</h4>
            <p className="text-white/50 font-light mb-4">Subscribe for seasonal menu updates and exclusive events.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-2 w-full rounded-l-sm focus:outline-none focus:border-brand-gold font-light"
              />
              <button 
                type="button"
                className="bg-brand-gold px-6 py-2 text-brand-dark font-medium rounded-r-sm hover:bg-brand-gold-dark transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} The Fish Lady Reserved. Developed for Design Preview.</p>
        </div>
      </div>
    </footer>
  );
}
