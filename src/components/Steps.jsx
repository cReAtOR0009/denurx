import React, { useState } from "react";
import { Sectionwrapper } from "./hoc";
import { styles } from "../styles";
import { howItWorks } from "../assets/text";
import { doctor5, tipIcon } from "../assets/images";

// Card for each step
const StepsCard = ({
  icon,
  step,
  description,
  tip,
  isActive,
  onClick,
}) => {

  return (
    <div
      onClick={onClick}
      className={`${
        isActive ? "bg-[#0048ff20] dark:bg-[#161616cb]" : "bg-grey_300 dark:bg-[#0048ff20]"
      } flex-1 flex flex-col gap-2 justify-between items-center border-2 border-grey_500 rounded-2xl p-4 h-auto min-w-[150px] text-left cursor-pointer sm:hover:scale-110 transition`}
    >
      <img src={icon} alt={`${step} icon`} className="w-[50px] h-auto" />
      <h4 className={`text-lg lg:text-sm xl:text-xl font-medium dark:text-dark-text`}>
        {step}
      </h4>
      {isActive && (
        <div className="absolute flex sm:hidden flex-col items-center justify-center gap-2 p-4 h-[100%] rounded-2xl w-[100%] inset-0 bg-black dark:bg-[#161616cb] bg-opacity-90 animate-slide-in-up">
          <span
            className="font-semibold text-3xl absolute top-0 right-0 z-20 w-5 h-5 p-1 rounded-full m-1 cursor-pointer text-white text-center hover:text-primary_100 "
            onClick={() => onClick(null)}
          >
            X
          </span>
          <p className={`text-white ${styles.tip}`}>{description}</p>
          <p className={`${styles.tip} text-primary flex items-center gap-2`}>
            <img src={tipIcon} alt="tip icon" className="w-6" />
            {tip}
          </p>
        </div>
      )}
    </div>
  );
};

// Main steps component
const Steps = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  const handleStepClick = (description) => {
    if (activeStep === description) {
      setActiveStep(null); // Toggle off
    } else {
      setActiveStep(description); // Toggle on
      setAnimationKey((prevKey) => prevKey + 1); // Force re-render for animation
    }
  };

  return (
    <section className="steps">
      <div className="flex flex-wrap flex-col lg:flex-row md:flex-nowrap items-center gap-4 py-10">
        <div className="relative flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2 w-full lg:w-1/2">
          {howItWorks.map((step, index) => (
            <StepsCard
              key={index}
              icon={step.icon}
              step={step.step}
              description={step.description}
              tip={step.tip}
              isActive={activeStep === step.description}
              onClick={() => handleStepClick(step.description)}
            />
          ))}
        </div>

        {/* Right Side Image and Info */}
        <div className="hidden sm:block relative  rounded-2xl lg:rounded-[50px] magicpattern2 w-full lg:w-1/2">
          <img
            src={doctor5}
            alt="Doctor Engaging Patients"
            className="w-full h-auto rounded-2xl"
          />

          {activeStep && (
            <div
              key={animationKey}
              className="absolute flex flex-col justify-center items-center gap-2 p-4 h-full w-full inset-0 rounded-2xl lg:rounded-[50px] bg-black dark:bg-[#161616cb] bg-opacity-90 animate-slide-in-up"
            >
              <span
                className="font-bold text-4xl absolute top-0 right-8 w-8 h-8 p-1 rounded-full cursor-pointer text-secondary_100 hover:text-primary_100 text-center"
                onClick={() => setActiveStep(null)}
              >
                X
              </span>
              <div className="relative ">
                <p className={`text-white ${styles.paragraph}`}>
                  {howItWorks.find((step) => step.description === activeStep)?.description}
                </p>
                <p className={`${styles.tip} flex items-center gap-2 text-primary`}>
                  <img src={tipIcon} alt="Tip icon" className="w-6" />
                  {howItWorks.find((step) => step.description === activeStep)?.tip}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sectionwrapper(Steps, "quick start");
