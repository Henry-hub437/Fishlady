import { FadeIn } from './animations';
import { MessageCircle, Phone } from 'lucide-react';
import orderImg from '../assets/images/gallery_fish_2_1780145522207.png';

export function Reservation() {
  const WHATSAPP_NUMBER = "2347068579340";
  const PHONE_NUMBER = "tel:07068579340";

  return (
    <section id="order" className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-brand-dark text-white rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl">
          
          <div className="md:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Dine With Us</h2>
              <p className="text-white/60 font-light mb-10 leading-relaxed">
                Ready to experience the best coastal cuisine in Lekki? Get in touch with us directly via WhatsApp or phone call to place an order, make inquiries, or arrange your visit.
              </p>

              <div className="space-y-6">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b958] text-white py-4 rounded-sm font-medium tracking-wide uppercase transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message on WhatsApp
                </a>
                <a 
                  href={PHONE_NUMBER}
                  className="w-full flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark py-4 rounded-sm font-medium tracking-wide uppercase transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Directly
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="md:w-1/2 relative min-h-[400px]">
            <img 
              src={orderImg} 
              alt="Premium grilled fish" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
