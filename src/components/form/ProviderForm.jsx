import { useState } from "react";
import { styles } from "../../styles";

export const ProviderRegistrationForm = ({ onBack, onSubmit, showBack = false }) => {
    const [providerData, setProviderData] = useState({
      name: "",
      gender: "",
      professionalTitle: "",
      affiliations: "",
      email: "",
    });
    const [isOtherSelected, setIsOtherSelected] = useState(false);
    const [loading, setLoading] = useState(false)
  
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
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(providerData);
    };
  
    return (
      <div id="" className="min-w-[250px]  self-center animate-slide-in text-black w-[100%] sm:min-w-[30vw] sm:max-w-[600px] my-2 rounded-md sm:rounded-xl  border-2 bg-white border-[#cacaca] transition">
        <h2 className={`${styles.h4} font-semibold  text-center`}>
          Provider Registration
        </h2>
        <form onSubmit={handleSubmit} className={`relative flex flex-col gap-2 p-4 w-[100%] min-w-[80vw] sm:min-w-[30vw] sm:max-w-[600px] my-2  text-[#000000] bg-white  animate-slide-in`}>
          <div className="">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="input your name here"
              value={providerData.name}
              onChange={handleChange}
              className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-[#000000] sm:text-base p-2 outline-none border border-[transparent] bg-[#eaecf0a7]  focus:border-white"
            />
          </div>
          <div className="">
            <label className="block text-gray-700" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={providerData.gender}
              onChange={handleChange}
              className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-[#9ca3af]  sm:text-base p-2 outline-none border border-[transparent] bg-[#eaecf0a7]  focus:border-white"
            >
              <option value="">select your Gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
  
          <div className="">
            <label className="block text-gray-700" htmlFor="professionalTitle">
              Professional Title
            </label>
            {!isOtherSelected && (
              <select
                id="professionalTitle"
                name="professionalTitle"
                required
                value={providerData.professionalTitle}
                onChange={handleChange}
                className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-[#9ca3af] sm:text-base p-2 outline-none border border-[transparent] bg-[#eaecf0a7]  focus:border-white"
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
                className="w-full my-4 p-2 border  rounded text-black"
              />
            )}
          </div>
  
          <div className="">
            <label className="block text-gray-700" htmlFor="affiliations">
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
              className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-[#000000] sm:text-base p-2 outline-none border border-[transparent] bg-[#eaecf0a7]  focus:border-white"
            />
          </div>
  
          <div className="">
            <label className="block text-gray-700" htmlFor="email">
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
              className="w-[100%] h-10 rounded-md sm:rounded-sm text-sm text-[#000000] sm:text-base p-2 outline-none border border-[transparent] bg-[#eaecf0a7]  focus:border-white"
            />
          </div>
  
          <div className="flex justify-center items-center gap-6">
          {  showBack && <button
              type="button"
              className={`${styles.button_secondary2} hover:border-black hover:text-black`}
              onClick={onBack}
            >
              Back
            </button>}
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