import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'LATAM', description: 'Logo de LATAM', imageUrl: 'https://www.umman.es/assets' },
  { name: 'Microsoft', description: 'Logo de Microsoft', imageUrl: 'https://www.umman.es/assets' },
  { name: 'photoAiD', description: 'Logo de photoAiD', imageUrl: 'https://www.umman.es/assets' },
  { name: 'Starbucks', description: 'Logo de Starbucks', imageUrl: 'https://www.umman.es/assets' },
  { name: 'Uber', description: 'Logo de Uber', imageUrl: 'https://www.umman.es/assets' },
  { name: 'Discord', description: 'Logo de Discord', imageUrl: 'https://www.umman.es/assets' }
];

const marqueeLogos = [...clientLogos, ...clientLogos]; // Duplicate for seamless loop

const TrustedClients = () => {
  // Calculate total width of all logos for the animation.
  // Each logo div has a width of w-48 (192px) and mx-12 (24px left + 24px right = 48px).
  // So, total width per logo item is 192px + 48px = 240px.
  // For 'clientLogos.length' items, the total width to scroll is clientLogos.length * 240px.
  const totalLogoWidth = clientLogos.length * (192 + 48); // 192px (w-48) + 48px (mx-12)

  const marqueeVariants = {
    animate: {
      x: [0, -totalLogoWidth], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40, // Adjust duration based on number of logos
          ease: 'linear'
        }
      }
    }
  };

  return (
    <section className="w-full py-9 md:py-18 bg-transparent overflow-hidden border-y-1 border-solid border-light-border-line z-15">
      <div className="container mx-auto px-6 text-center">
        {/* <p className="text-lg text-white-400 mb-12 uppercase">Trusted by 150+ Companies Worldwide</p> */}
        <div className="relative w-full h-7 flex items-center">
          <motion.div className="flex" variants={marqueeVariants} animate="animate">
            {marqueeLogos.map((logo, index) => (
              <div key={index} className="shrink-0 w-48 mx-12 flex justify-center items-center">
                <img
                  className="h-6 w-auto object-contain"
                  alt={logo.name + ' logo'}
                  src={logo.imageUrl}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;