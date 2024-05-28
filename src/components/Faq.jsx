import  { useState } from "react";
import { faqs } from "../assets/text";
import { styles } from "../styles";


const FaqCard = ({ question, answer, index }) => {
  const [activeFaq, setActiveFaq] = useState(index===0);

  return (
    <div className={` flex flex-col min-w-[200px] w-full sm:w-[49%] gap-6 my-2 sm:my-4 rounded-md  border-[1px] border-[#cacaca] text-black  md:gap-4 cursor-pointer `} onClick={() => setActiveFaq(!activeFaq)}>
      <div className={` ${activeFaq?"bg-":""} ${styles.h4} p-2 md:p-2 text-primary_10 flex justify-between items-center  rounded-[4px] `}><p>{question}</p> <span className="p-1 text-xl md:text-2xl lg:text-2xl xl:text-2xl font-medium leading-normal rounded-full">{activeFaq?"-":"+"}</span> </div> 
      <div className={`${activeFaq?"block":"hidden"} ${styles.paragraph} p-2`}>{answer}</div>
    </div>
  );
};

const Faq = () => {

  return (
    <section id="faq" className={`${styles.container} flex flex-col gap-6 sm:gap-10`}>
        <h2 className={`${styles.h2}`}>Frequently Asked Questions</h2>
        <div className="flex justify-between flex-wrap  gap- my-0 mx-[auto]">
      {faqs.map((faq, index) => (
        <FaqCard {...faq} key={index} index={index} />
      ))}
        </div>
            
    </section>
  );
};

export default Faq;
