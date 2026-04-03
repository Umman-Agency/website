import { ArrowRight } from 'lucide-react';
import { Button } from '../lib/ui/button';
import AnimatedCtaBackground from './AnimatedCtaBackground';

const CTA = () => {

  const handleCTAClick = () => {
    return '/contact';
  };

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <AnimatedCtaBackground />
      <div className="absolute inset-0 bg-black/40"></div> {/* Adjusted overlay opacity */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            ¿<i>Empezamos</i> para <span className="text-accent-clearBlue">mover tu marca</span>?
          </h2>
          <p
            className="text-xl text-white mb-12 max-w-2xl mx-auto"
          >
            Cuéntanos qué necesitas y te decimos por dónde empezar.
          </p>
          <div>
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-primary-palpable hover:bg-accent-clearBlue/90 text-black font-regular px-10 py-7 text-xl group"
            >
              Empezar ahora
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;