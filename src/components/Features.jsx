import React, { useState, useEffect } from "react";
import { benefits } from "../assets/text";
import { styles } from "../styles";
import { whyDenurx, arrow, } from "../assets/images";

const FeaturesCard = ({ icon, text, title, index, showMore, setShowMore }) => {

  const handleShowMore = () => {
    setShowMore(text);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShowMore(null);
  };
  return (
    <div 
      
      className="flex-1 rounded-tl-[12px] rounded-tr-[12px] sm:rounded-xl border-2 p-2 sm:p-4 md:p-6 pl-0 border-[#cacaca] border-l-8 border-r-8 border-b-2 rounded-[10px] bg-[#dadada]  text-black  group animate-slide-in"
    >
      <div className="flex justify-between items-center p-2 w-[100%] transition-all">
        <h3 className={`${styles.h4} lg:whitespace-nowrap `}>
          {title}
        </h3>
        <img onClick={handleShowMore}  src={arrow} alt="" className="inline-block w-[30px] sm:w-[40px] lg:w-[40px] xl:w-[50px] cursor-pointer rounded-full hover:scale-[1.1] transition" />
      </div>
      {showMore === text ? (
        <div className="absolute z-10 flex flex-col items-center justify-center p-4 h-[100%] rounded-2xl inset-0 bg-black bg-opacity-80 animate-slide-in-up">
       
          <span
            className="font-semibold absolute top-0 right-0 z-20 w-5 h-5 sm:w-10 sm:h-10 p-1 sm:p-2 rounded-full m-1 cursor-pointer text-white text-center transition"
            onClick={handleClose}
          >
            X
          </span>
          <p className={`${styles.paragraph} text-sm md:text-base lg:text-base xl:text-base text-white p-2`}>
            {text}
          </p>
        </div>
      ) : ""}
    </div>
  );
};

const Features = () => {
  const items = benefits.benefits;
  const cardPerDisp = 3;
  const totalPages = Math.ceil(items.length / cardPerDisp);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const trimmedContent = `${benefits.paragraph.slice(0, 400)}...`;
  const [readMore, setReadMore] = useState(false);
  const [showMore, setShowMore] = useState(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (!isHovered && !isMobile) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
      }, 50000); // Change every 5 seconds
    }
    return () => clearInterval(interval); // Cleanup on component unmount or hover
  }, [isHovered, isMobile, totalPages]);

  const startIndex = currentIndex * cardPerDisp;
  const endIndex = Math.min(startIndex + cardPerDisp - 1, items.length - 1);
  const toDisplay = items.slice(startIndex, endIndex + 1);

  const updateDisplayItem = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="features"
      className={`why relative ${styles.container} flex flex-col flex-wrap`}
      onClick={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <div className="flex justify-center items-center flex-wrap md:flex-nowrap flex-1 py-8 gap-6 sm:gap-10"> */}
      <div
        className={`${styles.introTextContainer} flex flex-row items-center flex-wrap lg:flex-nowrap px-4 py-6 sm:py-10 sm:px-20 md:px-28 md:py-20 gap-6`}
      >
        <h2 className={`${styles.h3} w-[100%]`}>
          {benefits.title}
        </h2>
        <article
          className={`${styles.paragraph} text-sm md:text-lg lg:text-base xl:text-lg text-black`}
        >
          {readMore ? benefits.paragraph : trimmedContent}{" "}
          <button
            onClick={() => setReadMore(!readMore)}
            className={`${
              readMore
                ? "bg-secondary_100 group-hover:bg-primary"
                : "bg-primary "
            } text-white inline-block text-xxs md:text-sm rounded-full cursor-pointer p-2`}
          >
            {readMore ? "ReadLess" : "ReadMore"}
          </button>
        </article>
      </div>
     
      <div className=" flex justify-between items-center flex-wrap md:flex-nowrap gap-[10%]  md:pt-16">
        <div className="w-[100%] h-[100%] md:w-[auto] bg-primary rounded-2xl sm:rounded-[50px]">
         <img src={whyDenurx} alt="Denurx logo" className="w-[100%] h-auto mt-[-20px] sm:mt-[-20%] "/>
        </div>
        <div className="flex flex-col justify-between relative w-[100%] py-6 ">
          <div className="flex flex-col flex-wrap gap-4  animate-[slide-in-right_0.5s_ease-in-out]">
            {toDisplay.map((benefit, index) => (
              <FeaturesCard key={index} index={index} {...benefit} showMore={showMore} setShowMore={setShowMore} />
            ))}
          </div>
          <div className="flex justify-center items-center gap-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => updateDisplayItem(index)}
                className={`${
                  currentIndex === index ? " scale-[1.3] w-6" : "hover:scale-[1.3]"
                } bg-primary p-1 my-6 w-4 h-2 rounded-full animate-slide-in`}
              >
                {/* {index + 1} */}
              </button>
            ))}
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Features;
