import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { HashLink } from "react-router-hash-link";
import { WaitlistContext } from "../context/waitlistContext";
import { styles } from "../styles";

const NotFound = () => {
  const { showJoinwaitlist, setShowJoinwaitlist } = useContext(WaitlistContext);
  return (
    <div
      id="notfound"
      className={`${styles.container} flex flex-col justify-center items-center bg-notFoundbg bg-cover  bg-no-repeat bg-center-center h-screen mt-20`}
    >
       <Helmet>
       <title>404 Not Found</title>
        <meta name="description" content="Page not found." />
      </Helmet>
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
        <HashLink to={`/`}>
          <button className={`${styles.button_secondary}  hover:bg-[transparent] hover:border-white`}>
            Go Home
          </button>
        </HashLink>
        <button
          onClick={() => setShowJoinwaitlist(true)}
          className={`${styles.button_primary2} rounded-[15px] bg-primary px-4 py-2 sm:px-4 sm:py-0 text-xxs text-white sm:text-base font-medium uppercase leading-[0]  text-primary-700  hover:animate-pop-up-infinite focus:border-white transition duration-150 hover:bg-primary_100`}
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default NotFound;
