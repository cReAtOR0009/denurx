import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutApp from "./components/AboutApp";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
// import Form from './components/JoinWaitlist'
import JoinWaitlist from "./components/form/JoinWaitlist";

function App() {
  
  return (
    <>
      <div className="bg-heroGradient fullbg">
        <Nav />
        <Hero />
      </div>
      <JoinWaitlist />
      {/* <div className='bg-primary_200'> */}
      <AboutApp />
      <HowItWorks />
      {/* </div> */}
      <Features />
      <Services />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
