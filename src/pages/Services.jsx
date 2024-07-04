import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Service from "../components/Services";
import { arrow } from "../assets/images";
import { styles } from "../styles";
import { servicesComplete } from "../assets/text";
import MultiStepForm from "../components/form/MultistepForm";
import { baseUrl } from "../../config";
import { Sectionwrapper } from "../components/hoc";

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
      {readMore && (
        <Helmet>
          <title>{`Services- ${title}`}</title>{" "}
          <meta name="description" content={`${description}`}/>
        </Helmet>
      )}
      <img
        src={image}
        alt=""
        className="w-[100%] rounded-[20px] sm:rounded-[50px] min-h-[auto] sm:max-h-[250px] sm:min-h-[300px] "
      />
      {/* <img   src={arrow} alt="" className="absolute top-0 right-0 z-10 w-[40px] sm:w-[80px] lg:w-[80px] xl:w-[80px] cursor-pointer rounded-full hover:scale-[1.1] transition" /> */}
      <div className="">
        <img
          src={icon}
          alt={`${title}`}
          className="mt-[-12%] w-8 lg:w-20 md:w-20 "
        />
        <h3 className={`${styles.h3} text-black`}>{title}</h3>
        <p className={`${styles.paragraph} text-black`}>
          {readMore ? description : trimmedContent}
          <button
            onClick={() => setReadMore(!readMore)}
            className={`${
              readMore
                ? "text-secondary_100 group-hover:underline"
                : "text-primary "
            } text-black underline inline-block text-xxs md:text-sm  cursor-pointer p-2 underline-offset-2 sm:underline-offset-4`}
          >
            {readMore ? "Read less" : "Read more"}
          </button>
        </p>
      </div>
    </div>
    // </HashLink>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`  flex flex-col  gap-6 sm:gap-10 mt-10`}>
      <Helmet>
        <title>Denurx Services</title>
        <meta name="description" content="Services offered by Denurx" />
      </Helmet>
      <h2
        className={`${"styles.h2"} text-3xl sm:text-4xl md:text-4xl lg:text-6xl text-white dark:text-dark  leading-tight font-semibold`}
      >
        Our High Quality Service
      </h2>
      <div className="service_grid  ">
        {servicesComplete.map((service) => {
          return <ServiceCard {...service} />;
        })}
      </div>
      {/* <MultiStepForm /> */}
    </div>
  );
};

export default Sectionwrapper(Services, "services");
