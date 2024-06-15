import React from "react";
import { styles } from "../styles";
import { aboutApp } from "../assets/text";
import { doctor2, patient } from "../assets/images";
import { UserRegistrationForm } from "./form/UserRegistrationForm";
import { ProviderRegistrationForm } from "./form/ProviderForm";

const Registration = () => {
  return (
    <div className={`${styles.container} relative`}>
      <div className="register flex  justify-between items-center flex-wrap md:flex-nowrap ">
        <div className=" flex  flex-col gap-2 md:w-1/2 text-left px-4 py-0 sm:px-20 md:px-16">
          <h3 className={`${styles.h3} `}>{aboutApp.titleProviders}</h3>
          <article className={`${styles.paragraph}`}>
            {aboutApp.textProviders}
          </article>
          <p className={`${styles.paragraph}`}>
            Join Our Healthcare Providers Waiting list below
          </p>
          <ProviderRegistrationForm />
        </div>
        <div className="relative magicpattern2 fullbgAuto">
          <div
            className={`${styles.h2} absolute  top-2 right-2 rounded-full p-2 bg-[#939191] text-white`}
          >
            24/7
          </div>
          <div
            className={`${styles.h2} absolute rounded-full left-2 top-1/3 md:-left-[20%] p-2 bg-primary text-white`}
          >
            Convinience
          </div>
          <div
            className={`${styles.h2} absolute top-1/2 right-2 rounded-full p-2 bg-[#939191] text-white`}
          >
            Comfort
          </div>

          <img
            src={doctor2}
            alt=""
            className=" h-[100%] w-[full] md:w-[500px]"
          />
        </div>
      </div>
      <div className="w-full h-1 bg-[#eaecf0a7] rounded my-10"></div>
      <div className="flex  justify-between items-center  flex-wrap md:flex-nowrap">
        <div className="relative magicpattern fullbg">
          <div
            className={`${styles.h2} absolute rounded-full right-2 top-1/4 md:-right-[20%] p-2 bg-primary text-white`}
          >
            Anywhere
          </div>
          <div
            className={`${styles.h2} absolute top-1/2 left-2 rounded-full p-2 bg-[#939191] text-white`}
          >
            Anytime
          </div>
          <img
            src={patient}
            alt=""
            className="order-2 sm:order-1   h-[100%] w-[full] md:w-[500px]"
          />
        </div>
        <div className="order-1 sm:order-2 flex flex-col gap-2 md:w-1/2 text-left px-4 py-0  sm:px-20 md:px-16">
          <h3 className={`${styles.h3} `}>{aboutApp.titlePatients}</h3>
          <article className={`${styles.paragraph}`}>
            {aboutApp.textPatients}
          </article>
          <p className={`${styles.paragraph}`}>
            Join Our Patient Waiting list below
          </p>
          <UserRegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;
