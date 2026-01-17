import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import AnimatedHeroBackground from './AnimatedHeroBackground';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      <AnimatedHeroBackground />
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block bg-accent-purple/20 text-accent-purple text-sm font-semibold px-4 py-2 rounded-full tracking-wide uppercase">
            Ecosistema Tringo
          </span>
        </motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          Haz que tu marca <br/> <i><b>siga creciendo</b></i>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-2xl text-gray-300 mb-10 mx-w-2xl mx-auto"
        >
          Ordenamos tu mensaje de forma automatizada y lo convertimos en estrategia y contenido que impacta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-accent-clearBlue hover:bg-accent-clearBlue/90 text-white text-lg font-regular py-7 px-10 shadow-lg shadow-accent-clearBlue/40 transition-all duration-300 hover:scale-105 group"
          >
            <Link to="/contact">
              ¿Empezamos?<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="flex -space-x-4">
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Avatar 1" src="https://images.unsplash.com/photo-1649767590910-367f54f3d0e3" />
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Avatar 2" src="https://images.unsplash.com/photo-1677696795873-ca21e7d76a51" />
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Avatar 3" src="https://images.unsplash.com/photo-1695654686808-8e90bd2c6923" />
          </div>
          <div className="h-10 w-px bg-gray-600 hidden sm:block"></div> {/* Separator */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" strokeWidth={0} className="h-5 w-5" />
              <Star fill="currentColor" strokeWidth={0} className="h-5 w-5" />
              <Star fill="currentColor" strokeWidth={0} className="h-5 w-5" />
              <Star fill="currentColor" strokeWidth={0} className="h-5 w-5" />
              <Star fill="currentColor" strokeWidth={0} className="h-5 w-5" />
            </div>
            <p className="text-gray-200 text-lg font-medium">
              Confían en nosotros más de <span className="font-bold text-white">100+ marcas</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;