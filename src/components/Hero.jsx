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
  const slides = [
    {
      h1: HeroText.h1,
      tagLine: HeroText.tagLine,
      image: HeroText.image,
    },
    {
      h1: HeroText.h1,
      tagLine: "Access quality healthcare anywhere, anytime",
      image: doctor4,
    },
  ];

  const updateDisplayItem = (index) => {
    setCurrentSlide(index);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateDisplayItem((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    updateDisplayItem((currentSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    updateDisplayItem((currentSlide - 1 + slides.length) % slides.length);
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
        className="absolute top-1/2 left-0 rounded-[30px]  p-2 text-white"
      />
      <img
      src={nextArrow}
        alt="next arrow"
        onClick={handleNext}
        className="absolute top-1/2 right-0 rounded-[30px]  p-2 text-white"
      />
        
      <div className="flex flex-col justify-center flex-1 w-[50%]">
        <h1
          className={`${styles.h1} py-4 md:py-2 lg:py-6 text-7xl sm:text-8xl md:text-8xl lg:text-6xl xl:text-8xl font-bold leading-tight text-white mt-20`}
        >
          {slides[currentSlide].h1}
        </h1>
        {/* <h2 className="capitalize text-base sm:text-base md:text-lg lg:text-[20px] xl:text-xl leading-relaxed text-white">
          Access quality healthcare anywhere, anytime
        </h2> */}
        <p className="capitalize text-base sm:text-base md:text-lg lg:text-[20px] xl:text-xl leading-relaxed text-white">
          {slides[currentSlide].tagLine}
        </p>
        <div className="flex gap-6 sm:gap-8 sm:py-4 md:py-4 my-4">
          <HashLink to={`${baseUrl}/#start`}>
            <button className="rounded-[30px] bg-primary px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] hover:bg-[transparent] hover:border-white focus:border-white transition duration-150">
              Learn More
            </button>
          </HashLink>
          <button
            onClick={() => setShowJoinwaitlist(true)}
            className="rounded-[30px] animate-pulse bg-primaryBtn outline-none px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] hover:animate-pop-up-infinite focus:border-white transition duration-150"
          >
            Join Waitlist
          </button>
        </div>
      </div>

      <div className=" flex-1 bg-heroMockup fullbg hidden lg:flex lg:items-end w-full md:w-full h-[100%] mt-2">
        <img
          src={slides[currentSlide].image}
          alt="Telemedicine App"
          className=""
        />
      </div>
    </section>
  );
};

export default Hero;
// export default SectionWrapper(Hero, "home");
