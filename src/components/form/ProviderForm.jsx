import { useState, useEffect } from "react";
import { styles } from "../../styles";

export const ProviderRegistrationForm = ({
  status,
  message,
  onValidated,
  onBack,
  onSubmit,
  showBack,
}) => {
  const [providerData, setProviderData] = useState({
    name: "",
    gender: "",
    professionalTitle: "",
    affiliations: "",
    email: "",
  });
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    message: "",
    error: false,
    display: false,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProviderData({ ...providerData, [name]: value });

    if (name === "professionalTitle" && value === "other") {
      setIsOtherSelected(true);
      setProviderData({ ...providerData, professionalTitle: "" });
    } else if (name === "professionalTitle" && value === "") {
      setIsOtherSelected(false);
    }
  };


  useEffect(() => {
    if (status === "success") {
      setProviderData({
        name: "",
        gender: "",
        professionalTitle: "",
        affiliations: "",
        email: "",
      });
      setResponse({
        message: `Thank you ${providerData.name} for Joining the Revolution, We'd keep you Updated!`,
        error: false,
        display: true,
      });
      setLoading(false);
      setTimeout(() => {
        closeResponse();
        setResponse({ message: ``, error: false, display: false });
      }, 10000);
    } else if (status === "error") {
      setResponse({
        message:
          "Something went wrong while joining waitlist, kindly ensure you input the right information and try again!",
        error: true,
        display: true,
      });
      setLoading(false);
      setTimeout(() => {
        closeResponse();
        setResponse({ message: ``, error: false, display: false });
      }, 5000);
    } else if (status === "sending") {
      setLoading(true);
    }
  }, [status, message]);

  const closeResponse = () => {
    setResponse({ message: "", error: false, display: false });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(providerData);
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        !providerData.name ||
        !providerData.email ||
        !providerData.affiliations ||
        !providerData.gender ||
        !providerData.professionalTitle
      ) {
        throw new Error("Ensure all fields are properly filled");
      } else {
        onValidated({
          MERGE0: providerData.email,
          MERGE1: providerData.name,
          MERGE2: providerData.gender,
          MERGE3: providerData.professionalTitle,
          MERGE4: providerData.affiliations,
          MERGE5: providerData.affiliations,
        });
      }
    } catch (error) {
      setLoading(false);
      setResponse({ message: error.message, error: true, display: true });
    }
  };

  return (
    <div
      id=""
      className="min-w-[250px]  self-center animate-slide-in text-black w-[100%] sm:min-w-[30vw] sm:max-w-[600px] my-2 rounded-md sm:rounded-xl  border-2 bg-white dark:bg-dark-backgroundNav border-grey_100 transition"
    >
      <h2 className={`${styles.h4}  font-semibold  text-center`}>
        Provider Registration
      </h2>
      <form
        onSubmit={handleSubmit}
        className={`relative flex flex-col gap-2 p-4 w-[100%] min-w-[80vw] sm:min-w-[30vw] sm:max-w-[600px] my-2  text- bg-white dark:bg-dark-backgroundNav  animate-slide-in`}
      >
        {response.display && (
          <div
            className={`${
              response.error
                ? "bg-secondary_100 text-white "
                : "transparentOverlay text-black"
            } relative p-4 sm:p-10 rounded-md animate-slide-in `}
          >
            {response.message}
            <span
              className="font-semibold text-black absolute top-0 right-0 z-10 w-5 h-5 sm:w-10 sm:h-10 p-1 sm:p-2 rounded-full m-1 cursor-pointer text-center transition"
              onClick={closeResponse}
            >
              X
            </span>
          </div>
        )}
        <div className="">
          <label className={`dark:text-white`} htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="input your name here"
            value={providerData.name}
            onChange={handleChange}
            className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-black dark:text-dark-white sm:text-base p-2 outline-none border border-[transparent] dark:border-dark-inputborder bg-grey_300 dark:bg-dark-backgroundNav  focus:border-white"
          />
        </div>
        <div className="">
          <label className={`text-black dark:text-white`} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="input your email here"
            value={providerData.email}
            onChange={handleChange}
            className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-black dark:text-dark-white sm:text-base p-2 outline-none border border-[transparent] dark:border-dark-inputborder bg-grey_300 dark:bg-dark-backgroundNav  focus:border-white"
          />
        </div>
        <div className="">
          <label className={`text-black dark:text-white`} htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            required
            value={providerData.gender}
            onChange={handleChange}
            className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-grey_500 dark:text-dark-white  sm:text-base p-2 outline-none border border-[transparent] dark:border-dark-inputborder bg-grey_300 dark:bg-dark-backgroundNav n  focus:border-white"
          >
            <option value="">select your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="">
          <label
            className={`text-black dark:text-white`}
            htmlFor="professionalTitle"
          >
            Professional Title
          </label>
          {!isOtherSelected && (
            <select
              id="professionalTitle"
              name="professionalTitle"
              required
              value={providerData.professionalTitle}
              onChange={handleChange}
              className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-grey_500 dark:text-dark-white  sm:text-base p-2 outline-none border border-[transparent] dark:border-dark-inputborder bg-grey_300 dark:bg-dark-backgroundNav n  focus:border-white"
            >
              <option value="">Select your professional title</option>
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
          )}
          {isOtherSelected && (
            <input
              type="text"
              id="professionalTitle"
              name="professionalTitle"
              required
              value={providerData.professionalTitle}
              placeholder="Please input your professional title"
              onChange={handleChange}
              className="w-full my-4 p-2 border  rounded text-black dark:border-dark-inputborder bg-grey_300 dark:bg-dark-backgroundNav"
            />
          )}
        </div>

        <div className="">
          <label
            className={`text-black dark:text-white`}
            htmlFor="affiliations"
          >
            Professional Affiliations
          </label>
          <input
            type="text"
            id="affiliations"
            name="affiliations"
            required
            placeholder="Medical Facility you work with"
            value={providerData.affiliations}
            onChange={handleChange}
            className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-grey_500 dark:text-dark-white  sm:text-base p-2 outline-none border border-[transparent] dark:border-dark-inputborder bg-grey_300 dark:bg-dark-backgroundNav n  focus:border-white"
          />
        </div>

        <div className="flex justify-center items-center gap-6">
          {!loading && showBack && (
            <button
              type="button"
              className={`${styles.button_secondary2} hover:border-black hover:text-black`}
              onClick={onBack}
            >
              Back
            </button>
          )}
          <input
            type="submit"
            value={loading ? "Joining Waitlist..." : "Join Our Wailtlist Now"}
            disabled={loading}
            className={`${styles.button_primary2} ${
              loading ? "bg-secondary_100" : "bg-primary"
            } `}
          />
        </div>
      </form>
    </div>
  );
};
