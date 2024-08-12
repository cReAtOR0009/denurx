import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { styles } from "../styles";
import { servicesComplete } from "../assets/text";
import { Sectionwrapper } from "../components/hoc";

const ServiceCard = ({ icon, title, description, image }) => {
  const trimmedContent = `${description.slice(0, 200)}...`;
  const [readMore, setReadMore] = useState(false);

  return (
    // <HashLink to={`/services/#${title}`}>

    <div
      key={title}
      id={`${title}`}
      className=" relative rounded-[26px] lg:rounded-[46px] p-4 border-2 border-grey_100  cursor-pointer hover:transition-colors transition:border"
      onClick={() => setReadMore(!readMore)}
    >
      {readMore && (
        <Helmet>
          <title>{`Services- ${title}`}</title>{" "}
          <meta name="description" content={`${description}`}/>
        </Helmet>
      )}
      <img
        src={`${image}`}
        alt={title}
        className="w-[100%] rounded-[10px] lg:rounded-[30px] min-h-[auto] sm:max-h-[250px] sm:min-h-[300px] "
      />
      <div className="">
        <img
          src={icon}
          alt={`${title} icon`}
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
        <title> Services Offered By Denurx</title>
        <meta name="description" content="Access top healthcare professionals anytime, anywhere with our telemedicine app. Book virtual doctor consultations,Appointment Booking, Home Health Services, virtual Lab Test scheduling and result Requests,Medication Management and prescription, Health Records Management, manage prescriptions, and get quality medical advice from the comfort of your home. Monetize your Medical service, Engage Patients, Manage Patients, Stay healthy with our secure, user-friendly telehealth platform. Download now for convenient, on-demand medical care." />
      </Helmet>
      <h2
        className={` text-3xl sm:text-4xl md:text-4xl lg:text-6xl  dark:text-dark  leading-tight font-semibold`}
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
