import Hero from '../../../lib/components/Hero';
import Services from '../../../lib/components/Services';
import About from '../../../lib/components/About';
import Portfolio from '../../../lib/components/Portfolio';
import Stats from '../../../lib/components/Stats';
import CTA from '../../../lib/components/CTA';
import SectionAnimator from '../../../lib/components/SectionAnimator';
import Header from "../../../lib/components/Header";

const Page = () => {
  return (
    <>
      <Header />
      <Hero /> {/* Done */}
      <SectionAnimator><Services /></SectionAnimator> {/* Done */}
      <About />
      <SectionAnimator><Portfolio /></SectionAnimator>
      <SectionAnimator><Stats /></SectionAnimator>
      <SectionAnimator><CTA /></SectionAnimator>
    </>
  );
};

export default Page;