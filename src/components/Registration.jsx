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
    <div className={`${""} register  dark:bg-dark-bg`}>
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
          Delivering virtual care as a Doctor is a game-changer. You can leverage out platform, and conduct secure video consultations, remote monitoring, and more. This approach enhances patient access and engagement, and helps you to expand reach and patient base. Virtual care also improves health outcomes and patient satisfaction. By adopting virtual care you can stay ahead in this digital age, grow your patient base, and deliver high-quality care conveniently and securely. Embrace this practice and improve patient care.

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
            className={`${styles.h4} absolute  top-2 right-2 rounded-full p-[2px] sm:py-2 sm:px-4   bg-[#939191] text-white`}
          >
            Manage
          </div>
          <div
            className={`${styles.h4} absolute rounded-full left-2 top-1/3 md:-left-[20%] p-[2px] sm:py-2 sm:px-4   bg-primary_100 text-white`}
          >
            Engage
          </div>
          <div
            className={`${styles.h4} absolute top-1/2 right-2 rounded-full p-[2px] sm:py-2 sm:px-4   bg-primary_100 text-white`}
          >
            Leverage
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
            className={`${styles.h4} absolute rounded-full right-2 top-1/3 sm:top-1/4 md:-right-[10%] p-[2px] sm:py-2 sm:px-4 bg-primary_100 text-white`}
          >
            Schedule
          </div>
          <div
            className={`${styles.h4} absolute top-1/2 left-2 rounded-full p-[2px] sm:py-2 sm:px-4   bg-primary_100 text-white`}
          >
            Connect
          </div>
          <div
            className={`${styles.h4} absolute top-3/4 right-2 md:-right-[10%] rounded-full p-[2px] sm:py-2 sm:px-4   bg-[#939191] text-white`}
          >
            Anywhere
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
          With Denurx, you can access quality healthcare anytime, anywhere. No more waiting in line or traveling to a clinic. Whether you're at home, in the office, or on-the-go, you can connect with a healthcare professional and receive the care you need. We offer flexibility, convenience, and accessibility, making it easier than ever to prioritize your health and wellbeing. With our virtual care, you can receive schedule virtual appointments, receive medical advice, diagnosis, treatment, and support from the comfort of your own space via your smartphone. Get connected and take control of your health today!

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
