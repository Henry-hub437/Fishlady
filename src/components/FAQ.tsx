import { FadeIn } from './animations';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "Do I need a reservation to dine?",
    answer: "While we do accept walk-ins based on availability, we highly recommend making a reservation, especially for dinner and weekends, to guarantee a table."
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes, our chefs can accommodate various dietary requirements. Please inform our staff of any allergies or restrictions when placing your order."
  },
  {
    question: "Is there a dress code?",
    answer: "Our dress code is smart casual. We kindly ask our guests to refrain from wearing athletic wear or beach attire."
  },
  {
    question: "Do you have parking available?",
    answer: "Yes, we offer secure parking for our guests, as well as a complimentary valet service during evening service."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-serif text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-dark/60 font-light">Common inquiries to help prepare for your visit.</p>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div 
                className={`border border-brand-dark/10 rounded-sm overflow-hidden transition-colors ${openIdx === idx ? 'bg-white' : 'bg-transparent'}`}
              >
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  <span className="font-serif text-xl text-brand-dark">{faq.question}</span>
                  {openIdx === idx ? (
                    <Minus className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-dark/30 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-6 text-brand-dark/70 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
