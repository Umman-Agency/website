
import About from '@/components/About';
import Stats from '@/components/Stats';
import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';
import Services from '@/components/Services';
import SectionAnimator from '@/components/SectionAnimator';
import Header from "@/components/Header";
import Hero from '@/components/Hero';

export default function Welcome() {
  return (
    <>
      <Header />
      <Hero />
      <SectionAnimator><Services /></SectionAnimator>
      <About />
      <SectionAnimator><Portfolio /></SectionAnimator>
      <SectionAnimator><Stats /></SectionAnimator>
      <SectionAnimator><CTA /></SectionAnimator>
    </>
  );
}
