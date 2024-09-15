import React, { useState } from "react";
import { Sectionwrapper } from "./hoc";
import { styles } from "../styles";
import { howItWorks } from "../assets/text";
import { doctor5, tipIcon } from "../assets/images";

const StepsCard = ({
  icon,
  step,
  description,
  tip,
  displayContent,
  setDisplayContent,
  displayDescription,
  setDisplayDescription,
  setDisplayTipContent
}) => {
  const handleMouseEnter = () => {
    setDisplayDescription(true);
    setDisplayContent(description);
    setDisplayTipContent(tip);
  };

  const handleMouseLeave = () => {
    setDisplayDescription(false);
    setDisplayContent(null);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={` flex-1 flex flex-col gap-2 justify-between items-center border-2 border-grey_500  rounded-2xl p-2 sm:p-2 lg:p-4 h-[auto] min-w-[150px bg-grey_300 dark:bg-dark-background3 text-left cursor-pointer sm:hover:scale-[1.1] transition `}
      >
     
      <img src={icon} alt={`${step} icon`} className="w-[40px] lg:w-[50px] h-[auto]" />
      <h4 className={`"${styles.h4}" text-base md:text-lg lg:text-sm xl:text-xl font-medium dark:text-dark-text leading-[0]`}>{step}</h4>
      {displayContent === description && (
        <div className="absolute flex sm:hidden flex-col items-center justify-center gap-2 p-4 h-[100%] rounded-2xl w-[100%] inset-0 bg-black bg-opacity-90 animate-slide-in-up text-left">
          <span
            className="font-semibold absolute top-0 right-0 z-20 w-5 h-5 sm:w-10 sm:h-10 p-1 sm:p-2 rounded-full m-1 cursor-pointer text-white text-center transition"
            onClick={handleMouseLeave}
          >
            X
          </span>
          <p className={`text-white ${styles.tip} text-left`}>{description}</p>
          <p className={`${styles.tip} text-primary`}> <span><img src={tipIcon} alt="glowing knowledge bulb icon"  className="w-6"/></span>{tip}</p>
        </div>
      )}
    </div>
  );
};

const Steps = () => {
  const [displayDescription, setDisplayDescription] = useState(false);
  const [displayContent, setDisplayContent] = useState(null);
  const [displayTipContent, setDisplayTipContent] = useState(null);

  return (
    <section className={`${""} steps`}>
      <div className="flex flex-wrap flex-col lg:flex-row md:flex-nowrap items-center gap-4 py-4 sm:py-10 " title={"hover on each steps to get additional information for each steps card"}>
        <div className=" relative flex-1 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-[100%] lg:w-[50%] gap-2 sm:gap-6 p-0 sm:p-2 mt-4 sm:mt-0 ">
          {howItWorks.map((step, index) => (
            <StepsCard
              key={index}
              {...step}
              displayContent={displayContent}
              setDisplayContent={setDisplayContent}
              displayDescription={displayDescription}
              setDisplayDescription={setDisplayDescription}
              setDisplayTipContent={setDisplayTipContent}
            />
          ))}
        </div>
        <div className="order- sm:order-[-1] lg:order-2 hidden sm:block relative flex- rounded-2xl lg:rounded-[50px] magicpattern2 bg-100 w-[100%] lg:w-[50%]">
          <img
            src={doctor5}
            alt="Doctor Engaging Patients from Phone leveraging Denurx app to Mange and connect with patients Virtually"
            className="w-[100%] h-[400px]"
          />
          
          {displayDescription && (
            <div className="absolute hidden sm:flex flex-col justify-center gap-2 p-4 h-[100%] w-[100%] inset-0 rounded-2xl lg:rounded-[50px] bg-black bg-opacity-90 animate-slide-in-up text-left">
              <p className={`text-white ${styles.paragraph} text-left`}>
                {displayContent}
              </p>
              <p className={`${styles.tip} flex  items-center gap-2 text-left text-primary `}>
              <span><img src={tipIcon} alt="glowing knowledge bulb icon"  className="w-6"/></span>  {displayTipContent}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sectionwrapper(Steps, "quick start");
