import React, { useEffect } from "react";
import { privacyPolicy } from "../assets/text";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config";

const Privacy = ({ showPrivacy, setShowPrivacy }) => {
  useEffect(() => {
    if (showPrivacy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPrivacy]);

  return (
    <div
      className={`mb-10 h-[100vh] fixed top-0 left-0 bottom-0 right-0 z-[100] pt-[2% flex flex-col justify-center items-center my-0 mx-[auto]  w-[100%]  bg-[#cacacaf0] animate-pop-up `}
    >
      <div
        onClick={() => setShowPrivacy(false)}
        className="fixed z-50 right-0 top-2 p-2  mr-0 sm:mr-4 space-y-2 group group-hover:scale-[1.1] select-none cursor-pointer"
      >
        <span className="block h-1 w-6 sm:h-1 sm:w-10 origin-center rounded-full bg-black transition-transform ease-in-out rotate-45 translate-y-1.5 group-hover:bg-primary_100"></span>
        <span className="block h-1 w-6 sm:h-1 sm:w-10  origin-center rounded-full bg-black transition-transform ease-in-out -rotate-45  -translate-y-1.5 group-hover:bg-primary_100"></span>
      </div>
      <div className="pt-20 ">
        <h1
          className={`${styles.h2}  font-bold  leading-tight text-center px-2 sm:px-0`}
        >
          PRIVACY POLICY
        </h1>
        <div className="w-full h-1 bg-secondary_100 rounded my-1"></div>
      </div>
      <div
        className={`${styles.container}  w-full   overflow-y-auto max-h-[100vh] min-h-[100vh] py-10 `}
      >
        <div></div>
        <div>
          <h3 className={`${styles.h3}`}>Information We Collect</h3>
          {privacyPolicy.informationWeCollect.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>How We Use Your Information</h3>
          {privacyPolicy.howWeUseYourInformation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Information Sharing</h3>
          {privacyPolicy.informationSharing.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Data Security</h3>
          {privacyPolicy.dataSecurity.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Your Rights</h3>
          {privacyPolicy.yourRights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Changes to This Policy</h3>
          {privacyPolicy.changesToThisPolicy}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Contact Us</h3>
          {privacyPolicy.contactUs}{" "}
          <Link
            to={`mailto:denurx@gmail.com`}
            // target="_blank"
            // rel="noopener noreferrer"
            className="underline"
          >
            support@denurx.com
          </Link>
        </div>
        <div className="pb-10 md:pb-0">
          <h3 className={`${styles.h3}`}>Aknowledgement</h3>
          {privacyPolicy.acknowledgment}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
