import React from 'react';
import Testimonials from '../components/Testimonials';
import SubscriptionPlans from '../components/SubscriptionPlans';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import TrustedClients from '../components/TrustedClients';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import SectionAnimator from '../components/SectionAnimator';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Creative Agency - Transform Your Brand</title>
        <title>Agencia Creativa- Transforma tu marca</title>
        <meta name="description" content="Award-winning marketing agency specializing in digital marketing, brand strategy, and creative solutions that drive results." />
      </Helmet>
      <Hero />
      <SectionAnimator><TrustedClients /></SectionAnimator>
      <SectionAnimator><Services /></SectionAnimator>
      {/* <SubscriptionPlans /> */}
      <About />
      <SectionAnimator><Portfolio /></SectionAnimator>
      {/* <SectionAnimator><Testimonials /></SectionAnimator> */}
      <SectionAnimator><Stats /></SectionAnimator>
      <SectionAnimator><CTA /></SectionAnimator>
    </>
  );
};

export default Home;