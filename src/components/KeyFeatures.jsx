import { useState } from "react";
import { Sectionwrapper } from "./hoc";
import Registration from "./Registration";
import { styles } from "../styles";
import { aboutApp } from "../assets/text";
import { doctor2, patient } from "../assets/images";

const FeaturesCard = ({ text, mockup, description, index }) => {
  return (
    <div
      className={`feature${
        index + 1
      } relative flex  justify-between items-center flex-wrap sm:flex-nowrap border border-[#eaeaea] dark:border-dark-borderDark  ${
        index + 1 == 2 ? "lg:flex-col justify-center" : "flex-row"
      } 
      ${index + 1 == 3 ? "flex-row flex-wrap md:flex-nowrap" : ""}
      justify-between p-4 md:p-10 pb-0 sm:pb-0 md:pb-0 rounded-[30px] lg:rounded-[50px] gap-4  h-[100%] w-[100%]  overflow-hidde bg-mockupB `}
    >
      <div
      //bg-[#eaecf0a7] dark:bg-dark-background2
        className={`${
          // index + 1 == 2 ? "w-[auto] sm:w-[100%]" : "  w-[100%] sm:w-[50%]"
          ""
          // index + 1 == 2
          //   ? "w-[auto] sm:w-[100%]"
          //   : ` ${
          //       index + 1 == 3 ? "w-[100%] sm:w-[100%]" : "w-[100%] sm:w-[50%]"
          //     }`
        } ${index + 1 == 3 ? "order-1 sm:order-2 w-[100%]" : index + 1 ==1?"order-1 sm:order-2 md:order-2 lg:order-1": ""}  
       
        flex flex-col justify-betwee gap-2 h-[]   overflow-hidden`}
      >
        <h2 className={`${styles.h3} text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold leading-none sm:leading-normal dark:text-dark-text`}>{text}</h2>
        <p className={`${styles.paragraph}`}>{description}</p>
      </div>
      <div
        className={` ${
          index + 1 == 3 ? "order-2 sm:order-1" : index + 1 ==1?"order-1 sm:order-1 md:order-1 lg:order-2": "w-[70%]"
        } ${index + 1 !==2?"self-end":""} w-[auto]  overflow-hidden `}
      >
        <img
          src={mockup}
          alt=""
          // className={`${
          //   index + 1 == 2 ? "h-[150px] sm:h-[auto]" : ""
          // } w-[auto] h-[100px] lg:h-[200px] xl:h-[200px]  max-w-[auto] `}
          className={`${
            index + 1 == 1
              ? "w-[auto] h-[200px] bg lg:h-[200px] xl:h-[250px] sm:w-[400px] md:w-[500px] lg:w-[700px] xl:w-[600px]   max-w-[auto]"
              : index + 1 == 2
              ? "w-[auto] h-[200px] bg lg:h-[300px] xl:h-[350px] sm:w-[400px] md:w-[450px] lg:w-[200px] xl:w-[240px]  max-w-[auto]"
              : index + 1 == 3
              ? "w-[auto] h-[200px] bg lg:h-[200px] xl:h-[250px] w-[300px md:w-[300px] lg:w-[300px] xl:w-[350px]   max-w-[auto]"
              : "h-[400px] w-[auto] sm:w-[auto] sm:h-[auto] lg:w-[200px] xl:w-[250px]  max-w-[auto] min-w-[200px] "
          }  `}
        />
      </div>
    </div>
  );
};

const KeyFeatures = () => {
  const [displayForm, setDisplayForm] = useState(true);

  return (
    <section
      className={`${""}about    z-1 text-black bg lg:h-[100vh overflow-hidden`} //bg-[#939191]_200
    >
      {/* <Registration /> */}

      <div className=" flex flex-col md:flex-row justify-between item flex-wrap  gap-4 p-   ">
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
    </section>
  );
};

export default Sectionwrapper(KeyFeatures, "key features");
