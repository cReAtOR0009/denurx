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
      } relative flex  justify-between items-center flex-wrap sm:flex-nowrap border border-[#eaeaea]  ${
        index + 1 == 2 ? "flex-col justify-center" : "flex-row"
      } 
      ${index + 1 == 3 ? "flex-wrap md:flex-wrap lg:flex-nowrap" : ""}
      justify-between p-4 md:p-10 pb-0 sm:pb-0 md:pb-0 rounded-[50px] gap-4  h-[100%] w-[100%]  overflow-hidde bg-mockupB bg-[#eaecf0a7]`}
    >
      <div
        className={`${
          // index + 1 == 2 ? "w-[auto] sm:w-[100%]" : "  w-[100%] sm:w-[50%]"
          index + 1 == 2 ? "w-[auto] sm:w-[100%]" : ` ${index + 1 == 3 ?"w-[100%] sm:w-[100%]":"w-[100%] sm:w-[50%]"}`
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
