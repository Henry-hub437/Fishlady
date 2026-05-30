import { FadeIn } from './animations';

export function Features() {
  const features = [
    {
      title: "Premium Quality",
      description: "We source only the freshest catch daily, ensuring unrivaled quality and taste in every single dish."
    },
    {
      title: "Prime Location",
      description: "Conveniently located in Lekki Phase 1, offering valet parking and a serene dining environment."
    },
    {
      title: "Master Chefs",
      description: "Our culinary team brings decades of combined experience in coastal and contemporary fine dining."
    }
  ];

  return (
    <section className="py-24 bg-brand-light border-y border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-brand-dark/10">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className={idx !== 0 ? "pt-12 md:pt-0" : ""}>
              <div className="md:px-8">
                <h3 className="text-2xl font-serif text-brand-dark mb-4">{feature.title}</h3>
                <p className="text-brand-dark/60 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
