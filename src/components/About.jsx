import React, { useState, useEffect } from "react";
import { Sectionwrapper } from "./hoc";
import { benefits } from "../assets/text";
import { styles } from "../styles";
import { whyDenurx, arrow } from "../assets/images";

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
      onClick={handleShowMore}
      className={`flex-1 rounded-tl-[12px] rounded-tr-[12px] sm:rounded-xln border-2 p-2 sm:p-4 lg:p-6 pl-0 min-w-[250px] border-[#cacaca] border-l-8 border-r-8 border-b-2 rounded-[10px] bg-[#dadada]  text-black  group animate-slide-in  ${
        !showMore ? "hover:scale-[1.1] transition" : ""
      } `}
    >
      <div className="flex justify-between items-center p-2 w-[100%] transition-all">
        <h3 className={`${styles.h4}  lg:whitespace-nowrap `}>{title}</h3>
        <img
          src={arrow}
          alt=""
          className="inline-block w-[30px] sm:w-[40px] lg:w-[40px] xl:w-[50px] cursor-pointer rounded-full hover:scale-[1.1] transition"
        />
      </div>
      {showMore === text ? (
        <div className="absolute z-10 flex flex-col items-center justify-center p-4 h-[100%] rounded-2xl inset-0 bg-black bg-opacity-80 animate-slide-in-up">
          <span
            className="font-semibold absolute top-0 right-0 z-20 w-5 h-5 sm:w-10 sm:h-10 p-1 sm:p-2 rounded-full m-1 cursor-pointer text-white text-center transition"
            onClick={handleClose}
          >
            X
          </span>
          <p
            className={`${styles.paragraph} text-sm md:text-base lg:text-base xl:text-base text-white p-2`}
          >
            {text}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const About = () => {
  const items = benefits.benefits;
  const cardPerDisp = 3;
  const totalPages = Math.ceil(items.length / cardPerDisp);

  const [currentIndex, setCurrentIndex] = useState(0);
  const trimmedContent = `${benefits.paragraph.slice(0, 400)}...`;
  const [readMore, setReadMore] = useState(false);
  const [showMore, setShowMore] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  const startIndex = currentIndex * cardPerDisp;
  const endIndex = Math.min(startIndex + cardPerDisp - 1, items.length - 1);
  const toDisplay = items.slice(startIndex, endIndex + 1);

  const updateDisplayItem = (index) => {
    setCurrentIndex(index);
    setAnimationKey((prevKey) => prevKey + 1); // Update the animation key to force re-render
  };

  return (
    <section
      className={`why  ${""} flex flex-col flex-wrap`}
    >
      {/* <div className="flex justify-center items-center flex-wrap md:flex-nowrap flex-1 py-8 gap-6 sm:gap-10"> */}
      <div className="block sm:hidden w-[100%] h-[100%] md:w-[auto] magicpattern bg-100 rounded-2xl sm:rounded-[50px]">
          <img
            src={whyDenurx}
            alt="Denurx logo"
            className="w-[100%] h-auto"
          />
        </div>
      <div
        className={`${styles.introTextContainer} flex flex-row items-center flex-wrap lg:flex-nowrap px-4 py-6 sm:py-10 sm:px-16 lg:px-20  xl:px-28 md:py-20 gap-6`}
      >
        <h2 className={`${styles.h3} w-[100%] whitespace-nowrap`}>
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
                ? "text-secondary_100 group-hover:underline"
                : "text-primary "
            } text-black underline inline-block text-xxs md:text-sm  cursor-pointer p-2 underline-offset-2 sm:underline-offset-4`}
          >
            {readMore ? "ReadLess" : "ReadMore"}
          </button>
        
        </article>
      </div>

      <div className=" flex justify-between items-center flex-wrap md:flex-nowrap gap-[5%]  md:pt-16">
        <div className="hidden sm:block w-[100%] h-[100%] md:w-[auto] magicpattern bg-100 rounded-2xl sm:rounded-[50px]">
          <img
            src={whyDenurx}
            alt="Denurx logo"
            className="w-[100%] h-auto"
          />
        </div>
        <div
          key={animationKey}
          className={`flex flex-col justify-between relative w-[100%] py-6 `}
        >
          <div className="flex flex-col flex-wrap gap-4  animate-slide-in">
            {toDisplay.map((benefit, index) => (
              <FeaturesCard
                key={index}
                index={index}
                {...benefit}
                showMore={showMore}
                setShowMore={setShowMore}
              />
            ))}
          </div>
          <div className="flex justify-center items-center gap-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => updateDisplayItem(index)}
                className={`${
                  currentIndex === index
                    ? " scale-[1.3] w-6"
                    : "hover:scale-[1.3]"
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

export default Sectionwrapper(About, "about");
