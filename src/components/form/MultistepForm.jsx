// src/components/MultiStepForm.js
import React, { useState } from 'react';
import { styles } from '../../styles';

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
    <div className={`${close?"hidden":"flex"} fixed bottom-0 z-50 right-0 w-[auto] inline  bg-black bg-opacity-50 md:rounded-[50px]`}>
      <div className="bg-black bg-opacity-50 p-8 md:rounded-[50px] shadow-md w-full max-w-md">
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
  <div className={`animate-slide-in text-center`}>
    <h2 className="text-2xl font-bold mb-4">Are you a healthcare provider?</h2>
    <div className="flex justify-center items-center space-x-4 text-center">
      <button
        className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => onProviderSelection(true)}
      >
        Yes
      </button>
      <button
        className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => onProviderSelection(false)}
      >
        No
      </button>
    </div>
  </div>
);

const ProviderRegistrationForm = ({ onBack }) => (
  <div className={`animate-slide-in`}>
    <h2 className="text-2xl font-bold mb-4">Provider Registration</h2>
    <form>
      {/* Add your form fields here */}
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" className="w-full p-2 border rounded" />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          className="bg-gray-500 text-black py-2 px-4 rounded hover:bg-gray-600"
          onClick={onBack}
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-green-500 text-black py-2 px-4 rounded hover:bg-green-600"
        >
          Register
        </button>
      </div>
    </form>
  </div>
);

const UserRegistrationForm = ({ onBack }) => (
  <div className={`animate-slide-in`}>
    <h2 className="text-2xl font-bold mb-4">User Registration</h2>
    <form>
      {/* Add your form fields here */}
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" className="w-full p-2 border rounded" />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          className="bg-gray-500 text-black py-2 px-4 rounded hover:bg-gray-600"
          onClick={onBack}
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-green-500 text-black py-2 px-4 rounded hover:bg-green-600"
        >
          Register
        </button>
      </div>
    </form>
  </div>
);

export default MultiStepForm;
