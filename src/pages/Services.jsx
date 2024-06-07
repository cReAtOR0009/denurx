import { useState } from "react";
import Service from "../components/Services";
import { arrow } from "../assets/images";
import { styles } from "../styles";
import { servicesComplete } from "../assets/text";
import MultiStepForm from "../components/form/MultistepForm";
import { baseUrl } from "../../config";

const Services = () => {
  window.scrollTo(0, 0);

  const ServiceCard = ({ icon, title, description, image }) => {
    const trimmedContent = `${description.slice(0, 200)}...`;
    const [readMore, setReadMore] = useState(false);

    return (
      // <HashLink to={`${baseUrl}/services/#${title}`}>

      <div
        key={title}
        id={`${title}`}
        className=" relative rounded-[20px] sm:rounded-[50px] p-4 border-2 border-[#cacaca]  cursor-pointer hover:transition-colors transition:border"
        onClick={() => setReadMore(!readMore)}
      >
        <img
          src={image}
          alt=""
          className="w-[100%] rounded-[20px] sm:rounded-[50px] "
        />
        {/* <img   src={arrow} alt="" className="absolute top-0 right-0 z-10 w-[40px] sm:w-[80px] lg:w-[80px] xl:w-[80px] cursor-pointer rounded-full hover:scale-[1.1] transition" /> */}
        <div className="">
          <img
            src={icon}
            alt={`${title}`}
            className="mt-[-12%] w-8 lg:w-20 md:w-20"
          />
          <h3 className={`${styles.h3} text-black`}>{title}</h3>
          <p className={`${styles.paragraph} text-black`}>
            {readMore ? description : trimmedContent}
            <button
              onClick={() => setReadMore(!readMore)}
              className={`${
                readMore
                  ? "bg-secondary_100 group-hover:bg-primary"
                  : "bg-primary "
              } text-white inline-block text-xxs md:text-sm  rounded-full cursor-pointer p-2`}
            >
              {readMore ? "Read less" : "Read more"}
            </button>
          </p>
        </div>
      </div>
      // </HashLink>
    );
  };
  return (
    <div
      className={`${styles.container} mt-[100px] flex flex-col my-4 gap-6 sm:gap-10`}
    >
      <h2 className={`${styles.h2}`}>Our High Quality Service</h2>
      <div className="service_grid">
        {servicesComplete.map((service) => {
          return <ServiceCard {...service} />;
        })}
      </div>
      <MultiStepForm />
    </div>
  );
};

export default Services;
