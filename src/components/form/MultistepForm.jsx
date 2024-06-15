import React, { useState } from "react";
import { useEffect } from "react";
import { ProviderRegistrationForm } from "./ProviderForm";
import { UserRegistrationForm } from "./UserRegistrationForm";

const MultiStepForm = ({displayForm, setDisplayForm}) => {
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
      } justify-center items-center  z-50 w-full sm:w-full inline  min-w-[80vw] sm:min-w-[30vw] sm:max-w-[600px] my-2 rounded-md sm:rounded-xl text-[#000000] border-2 bg-white border-[#cacaca] transition`}
    >
      <div className=" sm:p-8 w-[100%] sm:min-w-[30vw] sm:max-w-[600px]">
        {step === 1 && (
          <StepOne onProviderSelection={handleProviderSelection} />
        )}
        {step === 2 && isProvider === true && (
          <ProviderRegistrationForm
            onBack={handleBack}
            onSubmit={handleProviderSubmit}
            showback={true}
          />
        )}
        {step === 2 && isProvider === false && (
          <UserRegistrationForm
            onBack={handleBack}
            onSubmit={handleUserSubmit}
            showback={true}
              text={true}
          />
        )}
      </div>

    </div>
  );
};

const StepOne = ({ onProviderSelection }) => (
  <div className={`animate-slide-in text-black text-center`}>
    <h2 className="text-2xl font-bold mb-2">Are you a healthcare provider?</h2>
    <div className="flex justify-center items-center gap-6 text-center">
      <button
        className={`inline-block md:text-sm rounded-full cursor-pointer p-2 bg-primary outline-none  px-4 py-2 sm:px-4 sm:py-2 text-xxs text-black border border-[transparent] sm:text-base font-medium  focus:border-white`}
        onClick={() => onProviderSelection(true)}
      >
        Yes
      </button>
      <button
        className={`inline-block md:text-sm rounded-full cursor-pointer p-2 bg-secondary_100 outline-none  px-4 py-2 sm:px-4 sm:py-2 text-xxs text-white border border-[transparent] sm:text-base font-medium  focus:border-white`}
        onClick={() => onProviderSelection(false)}
      >
        No
      </button>
    </div>
  </div>
);


export default MultiStepForm;
