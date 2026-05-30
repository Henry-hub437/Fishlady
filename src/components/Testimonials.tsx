import { FadeIn } from './animations';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: "Adebayo O.",
    rating: 5,
    text: "Absolutely the best fish restaurant in Lekki Phase 1. The croaker was fresh and perfectly spiced, and the ambiance is distinctly premium."
  },
  {
    name: "Chioma N.",
    rating: 5,
    text: "A luxurious experience from start to finish. The service was impeccable, and their fried plantain is to die for. Highly recommended for dates or business lunches."
  },
  {
    name: "David M.",
    rating: 4,
    text: "Great atmosphere and lovely staff. The tilapia was incredibly flavorful. Will definitely be coming back when I'm in Lagos next."
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[#EAE2D6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-brand-dark/50 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Guest Experiences
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">What They Say</h2>
            <div className="mt-4 flex items-center justify-center space-x-2 text-brand-dark">
              <span className="text-xl font-medium">4.3</span>
              <div className="flex">
                {[1, 2, 3, 4].map(i => <Star key={i} className="w-5 h-5 fill-brand-dark" />)}
                <Star className="w-5 h-5 fill-brand-dark/30 text-brand-dark/30" />
              </div>
              <span className="text-sm border-l border-brand-dark/20 pl-2 ml-2">(52 Reviews)</span>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white p-8 rounded-sm shadow-sm h-full flex flex-col">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-dark/80 font-serif text-lg leading-relaxed mb-6 flex-grow italic">
                  "{review.text}"
                </p>
                <p className="text-sm font-medium text-brand-dark uppercase tracking-wider">
                  — {review.name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
