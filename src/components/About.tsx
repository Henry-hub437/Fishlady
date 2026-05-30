import { FadeIn } from './animations';
import aboutImg from '../assets/images/about_fish_1780145488703.png';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-full flex-col lg:flex-row flex items-center gap-16">
          
          <div className="lg:w-1/2 order-2 lg:order-1 relative">
            <FadeIn>
              <div className="relative">
                <img
                  src={aboutImg}
                  alt="Premium fish plating"
                  className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-brand-dark text-brand-gold p-8 rounded-sm hidden md:block">
                  <p className="text-5xl font-serif mb-2">4.3</p>
                  <p className="text-sm tracking-wider uppercase text-white/70">Top Rated in Lekki</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <FadeIn>
              <span className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight mb-6">
                Culinary Perfection<br />Meets Classic Hospitality.
              </h2>
              <p className="text-brand-dark/70 text-lg leading-relaxed mb-6 font-light">
                Nestled in the heart of Lekki Phase I, <strong className="font-semibold text-brand-dark">The Fish Lady</strong> is a sanctuary for lovers of premium coastal cuisine. We blend traditional Nigerian aquatic heritage with refined, modern culinary techniques.
              </p>
              <p className="text-brand-dark/70 text-lg leading-relaxed mb-8 font-light">
                From our perfectly sourced Tilapia and Croaker to our signature golden fried plantains, every plate is crafted to deliver an unforgettable dining experience. Step inside and let the ambiance and flavor transport you.
              </p>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Signature-1.png" 
                alt="Chef Signature" 
                className="h-12 opacity-40 grayscale mix-blend-multiply"
              />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
