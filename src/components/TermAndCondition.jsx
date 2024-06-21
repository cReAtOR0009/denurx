import { useEffect } from "react";
import { termsAndConditions } from "../assets/text";
import { styles } from "../styles";

const TermAndCondition = ({ showTerms, setShowTerms  }) => {
  useEffect(() => {
    if (showTerms) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showTerms]);

  return (
    <div
      className={`mb-10 h-[100vh] fixed top-0 left-0 bottom-0 right-0 z-[100] pt-[2% flex flex-col justify-center items-center my-0 mx-[auto]  w-[100%]  bg-[#cacacaf0] animate-pop-up `}
    >
      <div
        onClick={() => setShowTerms(false)}
        className="fixed z-50 right-0 top-2 p-2  mr-0 sm:mr-4 space-y-2 group group-hover:scale-[1.1] select-none cursor-pointer"
      >
        <span className="block h-1 w-6 sm:h-1 sm:w-10 origin-center rounded-full bg-black transition-transform ease-in-out rotate-45 translate-y-1.5 group-hover:bg-primary_100"></span>
        <span className="block h-1 w-6 sm:h-1 sm:w-10  origin-center rounded-full bg-black transition-transform ease-in-out -rotate-45  -translate-y-1.5 group-hover:bg-primary_100"></span>
      </div>
      <div className="pt-20 ">

      <h1
        className={`${styles.h2}  font-bold  leading-tight text-center px-2 sm:px-0`}
      >
        TERMS AND CONDITIONS
      </h1>
      <div className="w-full h-1 bg-[#eaecf0a7] rounded my-1"></div>
      </div>
      <div
        className={`${styles.container}  w-full   overflow-y-auto max-h-[100vh] min-h-[100vh] py-10 `}
      >
        {/* <div></div */}
        <div>
          <h3 className={`${styles.h3}`}>Definitions</h3>
          {termsAndConditions.definitions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Use of Services</h3>
          {termsAndConditions.useOfServices.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Healthcare Services</h3>
          {termsAndConditions.healthcareServices.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Payment Terms</h3>
          {termsAndConditions.paymentTerms.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Intellectual Property</h3>
          {termsAndConditions.intellectualProperty.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Disclaimer of Warranties</h3>
          {termsAndConditions.disclaimerOfWarranties.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Limitation of Liability</h3>
          {termsAndConditions.limitationOfLiability.map((item, index) => (
            <li key={index}>{item}</li>
          ))}{" "}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Dispute Resolution</h3>
          {termsAndConditions.disputeResolution.map((item, index) => (
            <li key={index}>{item}</li>
          ))}{" "}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Governing Law</h3>
          {termsAndConditions.governingLaw}
        </div>
        <div>
          <h3 className={`${styles.h3}`}>Changes to Terms and Conditions</h3>
          {termsAndConditions.changesToTermsAndConditions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}{" "}
        </div>
        <div className="pb-10 md:pb-0">
          <h3 className={`${styles.h3}`}>Aknowledgement</h3>
          {termsAndConditions.acknowledgment}
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default TermAndCondition;
