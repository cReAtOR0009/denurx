import { useState, useRef, useEffect } from "react";
import { Sectionwrapper } from "./hoc";
import { styles } from "../styles";
import { faqs } from "../assets/text";

const FaqCard = ({ question, answer }) => {
  const detailsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const detailsElement = detailsRef.current;
    if (detailsElement) {
      const handleToggle = () => {
        setIsOpen(detailsElement.open);
        // onToggle();
      };
      detailsElement.addEventListener("toggle", handleToggle);

      return () => {
        detailsElement.removeEventListener("toggle", handleToggle);
      };
    }
  }, []);

  return (
    <details
      ref={detailsRef}
      className={`flex flex-col min-w-[200px] w-full sm:w-[49%] gap-6 my-2 sm:my-4 rounded-md border-[1px] border-grey_100 text-black md:gap-4 cursor-pointer hover:bg-primary hover:text-white animate-slide-in-right transition`}
    >
      <summary>
        <div
          className={`${styles.h4} p-2 md:p-2 text-primary_10 flex justify-between items-center`}
        >
          <p>{question}</p>
          <span className="p-1 text-xl md:text-2xl lg:text-2xl xl:text-2xl font-medium leading-normal rounded-full">
            {isOpen ? "-" : "+"}
          </span>
        </div>
      </summary>
      <div className={`${styles.paragraph} p-2 ${isOpen ? "animate-slide-in-up" : ""}`}>
        {answer}
      </div>
    </details>
  );
};

const Faq = () => {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <section className={`${""} faq flex flex-col gap-6 sm:gap-10 `}>
      <h2 className={`${styles.h2}`}>We Have Answers</h2>
      <div className="flex items-center">
        <div className="flex-1 flex  justify-between flex-wrap  gap- my-0 mx-[auto]">
          {faqs.map((faq, index) => (
            <FaqCard
              {...faq}
              index={index}
              key={index}
              animationKeys={index}
              // onToggle={() => setAnimationKey((prevKey) => prevKey + 1)}
            />
          ))}
        </div>
        <div className="hidden lg:block text-[50vw] text-primary font-[poppi] leading-[0]">
          ?
        </div>
      </div>
    </section>
  );
};

export default Sectionwrapper(Faq, "faq");
