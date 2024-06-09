// src/components/MultiStepForm.js
import React, { useState } from "react";
import { styles } from "../../styles";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isProvider, setIsProvider] = useState(null);
  const [close, setClose] = useState(false);

  const handleClose = (e) => {
    e.stopPropagation();
    setClose(true);
  };

  const handleProviderSelection = (selection) => {
    setIsProvider(selection);
    setStep(2);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div
      className={`${
        close ? "hidden" : "flex"
      } justify-center items-center fixed bottom-0  right-0 top-0 left-0 z-50 w-full sm:w-full inline  bg-black bg-opacity-90`}
    >
      <div className="bg-black bg-opacity-50 p-8 md:rounded-0 shadow-md w-[fit-content]">
        {step === 1 && (
          <StepOne onProviderSelection={handleProviderSelection} />
        )}
        {step === 2 && isProvider === true && (
          <ProviderRegistrationForm onBack={handleBack} />
        )}
        {step === 2 && isProvider === false && (
          <UserRegistrationForm onBack={handleBack} />
        )}
      </div>

      <span
        className="font-semibold absolute top-0 right-0 z-20 w-5 h-5 sm:w-10 sm:h-10 p-1 sm:p-2 rounded-full m-1 cursor-pointer text-white text-center text-[20px] sm:text-[30px] transition"
        onClick={handleClose}
      >
        X
      </span>
    </div>
  );
};

const StepOne = ({ onProviderSelection }) => (
  <div className={`animate-slide-in text-white text-center`}>
    <h2 className="text-2xl font-bold mb-2">Are you a healthcare provider?</h2>
    <div className="flex justify-center items-center gap-6 text-center">
      <button
        className={`inline-block md:text-sm rounded-full cursor-pointer p-2 bg-primary outline-none  px-4 py-2 sm:px-4 sm:py-2 text-xxs text-white sm:text-base font-medium border focus:border-white`}
        onClick={() => onProviderSelection(true)}
      >
        Yes
      </button>
      <button
        className={`inline-block md:text-sm rounded-full cursor-pointer p-2 bg-secondary_100 outline-none  px-4 py-2 sm:px-4 sm:py-2 text-xxs text-white sm:text-base font-medium border focus:border-white`}
        onClick={() => onProviderSelection(false)}
      >
        No
      </button>
    </div>
  </div>
);

const ProviderRegistrationForm = ({ onBack }) => (
  <div className={`animate-slide-in text-white`}>
    <h2 className="text-2xl font-bold mb-4">Provider Registration</h2>
    <form>
      {/* Add your form fields here */}
      <div className="mb-4 ">
        <label className="block text-gray-700">Name</label>
        <input type="text" className="w-full p-2 border rounded text-black" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 ">Professional Title:</label>
        <select name="professionalTitle" id="professionalTitle" className="w-full p-2 border rounded text-black">
          <option value="doctor">Doctor</option>
          <option value="nurse">Nurse</option>
          <option value="therapist">Therapist</option>
          <option value="pharmacist">Pharmacist</option>
          <option value="dentist">Dentist</option>
          <option value="optometrist">Optometrist</option>
          <option value="physicianAssistant">Physician Assistant</option>
          <option value="chiropractor">Chiropractor</option>
          <option value="other">Other</option>
        </select>

        {/* <input type="email" className="w-full p-2 border rounded" /> Professional Affiliations: */}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Professional Affiliations</label>
        <input type="text" className="w-full p-2 border rounded text-black" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" className="w-full p-2 border rounded text-black" />
      </div>
      <div className="flex justify-center items-center gap-6">
        <button
          type="button"
          className={`inline-block md:text-sm rounded-full cursor-pointer p-2 bg-secondary_100 outline-none  px-4 py-2 sm:px-4 sm:py-2 text-xxs text-white sm:text-base font-medium border focus:border-white`}
          onClick={onBack}
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-block md:text-sm rounded-full cursor-pointer p-2 bg-primary outline-none  px-4 py-2 sm:px-4 sm:py-2 text-xxs text-white sm:text-base font-medium border focus:border-white"
        >
          Register
        </button>
      </div>
    </form>
  </div>
);

const UserRegistrationForm = ({ onBack }) => (
  <div className={`animate-slide-in text-white`}>
    <h2 className="text-2xl font-bold mb-4">User Registration</h2>
    <form>
      {/* Add your form fields here */}
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" className="w-full p-2 border rounded text-black" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" className="w-full p-2 border rounded text-black" />
      </div>
      <div className="flex justify-center items-center gap-6">
        <button
          type="button"
          className={`inline-block md:text-sm rounded-full cursor-pointer p-2 bg-secondary_100 outline-none  px-4 py-2 sm:px-4 sm:py-2 text-xxs text-white sm:text-base font-medium border focus:border-white`}
          onClick={onBack}
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-block md:text-sm rounded-full cursor-pointer p-2 bg-primary outline-none  px-4 py-2 sm:px-4 sm:py-2 text-xxs text-white sm:text-base font-medium border focus:border-white"
        >
          Register
        </button>
      </div>
    </form>
  </div>
);

export default MultiStepForm;
