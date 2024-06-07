import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { WaitlistContext } from "../context/waitlistContext";
import { styles } from "../styles";
import { baseUrl } from "../../config";

const NotFound = () => {
  const { showJoinwaitlist, setShowJoinwaitlist } = useContext(WaitlistContext);
  return (
    <div
      id="notfound"
      className={`${styles.container} flex flex-col justify-center items-center bg-notFoundbg fullbg sm:fullbgAuto h-screen mt-20`}
    >
      <h1
        className={`text-5xl md:text-6xl lg:7xl xl:text-7xl font-bold leading-tight  text-secondary_100`}
      >
        404 Error
      </h1>
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold leading-snug text-center text-black`}
      >
        Opps!, you seem to be Looking in The Wrong Direction{" "}
      </h2>
      <div className=" flex gap-6 sm:gap-8 sm:py-4 md:py-4 my-4">
        <HashLink to={`${baseUrl}`}>
          <button
            className={` rounded-[30px] bg-primary px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] hover:bg-primary_200 focus:border-white transition duration-150`}
          >
            Go Home
          </button>
        </HashLink>
        <button
          onClick={() => setShowJoinwaitlist(true)}
          className={`rounded-[30px]  bg-primaryBtn px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal  text-primary-700 border border-[transparent] animate-pulse hover:bg-secondary_100 focus:border-white transition duration-150`}
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default NotFound;
