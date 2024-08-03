import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import KeyFeatures from "../components/KeyFeatures";
import Steps from "../components/Steps";
import About from "../components/About";
import Faq from "../components/Faq";
import Registration from "../components/Registration";
import Form from "../components/Form";

import Services from "../components/Services";
import { services } from "../assets/text";
import Testimonials from "../components/Testimonials";
import MultiStepForm from "../components/form/MultistepForm";
import Blog from "../components/Blog";
import { ProviderRegistrationForm } from "../components/form/ProviderForm";
import { UserRegistrationForm } from "../components/form/UserRegistrationForm";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Denurx - Your Clinic In Your Hands</title>
        <meta
          name="description"
          content="Denurx - Your Clinic In Your Hands. Connect with doctors, book appointments, manage medications, and access home health services."
        />
      </Helmet>
      <Hero />
      <Registration />
      <KeyFeatures />
      {/* <MultiStepForm /> */}
      <Steps />
      {/* <Testimonials /> */}
      <About />
      {/* <Services services={services} /> */}
      {/* <Blog /> */}
      <Form />
      <Faq />
    </div>
  );
};

export default Home;
