import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react'; // Changed import from ArrowRight, ArrowDownRight to Plus
import { Tag } from '../lib/ui/tag';

const services = [{
  title: 'Marketing Digital',
  description: 'Hacemos que tus campañas trabajen de verdad: más alcance, más clics y mejores resultados.'
}, {
  title: 'Gestion de Redes Sociales',
  description: 'Contenido que engancha y una comunidad bien cuidada para conectar de verdad (y no solo publicar).'
}, {
  title: 'Estrategia de Marca',
  description: 'Definimos tu posicionamiento y tu mensaje para que conectes con la gente correcta y se note la diferencia.'
}, {
  title: 'SEO/SEM',
  description: 'Te posicionamos en Google: optimización + campañas para atraer visitas que sí tienen intención.'
}, {
  title: 'Creación de Contenido',
  description: 'Historias que atrapan en video, foto y texto. Contenido con intención y con estilo.'
},
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleServiceClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filterTags = ['Marketing Digital', 'Redes Sociales', 'Estrategia de Marca', 'SEO/SEM', 'Creación de contenido'];

  return (
    <section id="services" className="py-12 md:py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          {/* <div className="border px-4 py-1.5 inline-block rounded-full text-(--white-75) text-0.8 text-sm mb-4">
            Servicios
          </div> */}
          <Tag value="Servicios"></Tag>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            <i><b>Potenciamos</b></i> tu marca
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mt-4">Lo que necesitas para que tu marca se vea mejor, funcione mejor y llegue a más gente.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {filterTags.map(tag => (
              <button key={tag} className="px-5 py-2 border border-gray-600 rounded-full text-gray-400 cursor-default">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800">
          {services.map((service, index) => (
            <div key={service.title} className="border-b border-gray-800">
              <div className="flex justify-between items-center cursor-pointer py-8 group" onClick={() => handleServiceClick(index)}>
                <div className="flex items-center gap-4">
                  <h3 className={`text-3xl  font-bold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                    {service.title}
                  </h3>
                  {activeIndex === index && (
                    <motion.div
                      className="w-4 h-4 bg-accent-clearBlue rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </div>
                
                <motion.div 
                  animate={{ rotate: activeIndex === index ? 45 : 0 }} // Rotate Plus for open state
                  transition={{ duration: 0.3 }}
                >
                  <Plus size={40} className={`${activeIndex === index ? 'text-white' : 'text-primary-palpable group-hover:text-gray-400'} transition-colors`} />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-16">
                      <p className="text-lg text-gray-400 max-w-2xl">{service.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;