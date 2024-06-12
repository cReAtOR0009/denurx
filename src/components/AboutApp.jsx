import { styles } from "../styles";
import { aboutApp } from "../assets/text";
import MultiStepForm from "./form/MultistepForm";
import { useState } from "react";

const FeaturesCard = ({ text, mockup, description, index }) => {
  return (
    <div
      className={`feature${
        index + 1
      } relative flex  justify-between items-center flex-wrap sm:flex-nowrap border border-[#eaeaea]  ${
        index + 1 == 2 ? "flex-col justify-center" : "flex-row"
      } 
      ${index + 1 == 3 ? "flex-wrap md:flex-wrap lg:flex-nowrap" : ""}
      justify-between p-4 md:p-10 pb-0 sm:pb-0 md:pb-0 rounded-[50px] gap-4  h-[100%] w-[100%]  overflow-hidde bg-mockupB bg-[#eaecf0a7]`}
    >
      <div
        className={`${
          index + 1 == 2 ? "w-[auto] sm:w-[100%]" : "  w-[100%] sm:w-[50%]"
        } ${index + 1 == 3 ? "order-1 sm:order-2 w-[100%]" : ""}  
       
        flex flex-col justify-betwee gap-2 h-[]   overflow-hidden`}
      >
        <h2 className={`${styles.h3} `}>{text}</h2>
        <p className={`${styles.paragraph}`}>{description}</p>
      </div>
      <div
        className={` ${
          index + 1 == 3 ? "order-2 sm:order-1" : ""
        } w-[auto] overflow-hidden`}
      >
        <img
          src={mockup}
          alt=""
          // className={`${
          //   index + 1 == 2 ? "h-[150px] sm:h-[auto]" : ""
          // } w-[auto] h-[100px] lg:h-[200px] xl:h-[200px]  max-w-[auto] `}
          className={`${
            index + 1 == 2
              ? "h-[200px] sm:h-[200px]  xl:h-[350px]"
              : "w-[auto] h-[200px] lg:h-[200px] xl:h-[250px]  max-w-[auto]"
          }  `}
        />
      </div>
    </div>
  );
};

const AboutApp = () => {
  const [displayForm, setDisplayForm] = useState(true);

  return (
    <section
      id="about"
      className={`${styles.container}  z-1 text-black bg lg:h-[100vh overflow-hidden`} //bg-primary_200
    >
      <div
        className={`${styles} flex flex-row items-center flex-wrap lg:flex-nowrap `}
      >
        {/* <h2 className={`${styles.h2} text-secondary2 `}>Denurx</h2> */}
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-[fit-content] flex flex-col gap-2 text-left px-4 py-6 sm:py-10 sm:px-20 md:px-16 md:py-20 sm:gap-6">
            <h3 className={`${styles.h3} `}>Are you an healthcare Provider?</h3>
            {/* <h3 className={`${styles.h4}  `}>{aboutApp.titleProviders}</h3> */}
            <article className={`${styles.paragraph}`}>
              {aboutApp.textProviders}
            </article>
            <div className="flex items-center justify-between">
              <h4 className={`${styles.h4}`}>
                {" "}
                <button
                  onClick={() => setDisplayForm(true)}
                  className={`rounded-[30px] bg-primary outline-none  px-4 py-2 sm:px-6 sm:py-2 min-w-[fit-content] text-xxs text-white sm:text-sm font-medium uppercase leading-normal  text-primary-700 border border-[transparent] focus:border-white transition duration-150`}
                >
                  Click Here
                </button>{" "}
                to Join the Healthcare Providers Waiting list
              </h4>
            </div>
          </div>
          <div className="w-[fit-content] flex flex-col gap-2 text-left px-4 py-6 sm:py-10 sm:px-20 md:px-16 md:py-20 sm:gap-6">
            <h3 className={`${styles.h3} `}>
              would you like to Manage your Health from your Phone?
            </h3>
            {/* <h3 className={`${styles.h4}  `}>{aboutApp.titlePatients}</h3> */}
            <article className={`${styles.paragraph} `}>
              {aboutApp.textPatients}
            </article>
            <div className="flex items-center justify-between">
              <h4 className={`${styles.h4}`}>
                {" "}
                <button
                  onClick={() => setDisplayForm(true)}
                  className={`rounded-[30px] bg-primary outline-none  px-4 py-2 sm:px-6 sm:py-2 min-w-[fit-content] text-xxs text-white sm:text-sm font-medium uppercase leading-normal  text-primary-700 border border-[transparent] focus:border-white transition duration-150`}
                >
                  Click Here
                </button>{" "}
                to Join Our Patient Waiting list
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="relative about flex flex-col md:flex-row justify-between item flex-wrap  gap-4 p-2  md:p-8 md:pt-16  ">
        <div className="flex flex-col gap-6 sm:gap-10">
          <div className="">
            <div className="features_card  py-4 ">
              {aboutApp.keyFeatures.map((feature, index) => (
                <FeaturesCard key={index} index={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
     { displayForm && <MultiStepForm setDisplayForm={setDisplayForm} displayForm={displayForm} />}
    </section>
  );
};

export default AboutApp;
