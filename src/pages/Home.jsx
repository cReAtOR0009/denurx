import Hero from "../components/Hero";
import KeyFeatures from "../components/KeyFeatures";
import Steps from "../components/Steps";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import { services } from "../assets/text";
import MultiStepForm from "../components/form/MultistepForm";
import Blog from "../components/Blog";
import Registration from "../components/Registration";
import { ProviderRegistrationForm } from "../components/form/ProviderForm";
import { UserRegistrationForm } from "../components/form/UserRegistrationForm";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
      <div className="bg-heroGradient fullbg">
        <Hero />
      </div>
      <Registration />
      <KeyFeatures />
        {/* <MultiStepForm /> */}
      <Steps />
      <Testimonials />
      <About />
      {/* <Services services={services} /> */}
      {/* <Blog /> */}
     <Form />
      <Faq />
    </div>
  );
};

export default Home;
