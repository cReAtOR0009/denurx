import { styles } from "../styles";
import { aboutApp } from "../assets/text";


const FeaturesCard = ({ text, mockup, description, index }) => {
  return (
    <div
      className={`feature${
        index + 1
      } relative flex  justify-between items-center flex-wrap sm:flex-nowrap border border-[#eaeaea]  ${
        index + 1 == 2 ? "flex-col justify-center" : "flex-row"
      } 
      ${
        index + 1 == 3 ? "flex-wrap md:flex-wrap lg:flex-nowrap" : ""
      }
      justify-between p-10 pb-0 rounded-[50px] gap-4  h-[100%] w-[100%]  overflow-hidde bg-mockupB bg-[#eaecf0a7]`}
    >
      <div
        className={`${index + 1 == 2 ? "w-[auto] sm:w-[100%]" : "  w-[100%] sm:w-[50%]"} ${
          index + 1 == 3 ? "order-1 sm:order-2 w-[100%]" : ""
        }  
       
        flex flex-col justify-betwee gap-2 h-[]   overflow-hidden`}
      >
        <h2 className={`${styles.h3} `}>{text}</h2>
        <p
          className={`${styles.paragraph}`}
        >
          {description}
        </p>
      </div>
      <div
        className={` ${index + 1 == 3 ? "order-2 sm:order-1" : ""} w-[auto] overflow-hidden`}
      >
        <img
          src={mockup}
          alt=""
          className={`${
            index + 1 == 2 ? "h-[200px] sm:h-[auto]" : ""
          } w-[auto] h-[200px] lg:h-[200px] xl:h-[350px]  max-w-[auto] `}
        />
      </div>
    </div>
  );
};



const AboutApp = () => {
  return (
    <section
      id="about"
      className={`${styles.container} relative about  z-1 text-black`} //bg-primary_200
    >
      <div className="flex flex-col md:flex-row justify-between item flex-wrap  gap-4 p-2  md:p-8 md:pt-16 md:rounded-[50px] ">
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
      <div className={`${styles.introTextContainer} flex flex-row items-center flex-wrap lg:flex-nowrap px-4 py-6 sm:py-10 sm:px-20 md:px-28 md:py-20 gap-6`}>
            <h2 className={`${styles.h2} text-secondary2 `}>Denurx</h2>
            <div className="text-left">
              <h3 className={`${styles.h3} `}>{aboutApp.title}</h3>
              <article className={`${styles.paragraph} text-secondar`}>
                {aboutApp.text}
              </article>
            </div>
          </div>
    </section>
  );
};

export default AboutApp;
