import React, { useRef, useEffect, useState, useCallback } from "react";
import { styles } from "../styles";
import { howItWorks } from "../assets/text";
import { tipIcon, stepDoctor } from "../assets/images";

const StepsCard = ({ icon, step, description, tip, displayContent, displayDescription, setDisplayContent, setDisplayDescription, setDisplayTipContent }) => {

  // const [displayDescription, setDisplayDescription] = useState(false)
  const handleMouseEnter = useCallback(() => {
    setDisplayDescription(true);
    setDisplayContent(description);
    setDisplayTipContent(tip)
  }, [description, setDisplayContent, setDisplayDescription]);

  const handleMouseLeave = useCallback(() => {
    setDisplayDescription(false);
    setDisplayContent(null);
  }, [setDisplayContent, setDisplayDescription]);
  // console.log("displayContent:", displayContent)
  // console.log("displayDescription:", displayDescription)

  return (
    <div onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} className=" flex-1 flex flex-col justify-between items-center border-2 border-[#87898c] rounded-2xl w-[100%] min-w-[150px] max-w-[auto] sm-max-w-[auto] p-2 sm:p-6 h-[auto] bg-[EAECF0] text-left">
      <img src={icon} alt="" className=" w-[50px] sm:w-[50px] h-[auto]" />
      <h4 className={`${styles.h4}`}>{step}</h4>

     {displayContent ===description && (
        <div className="absolute flex sm:hidden flex-col items-center justify-center gap-2 p-4 h-[100%] rounded-2xl w-[100%]  inset-0 bg-black bg-opacity-80 animate-slide-in-up text-left">
           <span
            className="font-semibold  absolute top-0 right-0 z-20 w-5 h-5 sm:w-10 sm:h-10 p-1 sm:p-2 rounded-full m-1 cursor-pointer text-white text-center transition"
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
const HowItWorks = () => {
  const [displayDescription, setDisplayDescription] = useState(false)
  const [displayContent, setDisplayContent] = useState(null)
  const [displayTipContent, setDisplayTipContent] = useState(null)

  return (
    <section
      id="quick start"
      className={`${styles.container} relative steps flex justify-center flex-wrap  items-center gap-10 md:pt-20`}
    >
      <div className=" relative flex-1 flex justify-between flex-wrap gap-2 sm:gap-6 p-0 sm:p-2  md:p-8 md:pt-16">
        {howItWorks.map((step, index) => {
          return <StepsCard key={index} {...step} displayContent={displayContent} setDisplayContent={setDisplayContent} displayDescription={displayDescription} setDisplayDescription={setDisplayDescription} displayTipContent={displayTipContent} setDisplayTipContent={setDisplayTipContent} />;
        })}
      </div>
      <div className="sm:relative flex- flex rounded-2xl sm:rounded-[50px] bg-primary w-[100%] md:w-[50%] ">
        <img src={stepDoctor} alt="" className="mt-[-20px] sm:mt-[-30px] md:mt-[-50px] w-[100%] h-auto  " />
        
     {displayDescription && (
        <div className="absolute hidden sm:flex flex-col justify-center gap-2 p-4 h-[100%] w-[100%]  inset-0 rounded-2xl sm:rounded-[50px] bg-black bg-opacity-80 animate-slide-in-up text-left">
          <p className={`text-white ${styles.tip} text-left`}>{displayContent}</p>
          <p className={`${styles.tip} text-left text-secondary`}>{displayTipContent}</p>
        </div>
      )}
      </div>
    </section>
  );
};

export default HowItWorks;
