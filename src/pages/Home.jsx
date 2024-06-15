import Hero from "../components/Hero";
import AboutApp from "../components/AboutApp";
import HowItWorks from "../components/Steps";
import Features from "../components/Features";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import { services } from "../assets/text";
import MultiStepForm from "../components/form/MultistepForm";
import Blog from "../components/Blog";
import Registration from "../components/Registration";

const Home = () => {
  return (
    <div>
      <div className="bg-heroGradient fullbg">
        <Hero />
      </div>
      <Registration />
      <AboutApp />
        {/* <MultiStepForm /> */}
      <HowItWorks />
      <Features />
      <Services services={services} />
      <Blog />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
