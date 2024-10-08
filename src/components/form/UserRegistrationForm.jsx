import { useState, useEffect } from "react";
import { styles } from "../../styles";

export const UserRegistrationForm = ({
  status,
  message,
  showBack = false,
  onValidated,
  onBack,
  onSubmit,
  text = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    message: "",
    error: false,
    display: false,
  });
  const [userForm, setForm] = useState({
    fullname: "",
    email: "",
    healthcareProvider:"no"
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...userForm,
      [name]: value,
    });
  };

  

  useEffect(() => {
    if (status === "success") {
      setForm({
        fullname: "",
        email: "",
        healthcareProvider:"no"
      });
      setResponse({
        message: `Thank you ${userForm.fullname} for Joining the Revolution, We'd keep you Updated!`,
        error: false,
        display: true,
      });
      setLoading(false);
      setTimeout(() => {
        closeResponse();
        setResponse({ message: ``, error: false, display: false });
      }, 5000);
    } else if (status === "error") {
      setResponse({
        message:
          "Something went wrong while joining waitlist, kindly ensure you input the right information!",
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

  }, [status]); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!userForm.fullname || !userForm.email) {
        throw new Error("Email and Full name are both required");
      } else {
        setLoading(true);
        onValidated({
          MERGE0: userForm.email,
          MERGE1: userForm.fullname,
          MERGE5:userForm.healthcareProvider
        });
      }
    } catch (error) {
      setLoading(false);
      setResponse({ message: error.message, error: true, display: true });
    }
  };

  const closeResponse = () => {
    setResponse({ message: "", error: false, display: false });
  };

  return (
    <div
      id=""
      className="min-w-[200px]  self-center animate-slide-in text-black w-[100%] sm:min-w-[30vw] sm:max-w-[600px] my-2 rounded-md sm:rounded-xl  border-2 bg-white dark:bg-dark-backgroundNav  border-grey_100 transition"
    >
      <h2 className={`${styles.h4} font-semibold mb-4 text-center`}>
        User Registration
      </h2>
      <form
        action="  POST"
        className="relative flex flex-col gap-6 p-4 w-[100%]  min-w-[80vw] sm:min-w-[30vw] sm:max-w-[600px] my-2 text-black  bg-white dark:bg-dark-backgroundNav  animate-slide-in"
        onSubmit={handleSubmit}
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
        <div className="flex flex-col justify-center items-start w-[auto]">
          <label htmlFor="fullname" className={`dark:text-white`}>
            Full Name:
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            required
            placeholder="Enter your full name"
            className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-grey_500 dark:text-dark-white sm:text-base p-2 outline-none border border-[transparent] dark:border-dark-inputborder bg-grey_300 dark:bg-dark-backgroundNav  focus:border-white"
            value={userForm.fullname}
            onChange={handleFormChange}
          />
        </div>

        <div className="flex flex-col justify-center items-start w-[auto]">
          <label htmlFor="email" className={`dark:text-white`}>
            Email Address:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email address"
            className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-grey_500 dark:text-dark-white sm:text-base p-2 outline-none border border-[transparent] dark:border-dark-inputborder bg-grey_300 dark:bg-dark-backgroundNav  focus:border-white"
            value={userForm.email}
            onChange={handleFormChange}
          />
        </div>

        <div className=" hidden flex-col justify-center items-start w-[auto]">
          <label
            className={`text-black dark:text-white`}
            htmlFor="healthcareProvider"
          >
            Healthcare Provider
          </label>
          <input
            type="text"
            id="healthcareProvider"
            name="healthcareProvider"
            required
            hidden
            value={userForm.healthcareProvider}
            onChange={handleFormChange}
            readOnly={true}
            className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-grey_500 dark:text-dark-white sm:text-base p-2 outline-none border border-[transparent] dark:border-dark-inputborder bg-grey_300 dark:bg-dark-backgroundNav  focus:border-white"
          />
        </div>

        <div className="flex justify-center items-center gap-6">
          {!loading && showBack && (
            <button
              type="button"
              className={`${styles.button_secondary2}  hover:border-black hover:text-black`}
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
