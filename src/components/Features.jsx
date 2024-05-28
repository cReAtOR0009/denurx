import React, { useState, useEffect } from "react";
import { benefits } from "../assets/text";
import { styles } from "../styles";
import { DenurxLogo } from "../assets/images";

const FeaturesCard = ({ icon, text, title }) => {
  return (
    <div className="relative min-w-[200px] flex-1 rounded-tl-[12px] rounded-tr-[12px] sm:rounded-xl border-2 pb-4 border-[#cacaca] text-black cursor-pointer group">
      <div className="flex items-center border-l-8 border-r-8 border-b-2  rounded-tl-[10px] rounded-tr-[10px]  border-[#cacaca] rounded-[10px] p-2 transition-all">
        <img
          src={icon}
          alt={`app name ${icon} icon`}
          className="absolute bottom-2 right-2 w-8 md:w-12 p-2 border border-secondary2 rounded-full transition-all"
        />
        <h3 className={`${styles.h3}  text-xl md:text-2xl lg:text-2xl xl:text-2xl font-medium leading-normal`}>
          {title}
        </h3>
      </div>
      <p className={`${styles.paragraph} text-sm md:text-base lg:text-base xl:text-base text-black p-2`}>
        {text}
      </p>
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
  const trimmedContent = `${benefits.paragraph.slice(0, 400)}...`
  const [readMore, setReadMore] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (!isHovered && !isMobile) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalPages);
      }, 5000); // Change every 5 seconds
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
      className={`${styles.container} flex flex-col flex-wrap`}
      onClick={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between flex-wrap md:flex-nowrap flex-1 py-8 gap-6 sm:gap-10">
        <div className="flex flex-col justify-center my-4 gap-6 sm:gap-10 order-2 sm:order-1">
          <h2 className={`${styles.h2}`}>{benefits.title}</h2>
          <p className={`${styles.p} text-sm md:text-lg lg:text-base xl:text-lg leading-relaxed text-black`}>
            {readMore?benefits.paragraph:trimmedContent} <span onClick={() => setReadMore(!readMore)} className={`${readMore?"bg-secondary_100 group-hover:bg-primary":"bg-primary "} text-white inline-block text-xxs md:text-sm rounded-full cursor-pointer p-2`}>{readMore?"ReadLess":"ReadMore"}</span>
          </p>
        </div>
        <img src={DenurxLogo} alt="Denurx logo" className="order-1 sm:order-2 lg:flex lg:items-end w-[100%] sm:w-[] md:w-[100%] h-[100%] rounded-lg"/>
      </div>
      <div className="flex flex-wrap gap-4  animate-[slide-in-right_0.5s_ease-in-out]">
        {toDisplay.map((benefit, index) => (
          <FeaturesCard key={index} {...benefit} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => updateDisplayItem(index)}
            className={`${currentIndex === index ? " scale-[1.3]" : "hover:scale-[1.3]"} bg-primary p-1 my-6 w-2 h-2 rounded-full transition`}
          >
            {/* {index + 1} */}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Features;
