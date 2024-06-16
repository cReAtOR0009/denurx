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
  }, [HeroText.length]);

  const handleNext = () => {
    updateDisplayItem((currentSlide + 1) % HeroText.length);
  };

  const handlePrev = () => {
    updateDisplayItem((currentSlide - 1 + HeroText.length) % HeroText.length);
  };

  return (
    <section
      key={animationKey}
      className={`${styles.headerContainer} relative  flex justify-between items-center md:items-center flex-wrap h-[auto] md:h-[auto] lg:h-[auto] animate-slide-in`}
    >
      <img
        src={nextArrow}
        alt="prev arrow"
        onClick={handlePrev}
        className="absolute top-1/2 left-0 rounded-[30px]  p-2 rotate-180 text-white"
      />
      <img
      src={nextArrow}
        alt="next arrow"
        onClick={handleNext}
        className="absolute top-1/2 right-0 rounded-[30px]  p-2 text-white"
      />
        
      <div className="flex flex-col justify-center flex-1 w-[50%]">
        <h1
          className={`${styles.h1} py-4 md:py-2 lg:py-6 text-7xl sm:text-8xl md:text-6xl lg:text-6xl xl:text-8xl font-bold leading-tight  text-white mt-20`}
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
            <button className="rounded-[30px] bg-secondary_100 opacity-90 px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] hover:bg-[transparent] hover:border-white focus:border-white transition duration-150">
              Learn More
            </button>
          </HashLink>
          <button
            onClick={() => setShowJoinwaitlist(true)}
            className="rounded-[30px] animate-pulse bg-primary outline-none px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] hover:animate-pop-up-infinite focus:border-white transition duration-150"
          >
            Join Waitlist
          </button>
        </div>
      </div>

      <div className=" flex-1  bg-heroMockup fullbg hidden md:flex lg:items-end w-full md:w-full h-[100%] mt-2">
        <img
          src={HeroText[currentSlide].image}
          alt="Telemedicine App"
          className="h-[full] max-h-[90vh] min-h-] "
        />
      </div>
    </section>
  );
};

export default Hero;
// export default SectionWrapper(Hero, "home");
