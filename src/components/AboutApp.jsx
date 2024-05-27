import React, { useRef } from "react";
import { styles } from "../styles";
import { aboutApp } from "../assets/text";
import { revealDivOnScroll } from "../assets/animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FeaturesCard = ({ text, icon }) => (
  <div
    className="flex flex-col flex-1 w-[100%] min-w-[40%] md:min-w-[150px] shadow-red_custom rounded gap-2 md:gap-4   p-2 md:p-2 text-center hover:scale-[1.1]"
  >
    <div className="w-[50px]">
      <img src={icon} alt={`${text} icon`} className="w-[64px] h-[auto]" />
    </div>
    <span
      className={`${styles.p}  text-secondary2 font-semibold text-left inline-block `}
    >
      {text}
    </span>
  </div>
);

const ImageCard = ({ image, position, index }) => (
  <div>
    <img
      src={image}
      alt={`Denurx Service preview image ${index}`}
      className={`${position} w-[100%] sm:w-[300px] lg:w-[400px] md:w-[300px]  h-[auto] rounded hover:z-10 transition`}
    />
  </div>
);

const AboutApp = () => {
  const containerRef = useRef(null);
  const keyFeaturesContainer = useRef(null);
  const ImagesContainer = useRef(null);

  // console.log(containerRef)

  useGSAP(() => {
    revealDivOnScroll(containerRef);
    const children = gsap.utils.toArray(keyFeaturesContainer.current.children);
    const imgChildren = gsap.utils.toArray(ImagesContainer.current.children);
    imgChildren.forEach((child, index) => {
      gsap.fromTo(
        child,
        { opacity: 0, y:50 },
        {
          opacity: 1,
          y:0,
          delay:index * 0.2,
          scrollTrigger: {
            trigger: child,
            start: "top 95%",
            end: "bottom 10%",
            stagger:0.25,
            ease: "power1.out",
          },
        }
      );
    });
    children.forEach((child, index) => {
      gsap.fromTo(
        child,
        { opacity: 0, y:50 },
        {
          opacity: 1,
          y:0,
          delay:index * 0.2,
          scrollTrigger: {
            trigger: child,
            start: "top 95%",
            end: "bottom 10%",
            stagger:0.25,
            ease: "power1.out",
          },
        }
      );
    });
  }, []);
  // revealDivOnScroll("about");
  return (
    <section
      ref={containerRef}
      id="about"
      className={`${styles.container} px-4 py-4 md:px-10 md:py-10 lg:p-20 xl:p-20 text-black`} //bg-primary_200
    >
      <div className="flex flex-col md:flex-row justify-between item flex-wrap  gap-4 p-2   md:p-8 md:rounded-[50px] border-[5px] rounded  md:border-[10px] border-primary border-solid">
        <div ref={ImagesContainer} className="order-2 sm:order-1 static p-0 md:p-4 flex gap-2 md:gap-4 md:relative  md:grid place-items-center  flex-1 w-auto flex-wrap ">
          {aboutApp.images.map((image, index) => {
            let position =
              index === 0
                ? "lg:absolute top-1/3  left-2"
                : index === 1
                ? "static lg:absolute top-0  right-2"
                : "lg:absolute   right-2 lg:bottom-[10px] ";
            return (
              <ImageCard
                key={index}
                index={index}
                image={image}
                position={position}
              />
            );
          })}
        </div>
        <div className="order-1 sm:order-2 flex flex-col flex-1 gap-6 sm:gap-10">
          <h2 className={`${styles.h2} `}>{aboutApp.title}</h2>
          <p className={`${styles.paragraph} `}>{aboutApp.text}</p>
          <div className="">
            <h2 className={`${styles.h3} text-secondary2 `}>Key Features</h2>
            <div
              ref={keyFeaturesContainer}
              className="flex gap-2 md:gap-6 flex-wrap py-4"
            >
              {aboutApp.keyFeatures.map((feature, index) => (
                <FeaturesCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutApp;
