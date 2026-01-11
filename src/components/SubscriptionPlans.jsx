import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedCtaBackground from './AnimatedCtaBackground';
import { plans } from '../data/plans';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const SubscriptionPlans = () => {
  const navigate = useNavigate();

  const handleSubscribeClick = (planName) => {
    navigate(`/checkout/${encodeURIComponent(planName)}`);
  };

  return (
    <section className="py-24 bg-[#0C0D0D] relative overflow-hidden">
      <AnimatedCtaBackground />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white uppercase">
            Elige tu <span className="text-accent-clearBlue">Plan</span>
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Planes de precios simples y transparentes para todas las necesidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`relative rounded-2xl p-8 flex flex-col bg-white/5 border border-white/10 backdrop-blur-lg transition-all duration-300 hover:border-accent-clearBlue/50 hover:shadow-2xl hover:shadow-accent-clearBlue/20 ${
                plan.isPopular ? 'border-accent-clearBlue/70' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-clearBlue text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg shadow-accent-clearBlue/30">
                  <Zap size={14} />
                  Más Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="text-gray-400 mt-2 h-12">{plan.description}</p>
              <div className="my-8">
                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                <span className="text-gray-400 font-medium">{plan.pricePeriod}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="text-green-400 h-5 w-5 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  onClick={() => handleSubscribeClick(plan.name)}
                  size="lg"
                  variant={plan.isPopular ? 'default' : 'secondary'}
                  className={`w-full text-lg font-semibold py-6 rounded-lg transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-accent-clearBlue text-white hover:bg-accent-clearBlue/90 shadow-lg shadow-accent-clearBlue/30'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Suscribirse
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;