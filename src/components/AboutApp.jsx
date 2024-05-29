import { styles } from "../styles";
import { aboutApp } from "../assets/text";


const FeaturesCard = ({ text, icon }) => (
  <div
    className="flex flex-col flex-1 w-[100%] min-w-[40%] md:min-w-[150px] rounded gap-2 md:gap-4   p-2 md:p-2 text-center"
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
      className={`${position} w-[100%] sm:w-[300px] lg:w-[400px] md:w-[300px]  h-[auto] rounded hover:z-10 transition-all`}
    />
  </div>
);

const AboutApp = () => {



  return (
    <section
      id="about"
      className={`${styles.container} px-4 py-4 md:px-10 md:py-10 lg:p-20 xl:p-20 text-black`} //bg-primary_200
    >
      <div className="flex flex-col md:flex-row justify-between item flex-wrap  gap-4 p-2   md:p-8 md:rounded-[50px] border rounded  border-[#cacaca]">
        <div  className="order-2 sm:order-1 static p-0 md:p-4 flex gap-2 md:gap-4 md:relative  md:grid place-items-center  flex-1 w-auto flex-wrap ">
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
          <article className={`${styles.paragraph}  `}>{aboutApp.text}</article>
          <div className="">
            <h2 className={`${styles.h3} text-secondary2 `}>Key Features</h2>
            <div
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
