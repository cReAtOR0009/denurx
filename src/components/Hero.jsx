import { Link } from "react-router-dom";
import { HeroText } from "../assets/text";
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

  const updateDisplayItem = (index) => {
    setCurrentSlide(index);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateDisplayItem((prevSlide) => (prevSlide + 1) % HeroText.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    updateDisplayItem((currentSlide + 1) % HeroText.length);
  };

  const handlePrev = () => {
    updateDisplayItem((currentSlide - 1 + HeroText.length) % HeroText.length);
  };

  return (
    <section
      id="home"
      className={`${""}  bg-heroGradient bg-cover bg-no-repeat bg-center-center`}
    >
      <img
        src={nextArrow}
        alt="prev arrow"
        onClick={handlePrev}
        className="absolute animate-pulse top-1/2 left-0 rounded-[30px] border bg-primary border-primary p-2 rotate-180 text-white cursor-pointer"
      />
      <img
        src={nextArrow}
        alt="next arrow"
        onClick={handleNext}
        className="absolute animate-pulse top-1/2 right-0 rounded-[30px] border bg-primary border-primary p-2 text-white cursor-pointer"
      />
      <div key={animationKey} className="flex justify-between items-center flex-wrap px-4 py-6 pb-0 sm:px-10 md:py-10  lg:p-20 xl:p-20 sm:pb-0 xl:pb-2 lg:pb-2 md:pb-0 h-auto lg:h-[100vh] min-h-[100vh] animate-slide-in">

      <div className="flex flex-col justify-center flex-1 w-full xl:pb-0 lg:pb-10 md:pb-8">
        <h1
          className={`${styles.h1} py-4 md:py-2 lg:py-4 text-7xl sm:text-8xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mt-10 sm:mt-0`}
        >
          {HeroText[currentSlide].h1}
        </h1>
        <h2 className={`${styles.h2} text-white`}>
          {HeroText[currentSlide].tagLine}
        </h2>
        <p className={`${styles.paragraph} text-white`}>
          {HeroText[currentSlide].description}
        </p>
        <div className="flex gap-6 sm:gap-8 my-2">
          <HashLink to={`${baseUrl}/#start`}>
            <button className={`${styles.button_secondary}  hover:bg-[transparent] hover:border-white`}>
              Learn More
            </button>
          </HashLink>
          <button
            onClick={() => setShowJoinwaitlist(true)}
            className={`${styles.button_primary2} rounded-[15px] bg-primary px-4 py-2 sm:px-4 sm:py-0 text-xxs text-white sm:text-base font-medium uppercase leading-[0]  text-primary-700 animate-pulse hover:animate-pop-up-infinite focus:border-white transition duration-150 hover:bg-primary_100`}
          >
            Join Waitlist
          </button>
        </div>
      </div>
      <div className="flex-1 bg-heroMockup bg-full bg-no-repeat bg-center-center hidden md:flex lg:items-end w-full h-full mt-2">
        <img
          src={HeroText[currentSlide].image}
          alt="Telemedicine App"
          className="max-h-[90vh]"
        />
      </div>
      </div>
    

    </section>
  );
};

export default Hero;
