import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { styles } from "../styles";
import { servicesComplete } from "../assets/text";
import { Sectionwrapper } from "../components/hoc";
import ServiceCard from "../components/ServicesCard";
import { useLocation } from "react-router-dom";

const Services = () => {
  const { pathname } = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={` relative py-10  pb-0 my-12 sm:my-10 md:my-10 lg:my-0 sm:py-10  lg:py-20 xl:py-24 flex flex-col  gap-6 sm:gap-10 `}>
      <Helmet>
        <title> Services Offered By Denurx</title>
        <meta name="description" content="Access top healthcare professionals anytime, anywhere with our telemedicine app. Book virtual doctor consultations,Appointment Booking, Home Health Services, virtual Lab Test scheduling and result Requests,Medication Management and prescription, Health Records Management, manage prescriptions, and get quality medical advice from the comfort of your home. Monetize your Medical service, Engage Patients, Manage Patients, Stay healthy with our secure, user-friendly telehealth platform. Download now for convenient, on-demand medical care." />
      </Helmet>
      <div className="services">

      <div className={`service_grid py-6 `}>
        {servicesComplete.map((service) => {
          return <ServiceCard key={service.title} {...service} />;
        })}
      </div>
       </div>{/* <MultiStepForm /> */}
    </div>
  );
};

export default Sectionwrapper(Services, "services");
