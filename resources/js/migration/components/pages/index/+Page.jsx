import Hero from './Hero';
import Services from './Services';
import About from './About';
import Portfolio from './Portfolio';
import Stats from './Stats';
import CTA from './CTA';
import SectionAnimator from './SectionAnimator';
import Header from "./Header";

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