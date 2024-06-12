import { useState } from "react";
import { faqs } from "../assets/text";
import { doctors } from "../assets/images";
import { styles } from "../styles";

const FaqCard = ({ question, answer, index }) => {
  const [activeFaq, setActiveFaq] = useState(index === 0);

  return (
    <div
      className={` flex flex-col min-w-[200px] w-full sm:w-[49%] gap-6 my-2 sm:my-4 rounded-md  border-[1px] border-[#cacaca] text-black  md:gap-4 cursor-pointer hover:bg-primary hover:text-white`}
      onClick={() => setActiveFaq(!activeFaq)}
    >
      <div
        className={`${styles.h4} p-2 md:p-2 text-primary_10 flex justify-between items-center`}
      >
        <p>{question}</p>{" "}
        <span className="p-1 text-xl md:text-2xl lg:text-2xl xl:text-2xl font-medium leading-normal rounded-full">
          {activeFaq ? "-" : "+"}
        </span>{" "}
      </div>
      <div
        className={`${activeFaq ? "block" : "hidden"} ${styles.paragraph} p-2`}
      >
        {answer}
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section
      id="faq"
      className={`${styles.container} relative flex flex-col gap-6 sm:gap-10 `}
    >
      <h2 className={`${styles.h2}`}>We Have Answers</h2>
      <div className="flex items-center">
        <div className="flex-1 flex  justify-between flex-wrap  gap- my-0 mx-[auto]">
          {faqs.map((faq, index) => (
            <FaqCard {...faq} key={index} index={index} />
          ))}
        </div>
        {/* <img src={doctors} alt="" className="flex1 h-[fit-content" /> */}
        <div className="hidden md:block text-[50vw] text-primary font-[poppi] leading-[0]">
          ?
        </div>
      </div>
    </section>
  );
};

export default Faq;
