import React, { useState } from "react";
import { styles } from "../styles";
import { howItWorks } from "../assets/text";
import { tipIcon, doctor3, doctor5 } from "../assets/images";
import { Sectionwrapper } from "./hoc";

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
      className={`flex-1 flex flex-col justify-between items-center border-2 border-[#87898c] rounded-2xl w-[100%] min-w-[100px] xl:min-w-[150px] max-w-[auto] p-2 sm:p-2 lg:p-6 h-[auto] bg-[#eaecf0a7] text-left sm:hover:scale-[1.1] transition`}
    >
      <img src={icon} alt="" className="w-[50px] sm:w-[50px] h-[auto]" />
      <h4 className={`${styles.h4}`}>{step}</h4>
      {displayContent === description && (
        <div className="absolute flex sm:hidden flex-col items-center justify-center gap-2 p-4 h-[100%] rounded-2xl w-[100%] inset-0 bg-black bg-opacity-80 animate-slide-in-up text-left">
          <span
            className="font-semibold absolute top-0 right-0 z-20 w-5 h-5 sm:w-10 sm:h-10 p-1 sm:p-2 rounded-full m-1 cursor-pointer text-white text-center transition"
            onClick={handleMouseLeave}
          >
            X
          </span>
          <p className={`text-white ${styles.tip} text-left`}>{description}</p>
          <p className={`${styles.tip} text-secondary`}>{tip}</p>
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
      <div className="flex flex-col md:flex-row flex-wrap  items-center gap-10 md:pt-20">
        <div className="relative flex-1 flex justify-between flex-wrap gap-2 sm:gap-6 ">
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
        <div className="relative flex rounded-2xl sm:rounded-[50px] magicpattern2 w-[100%] md:w-[50%]">
          <img
            src={doctor3}
            alt=""
            className="hidden md:block  w-[100%] h-auto"
          />
          
          {displayDescription && (
            <div className="absolute hidden sm:flex flex-col justify-center gap-2 p-4 h-[100%] w-[100%] inset-0 rounded-2xl sm:rounded-[50px] bg-black bg-opacity-80 animate-slide-in-up text-left">
              <p className={`text-white ${styles.tip} text-left`}>
                {displayContent}
              </p>
              <p className={`${styles.tip} text-left text-secondary`}>
                {displayTipContent}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sectionwrapper(Steps, "quick start");
