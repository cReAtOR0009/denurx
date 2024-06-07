import Hero from "../components/Hero";
import AboutApp from "../components/AboutApp";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import { services } from "../assets/text";
import MultiStepForm from "../components/form/MultistepForm";

const Home = () => {
  return (
    <div>
      <div className="bg-heroGradient fullbg">
        <Hero />
      </div>
      <AboutApp />
        <MultiStepForm />
      <HowItWorks />
      <Features />
      <Services services={services} />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
