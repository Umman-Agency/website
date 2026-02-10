// import React from 'react';
// import { Tag } from '../components/ui/tag';
import { motion } from 'framer-motion';

const About = () => {
  return <section id="about" className="py-24 bg-[#0C0D0D] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <div className="rounded-2xl overflow-hidden aspect-4/3">
              <img className="w-full h-full object-cover" alt="Modern office with creative team working on computers" src="https://horizons-cdn.hostinger.com/258a96df-c479-4700-b7e2-08531e163395/charlesdeluvio-lks7vei-eag-unsplash-7Or6F.jpg" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <h2 className="text-3xl pb-6 md:text-4xl lg:text-5xl border-b border-white/10 font-bold mb-6 leading-tight text-white ">
              Nos mueve la <br></br><i><b>excelencia digital</b></i>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Calidad primero</h3>
                <p className="text-lg text-white">Cuidamos cada detalle para que el resultado se note desde el primer clic.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Impacto que se mide</h3>
                <p className="text-lg text-white">Probamos, ajustamos y optimizamos para que tus objetivos se vean en números, no en promesas.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="lg:order-last">
            <div className="rounded-2xl overflow-hidden aspect-4/3">
              <img className="w-full h-full object-cover" alt="Diverse team collaborating around a table with laptops and notes" src="https://horizons-cdn.hostinger.com/258a96df-c479-4700-b7e2-08531e163395/michael-t-rxri-ho62y4-unsplash-2-tvxRc.jpg" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <h2 className="text-3xl pb-6 border-b border-white/10 md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white ">
              Tu idea, nuestro <i><b>propósito</b></i>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Estrategia y descubrimiento</h3>
                <p className="text-lg text-white">Nos metemos a fondo en tu marca, tu gente y tus objetivos para armar un plan claro y realista.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Ejecución creativa</h3>
                <p className="text-lg text-white">Convertimos la estrategia en piezas y acciones. Trabajamos contigo, afinamos y dejamos todo listo para salir.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;