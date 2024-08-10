import React, { useState, useEffect } from "react";

const CustomForm = ({ status, message, onValidated }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    message: "",
    error: false,
    display: false,
  });
  const [form, setForm] = useState({
    fullname: "",
    email: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    if (status === "success") {
      setForm({
        fullname: "",
        email: "",
      });
      setResponse({ message: `Thank you ${form.fullname} for Joining the Revolution, We'd keep you Updated!`, error: false, display: true });
      setLoading(false);
      setTimeout(() => {
        closeResponse();
        setResponse({ message: ``, error: false, display: false });    
      }, 5000); 
    } else if (status === "error") {
      setResponse({ message: "Something went wrong while joining waitlist, kindly ensure you input the right information!", error: true, display: true });
      setLoading(false);
      setTimeout(() => {
        closeResponse();
        setResponse({ message: ``, error: false, display: false });
      }, 5000); 
    }
  }, [status, message]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!form.fullname || !form.email) {
        throw new Error("Email and Full name are both required");
      } else {
        setLoading(true);
         onValidated({
            EMAIL: form.email,
            FULLNAME: form.fullname,
          });
      }
    } catch (error) {
      setLoading(false);
      setResponse({ message:error.message, error: true, display: true });
    }
  };

  const closeResponse = () => {
    setResponse({ message: "", error: false, display: false });
  };


  return (
    <form
      action="POST"
      className="relative flex flex-col gap-6 p-4 w-[100%] min-w-[80vw] sm:min-w-[30vw] sm:max-w-[600px] my-2 rounded-md sm:rounded-xl text-[#000000] border-2 bg-white border-[#cacaca] transition"
      onSubmit={handleSubmit}
    >
      {response.display && (
        <div
          className={`${
            response.error ? "bg-secondary_100 text-white" : "transparentOverlay text-black"
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
      <div className="flex flex-col justify-center items-start w-[auto] sm:min-w-[500px]">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter your email address"
          className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-[#000000] sm:text-base p-2 outline-none border border-[transparent] bg-[#939191] placeholder-white focus:border-white"
          value={form.email}
          onChange={handleFormChange}
        />
      </div>
      <div className="flex flex-col justify-center items-start w-[auto] sm:min-w-[500px]">
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          required
          placeholder="Enter your full name"
          className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-[#000000] sm:text-base p-2 outline-none border border-[transparent] bg-[#939191] placeholder-white focus:border-white"
          value={form.fullname}
          onChange={handleFormChange}
        />
      </div>
      <input
        type="submit"
        value={loading ? "Joining Waitlist..." : "Join Our Wailtlist Now"}
        disabled={loading} 
        className={`${
          loading ? "bg-secondary_100" : "bg-secondary"
        } rounded-[30px] bg-primaryBtn  px-4 py-2 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal  text-primary-700 border border-[transparent] animate-pulse hover:bg-secondary_100 focus:border-white transition duration-150 cursor-pointer`}
      />
    </form>
  );
};

export default CustomForm;
