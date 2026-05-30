import { FadeIn } from './animations';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Location() {
  return (
    <section id="contact" className="py-24 bg-[#EAE2D6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <FadeIn>
              <h2 className="text-4xl font-serif text-brand-dark mb-8">Find Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-brand-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-brand-dark">Address</h4>
                    <p className="text-brand-dark/70 font-light leading-relaxed">
                      3 Hakeem Dickson Link Rd,<br />
                      Lekki Phase I, Lekki 106104,<br />
                      Lagos, Nigeria
                    </p>
                    <p className="text-sm font-medium mt-2 text-brand-dark/50">Located in: Modest Outfit & Investment Ltd</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-brand-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-brand-dark">Contact</h4>
                    <p className="text-brand-dark/70 font-light">0706 857 9340</p>
                    <p className="text-brand-dark/70 font-light mt-1 text-sm">(Reservations & Enquiries)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-brand-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-brand-dark">Hours</h4>
                    <p className="text-brand-dark/70 font-light">Monday - Sunday</p>
                    <p className="text-brand-dark/70 font-light font-medium mt-1">Open · Closes 10:00 PM</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-2/3 h-[500px] w-full rounded-sm overflow-hidden shadow-xl">
            <FadeIn className="h-full">
              <iframe 
                title="The Fish Lady Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.73374825959!2d3.47359577583!3d6.441065124116496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf56b509f6df7%3A0xc3babad52a7c5b16!2s3%20Hakeem%20Dickson%20Link%20Road%2C%20Lekki%20Phase%20I%2C%20Lagos%20106104%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
