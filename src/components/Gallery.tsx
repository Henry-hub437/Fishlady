import { FadeIn } from './animations';
import galleryImg1 from '../assets/images/gallery_fish_1_1780145504614.png';
import galleryImg2 from '../assets/images/gallery_fish_2_1780145522207.png';
import galleryImg3 from '../assets/images/grilled_croaker_1780145374860.png';
import galleryImg4 from '../assets/images/catfish_peppersoup_1780145409329.png';
import galleryImg5 from '../assets/images/fried_tilapia_1780145393339.png';

export function Gallery() {
  const images = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5
  ];

  return (
    <section id="gallery" className="bg-brand-dark overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
        {images.map((img, idx) => (
          <FadeIn 
            key={idx} 
            delay={idx * 0.1}
            className={`group relative overflow-hidden aspect-square ${idx === 0 ? 'col-span-2 row-span-2 aspect-auto' : ''} ${idx === 4 ? 'hidden lg:block' : ''}`}
          >
            <img 
              src={img} 
              alt={`Gallery image ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
