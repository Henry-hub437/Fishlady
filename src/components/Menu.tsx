import { FadeIn } from './animations';
import croakerImg from '../assets/images/grilled_croaker_1780145374860.png';
import tilapiaImg from '../assets/images/fried_tilapia_1780145393339.png';
import peppersoupImg from '../assets/images/catfish_peppersoup_1780145409329.png';
import plantainImg from '../assets/images/fried_plantain_1780145426330.png';
import croakerBitesImg from '../assets/images/croaker_bites_1780145447408.png';
import galleryFish1 from '../assets/images/gallery_fish_1_1780145504614.png';

const MENU_ITEMS = [
  {
    category: "Signature Catches",
    items: [
      {
        name: "Grilled Croaker Fish",
        description: "Marinated in our secret spicy herb blend, char-grilled to perfection.",
        price: "₦14,000",
        image: croakerImg
      },
      {
        name: "Premium Tilapia",
        description: "Freshly caught Tilapia with lemon butter sauce and local spices.",
        price: "₦12,000",
        image: tilapiaImg
      },
      {
        name: "Oven-Roasted Catfish",
        description: "Oven-roasted catfish served with a side of spicy pepper reduction.",
        price: "₦13,500",
        image: galleryFish1
      }
    ]
  },
  {
    category: "Specials & Accompaniments",
    items: [
      {
        name: "Catfish Pepper Soup",
        description: "Spicy traditional broth infused with local herbs and tender catfish chunks.",
        price: "₦8,500",
        image: peppersoupImg
      },
      {
        name: "Golden Fried Plantain",
        description: "Sweet, ripe plantains fried to a beautiful golden crisp.",
        price: "₦3,500",
        image: plantainImg
      },
      {
        name: "Fried Croaker Bites",
        description: "Crispy fried croaker chunks served with a fiery dipping sauce.",
        price: "₦5,000",
        image: croakerBitesImg
      }
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-brand-dark text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Culinary Delights
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Featured Menu</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </FadeIn>
        </div>

        <div className="space-y-24">
          {MENU_ITEMS.map((section, idx) => (
            <div key={idx}>
              <FadeIn>
                <h3 className="text-3xl font-serif text-brand-gold mb-12 border-b border-white/10 pb-4">
                  {section.category}
                </h3>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {section.items.map((item, itemIdx) => (
                  <FadeIn key={itemIdx} delay={itemIdx * 0.1}>
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden mb-6 aspect-[4/3] rounded-sm">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-serif">{item.name}</h4>
                        <span className="text-brand-gold font-medium">{item.price}</span>
                      </div>
                      <p className="text-white/60 font-light text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <FadeIn>
            <a href="#order" className="inline-block border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all px-8 py-4 rounded-full font-medium tracking-wide uppercase text-sm">
              Contact to Order
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
