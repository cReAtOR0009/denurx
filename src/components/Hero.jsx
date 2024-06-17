import { Link } from "react-router-dom";
import { HeroText } from "../assets/text";
import { doctor4 } from "../assets/images";
import { nextArrow } from "../assets/images";
import { WaitlistContext } from "../context/waitlistContext";
import { styles } from "../styles";
import { HashLink } from "react-router-hash-link";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../config";

const Hero = () => {
  const { showJoinwaitlist, setShowJoinwaitlist } = useContext(WaitlistContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  // Array of slide content


  const updateDisplayItem = (index) => {
    setCurrentSlide(index);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateDisplayItem((prevSlide) => (prevSlide + 1) % HeroText.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    updateDisplayItem((currentSlide + 1) % HeroText.length);
  };

  const handlePrev = () => {
    updateDisplayItem((currentSlide - 1 + HeroText.length) % HeroText.length);
  };

  return (
    <section
      key={animationKey}
      id="home"
      className={`${styles.headerContainer} flex justify-between items-center md:items-center flex-wrap h-[auto] lg:h-[100vh] min-h-[100vh] bg-heroGradient  bg-cover  bg-no-repeat bg-center-center sm:bg-full animate-slide-in`}
    >
      <img
        src={nextArrow}
        alt="prev arrow"
        onClick={handlePrev}
        className="absolute animate-pulse top-1/2 left-0 rounded-[30px] border bg-primary border-primary  p-2 rotate-180 text-white"
      />
      <img
      src={nextArrow}
        alt="next arrow"
        onClick={handleNext}
        className="absolute animate-pulse top-1/2 right-0 rounded-[30px] border bg-primary border-primary  p-2 text-white"
      />
        
      <div className="flex flex-col justify-center flex-1 w-[50%] xl:pb-20 lg:pb-10 md:pb-8 ">
        <h1
          className={`${styles.h1}  text-white mt-10 sm:mt-0`}
        >
          {HeroText[currentSlide].h1}
        </h1>
        <h2 className={` ${styles.h2} text-white`}>
        {HeroText[currentSlide].tagLine}
        </h2>
        <p className={`${styles.paragraph} text-white`}>
          {HeroText[currentSlide].description}
        </p>
        <div className="flex gap-6 sm:gap-8 sm:py-4 md:py-4 my-4">
          <HashLink to={`${baseUrl}/#start`}>
            <button className={`${styles.button_secondary} hover:bg-[transparent] hover:border-white`}>
              Learn More
            </button>
          </HashLink>
          <button
            onClick={() => setShowJoinwaitlist(true)}
            className={`${styles.button_primary2} hover:bg-primary_100`}
          >
            Join Waitlist
          </button>
        </div>
      </div>

      <div className=" flex-1  bg-heroMockup bg-full  bg-no-repeat bg-center-center  hidden md:flex lg:items-end w-full md:w-full h-[100%] mt-2">
        <img
          src={HeroText[currentSlide].image}
          alt="Telemedicine App"
          className="max-h-[90vh] "
        />
      </div>
    </section>
  );
};

export default Hero;
// export default SectionWrapper(Hero, "home");
