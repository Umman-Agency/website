import About from '@/components/About';
import CTA from '@/components/CTA';
import Header from "@/components/Header";
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import SectionAnimator from '@/components/SectionAnimator';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import BasicLayout from "@/layout/basic";

function Welcome() {
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

Welcome.layout = page => <BasicLayout children={page} />;

export default Welcome;
