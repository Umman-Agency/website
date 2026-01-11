import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { plans } from '../data/plans';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { CreditCard, Lock, Check, Zap } from 'lucide-react';
import AnimatedCtaBackground from '../components/AnimatedCtaBackground';

const Checkout = () => {
  const { planName } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const planFromUrl = plans.find(p => p.name === decodeURIComponent(planName));
    if (planFromUrl) {
      setSelectedPlan(planFromUrl);
    } else {
       navigate('/');
    }
  }, [planName, navigate]);

  const handlePlanChange = (newPlanName) => {
    const newPlan = plans.find(p => p.name === newPlanName);
    if (newPlan) {
      setSelectedPlan(newPlan);
      navigate(`/checkout/${encodeURIComponent(newPlanName)}`, { replace: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Procesando Pago...',
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      variant: 'destructive'
    });
  };

  if (!selectedPlan) {
    return null; // or a loading spinner
  }

  return (
    <>
      <Helmet>
        <title>Checkout - {selectedPlan.name}</title>
        <meta name="description" content={`Completa tu suscripción para el ${selectedPlan.name}.`} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background text-white py-12 sm:py-20 px-4 relative overflow-hidden"
      >
        <AnimatedCtaBackground />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white uppercase">Finalizar <span className="text-accent-clearBlue">Compra</span></h1>
            <p className="text-lg text-gray-300 mt-4">Estás a solo un paso de potenciar tu proyecto.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Plan Summary */}
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl sticky top-24 shadow-2xl shadow-black/30">
                {selectedPlan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-clearBlue text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg shadow-accent-clearBlue/30">
                    <Zap size={14} />
                    Más Popular
                  </div>
                )}
                <h2 className="text-2xl font-bold">Resumen del Plan</h2>
                <div className="mt-6 border-t border-white/10 pt-6">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-xl font-semibold">{selectedPlan.name}</h3>
                    <div className="text-right">
                       <AnimatePresence mode="wait">
                          <motion.span
                            key={selectedPlan.price}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-3xl font-bold inline-block"
                          >
                            {selectedPlan.price}
                          </motion.span>
                        </AnimatePresence>
                       <span className="text-gray-400">{selectedPlan.pricePeriod}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label>Cambiar de plan</Label>
                    <Select value={selectedPlan.name} onValueChange={handlePlanChange}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecciona un plan" />
                      </SelectTrigger>
                      <SelectContent>
                        {plans.map(p => (
                          <SelectItem key={p.name} value={p.name}>{p.name} ({p.price})</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <ul className="space-y-3 mt-6 text-gray-300">
                    <AnimatePresence>
                    {selectedPlan.features.map((feature, i) => (
                      <motion.li 
                        key={`${selectedPlan.name}-${feature}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 + 0.3 } }}
                        className="flex items-center gap-3"
                      >
                        <Check className="text-green-400 h-5 w-5 shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                    </AnimatePresence>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Payment Form */}
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl shadow-black/30">
                <h2 className="text-3xl font-bold mb-6">Información de Pago</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                    <div className="relative mt-2">
                      <Input id="cardNumber" type="text" placeholder="**** **** **** ****" className="pl-12" />
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiración</Label>
                      <Input id="expiryDate" type="text" placeholder="MM / YY" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" type="text" placeholder="***" className="mt-2" />
                    </div>
                  </div>
                   <div>
                    <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                    <Input id="cardName" type="text" placeholder="John Doe" className="mt-2" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent-clearBlue hover:bg-accent-clearBlue/90 text-lg py-7 mt-4 font-bold shadow-lg shadow-accent-clearBlue/40 transition-all duration-300 hover:scale-105">
                     Suscribirse a {selectedPlan.name}
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
                  <Lock size={12} /> Pagos seguros y encriptados con SSL.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Checkout;