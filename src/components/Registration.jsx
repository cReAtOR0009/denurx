import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { WaitlistContext } from "../context/waitlistContext";
import { Sectionwrapper } from "./hoc";
import { styles } from "../styles";
import { aboutApp } from "../assets/text";
import { doctor2, patient } from "../assets/images";
import { baseUrl } from "../../config";

const Registration = () => {
  const {showJoinwaitlist, setShowJoinwaitlist} = useContext(WaitlistContext)

  return (
    <div className={`${""} register`}>
      <div className=" flex justify-center  md:justify-between  items-center flex-wrap sm:flex-nowrap ">
        <div  className=" order-2 sm:order-1 flex  flex-col gap-2 sm:w-1/2 text-left px-4 py-0 lg:px-10">
          <h3 className={`${styles.h2} `}>{aboutApp.titleProviders}</h3>
          <article className={`${styles.paragraph}`}>
            {aboutApp.textProviders}
          </article>
          {/* <p className={`${styles.paragraph}`}>
            Join Our Healthcare Providers Waiting list below
          </p> */}
          <article className={`${styles.paragraph}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque illo
            laborum doloribus necessitatibus magni autem fugit amet! Vero quas
            ad sit totam temporibus eveniet iste provident, labore ducimus non
            et accusantium facere delectus voluptate, nam qui, dolorem expedita
            excepturi quae repellat quod repellendus tempore officiis quidem!
            Eum minima et ut.
          </article>
          {/* <HashLink to={`${baseUrl}/#providerform`}> */}

          <button
          onClick={() => setShowJoinwaitlist(true)}
          className={`${styles.button_primary2
          }  self-start `}
          >Join Us Now</button>
          {/* </HashLink> */}
        </div>
        <div className="order-1 sm:order-2 relative magicpattern2 bg-150 mx-0 my-auto">
          <div
            className={`${styles.h4} absolute  top-2 right-2 rounded-full p-[2px] sm:p-2  bg-[#939191] text-white`}
          >
            24/7
          </div>
          <div
            className={`${styles.h4} absolute rounded-full left-2 top-1/3 md:-left-[20%] p-[2px] sm:p-2  bg-primary_100 text-white`}
          >
            Convinience
          </div>
          <div
            className={`${styles.h4} absolute top-1/2 right-2 rounded-full p-[2px] sm:p-2  bg-[#939191] text-white`}
          >
            Comfort
          </div>

          <img
            src={doctor2}
            alt=""
            className="sm:h-[300px] md:h-[400px]  lg:h-[500px] w-[full] md:w-[auto] mx-0 my-auto"
          />
        </div>
      </div>
      <div className="w-full h-1 bg-[#eaecf0a7] rounded my-10"></div>
      <div className="register2 flex justify-center  md:justify-between items-center  flex-wrap sm:flex-nowrap">
        <div className="  relative magicpattern bg-150">
          <div
            className={`${styles.h4} absolute rounded-full right-2 top-1/3 sm:top-1/4 md:-right-[10%] p-[2px] sm:p-2 bg-primary_100 text-white`}
          >
            Anywhere
          </div>
          <div
            className={`${styles.h4} absolute top-1/2 left-2 rounded-full p-[2px] sm:p-2  bg-[#939191] text-white`}
          >
            Anytime
          </div>
          <img
            src={patient}
            alt=""
            className=" sm:h-[300px] md:h-[400px]  lg:h-[500px] w-[full] md:w-[auto]"
          />
        </div>
        <div className="order-1 sm:order-2 flex flex-col gap-2 sm:w-1/2 text-left px-4 py-0  lg:px-10">
          <h3 className={`${styles.h2} `}>{aboutApp.titlePatients}</h3>
          <article className={`${styles.paragraph}`}>
            {aboutApp.textPatients}
          </article>
          {/* <p className={`${styles.paragraph}`}>
            Join Our Patient Waiting list below
          </p> */}
          <article className={`${styles.paragraph}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque illo
            laborum doloribus necessitatibus magni autem fugit amet! Vero quas
            ad sit totam temporibus eveniet iste provident, labore ducimus non
            et accusantium facere delectus voluptate, nam qui, dolorem expedita
            excepturi quae repellat quod repellendus tempore officiis quidem!
            Eum minima et ut.
          </article>
          {/* <HashLink to={`${baseUrl}/#userform`}> */}
          <button
          onClick={() => setShowJoinwaitlist(true)}
            className={`${styles.button_primary2
            } self-start `}
          >Join Us Now</button>
          {/* </HashLink> */}
        </div>
      </div>
    </div>
  );
};

export default Sectionwrapper(Registration, "start");
