import React, { useState } from "react";
import MailChimp from "./MailChimp";
import MailChimp2 from "./Mailchimp2";
import { styles } from "../../styles";

const MultiStepForm = ({ displayForm, setDisplayForm }) => {
  const [step, setStep] = useState(1);
  const [isProvider, setIsProvider] = useState(null);
  // const [close, setClose] = useState(false);

  const handleProviderSelection = (selection) => {
    setIsProvider(selection);
    setStep(2);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleProviderSubmit = (data) => {
    console.log("Provider data:", data);
    // Handle provider registration (e.g., API call)
  };

  const handleUserSubmit = (data) => {
    console.log("User data:", data);
    // Handle user registration (e.g., API call)
  };

  return (
    <div
      className={`${
        displayForm ? "flex" : "flex"
      } justify-center items-center  z-50 w-full sm:w-full inline  min-w-[80vw] sm:min-w-[30vw] sm:max-w-[600px] my-2 p-2 rounded-md sm:rounded-xl text-black bg-white  dark:bg-dark-background3 transition`}
    >
      <div className=" sm:p-8 w-[100%] sm:min-w-[30vw] sm:max-w-[600px]">
        {step === 1 && (
          <StepOne onProviderSelection={handleProviderSelection} />
        )}
        {step === 2 && isProvider === true && (
          <MailChimp2
            onBack={handleBack}
            onSubmit={handleProviderSubmit}
            showBack={true}
          />
        )}
        {step === 2 && isProvider === false && (
          <MailChimp
            onBack={handleBack}
            onSubmit={handleUserSubmit}
            showBack={true}
            text={true}
          />
        )}
      </div>
    </div>
  );
};

const StepOne = ({ onProviderSelection }) => (
  <div className={`animate-slide-in text-black text-center`}>
    <h2 className="text-2xl font-bold mb-2 text-black dark:text-dark-text">
      Are you a healthcare provider?
    </h2>
    <div className="flex justify-center items-center gap-6 text-center">
      <button
        className={`${styles.button_secondary2} hover:border-black hover:text-black`}
        onClick={() => onProviderSelection(true)}
      >
        Yes
      </button>
      <button
        className={`${styles.button_primary2}`}
        onClick={() => onProviderSelection(false)}
      >
        No
      </button>
    </div>
  </div>
);

export default MultiStepForm;
