import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'LATAM', description: 'Logo de LATAM', imageUrl: 'https://horizons-cdn.hostinger.com/258a96df-c479-4700-b7e2-08531e163395/2b035e21fa8f1f5c4f27735b6b46e1fd.png' },
  { name: 'Microsoft', description: 'Logo de Microsoft', imageUrl: 'https://horizons-cdn.hostinger.com/258a96df-c479-4700-b7e2-08531e163395/ae772816c1c045c53c050fb3ab0073d5.png' },
  { name: 'photoAiD', description: 'Logo de photoAiD', imageUrl: 'https://horizons-cdn.hostinger.com/258a96df-c479-4700-b7e2-08531e163395/f7374f37f8443476e073d9c412bd8848.png' },
  { name: 'Starbucks', description: 'Logo de Starbucks', imageUrl: 'https://horizons-cdn.hostinger.com/258a96df-c479-4700-b7e2-08531e163395/4a2d0216857a34a4d762d5d1f716f308.png' },
  { name: 'Uber', description: 'Logo de Uber', imageUrl: 'https://horizons-cdn.hostinger.com/258a96df-c479-4700-b7e2-08531e163395/fe6656a357591f9b557a3cf8fab197a9.png' },
  { name: 'Discord', description: 'Logo de Discord', imageUrl: 'https://horizons-cdn.hostinger.com/258a96df-c479-4700-b7e2-08531e163395/169ddd06dd1e1da36512c1eccfe4c7ef.png' }
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
    <section className="py-20 bg-[#0C0D0D] border-t border-b border-[#1E1E2A] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-gray-400 mb-12 uppercase">Trusted by 150+ Companies Worldwide</p>
        <div className="relative w-full h-16 flex items-center">
          <motion.div className="flex" variants={marqueeVariants} animate="animate">
            {marqueeLogos.map((logo, index) => (
              <div key={index} className="shrink-0 w-48 mx-12 flex justify-center items-center">
                <img
                  className="h-10 w-auto object-contain"
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