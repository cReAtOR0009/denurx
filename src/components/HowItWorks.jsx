import React, {useRef, useEffect, useState, useCallback } from "react";
import { styles } from "../styles";
import { howItWorks } from "../assets/text";
import { tipIcon } from "../assets/images";

const CircularContainer = ({ active, setActive }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const radius =
    width <= 640 ? 120 : width <= 768 ? 130 : width <= 1024 ? 150 : 230; // radius for the circular path
  const childrenCount = 5; // number of child elements
  const angleStep = 270 / (childrenCount - 1); // angle between each child, leaving a gap
  // const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8C33"]; // colors array
  const totalSteps = howItWorks.length;
  const progressWidth = ((active - 1) / (totalSteps - 1)) * 100;

  return (
    <div className=""> 
      <div className="hidden lg:flex relative w-[250px] animate-spi h-[250px] lg:w-[500px] lg:h-[500px] md:w-[300px]  rounded-full bg-footerBg"> {/*md:h-[300px]*/}
        {howItWorks.map((step, index) => {
          const angle = angleStep * index - 45; // Start from -45 degrees to leave a space at the bottom
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          // const backgroundColor = colors[index % colors.length];

          return (
            <div
              key={index}
              onClick={() => setActive(step.step)}
              className={`${
                active == step.step  
                ? "bg-[#61606059] text-black"
                : "bg-[rgba(195,193,193,0.85)] "
              } absolute flex flex-col justify-center items-center  w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] bg-blue-500 rounded-full text-black text-center cursor-pointer`}
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
                // backgroundColor: backgroundColor,
              }}
            >
              <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold leading-snug text-center">
                <span>Step</span> {index + 1}
              </h4>
              <p>{step.step}</p>
            </div>
          );
        })}
      </div>
      <div
        className={`flex lg:hidden justify-between items-center `}
        style={{ width: `${progressWidth}%` }}
      >
        {howItWorks.map((step, index) => {
          return (
            <button
              key={index}
              onClick={() => setActive(step.step)}
              className={`${
                active == step.step
                  ? " bg-[#616060] text-black"
                  : "bg-[#61606059] text-black"
              } relative flex flex-col justify-center items-center  w-[50px] h-[50px] rounded-full cursor-pointer`}
            >
              <img
                src={step.icon}
                alt="step icon"
                className={`${
                  active === step.step ? "flex" : "hidden"
                } absolute top-[-50px]`}
              />
              <span className="flex flex-col justify-center items-center text-sm text-center">
                {index + 1}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Steps = ({ description, tip, mockup, step, active, setHovered, hovered }) => {
  return (
    <div
      key={step}
      className={`${
        active === step ? "flex" : "hidden"
      } flex-col sm:flex-row bg-stepBlob fullbgAuto justify-center items-center cursor-pointer animate-[slide-in-right_0.5s_ease-in-out]`}
      onClick={() => setHovered(!hovered)}
    >
      <img
        src={mockup}
        alt="Denurx App"
        className="flex- object-cover h-[200px]  sm:h-[400px] sm:w-[auto] md:h-[530px] md:w-[auto] lg-h-[500px] lg:w-[] "
      />
      <div className=" flex flex-col justify-center flex-1 p-4 rounded bg-primary_200 min-h-[250px]">
        <h4
          className={`text-base md:text-2xl lg:text-xl xl:text-xl font-medium  text-secondary2 leading-normal`}
        >
          {step}
        </h4>
        <p
          className={`${""} text-sm md:text-lg lg:text-base xl:text-lg leading-relaxed text-secondary3  `}
        >
          {description}
        </p>
        <p
          className={`flex flex-col  items- rounded  text-xs sm:text-sm md:text-sm lg:text-base font-medium  leading-normal  text-secondary_100 md:max-w-3rem`}
        >
          <img
            src={tipIcon}
            alt="tip to using Denurx"
            className="w-4 md:w-10 lg:w-6"
          />
          {tip}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [active, setActive] = useState(howItWorks[0].step);
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  useEffect(() => {
    let toggleActive;
    if (!hovered && inView) {
      toggleActive = setInterval(() => {
        setActive((prevActive) => {
          const currentIndex = howItWorks.findIndex(
            (step) => step.step === prevActive
          );
          const nextIndex = (currentIndex + 1) % howItWorks.length;
          return howItWorks[nextIndex].step;
        });
      }, 5000);
    }

    return () => clearInterval(toggleActive);
  }, [hovered, inView]);

  return (
    <section ref={containerRef}  id="quick start" className={`${styles.container}  flex flex-col gap-6 sm:gap-10 `}>
      <h2
        className={`${styles.h2} text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold leading-snug`}
      >
        Easy Steps to Better Health
      </h2>
      <p className={`${styles.p} text-sm md:text-lg lg:text-base xl:text-lg leading-relaxed text-secondary3 `}>
        Using our Denurx is simple and straightforward. Follow these
        easy steps to access comprehensive healthcare services anytime,
        anywhere.
      </p>
      <section className="flex flex-col gap-6 py-8 lg:flex-row justify-between">
        <CircularContainer active={active} setActive={setActive} />
        <div className=" lg:w-[50%]">
          {howItWorks.map((step, index) => (
            <Steps key={index} {...step} active={active} hovered={hovered} setHovered={setHovered} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;
