import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { WaitlistContext } from "../context/waitlistContext";

import { styles } from "../styles";
import { nav } from "../assets/text";
import JoinWaitlist from "./form/JoinWaitlist";
import { baseUrl } from "../../config";

const NavItem = ({ title, active, handleClick, mobile, index }) => {
  return (
    <HashLink
      className={`${
        active === title ? " text-secondary" : "text-black" 
      } ${
        mobile
          ? `mb-6  ${
              active === title ? "" : ""
            }`
          : "mr-4 md:mr-8"
      }   inline-block uppercase  py-2 px-4 cursor-pointer   hover:text-secondary_100`}
      // to={`${baseUrl}/#${title.toLowerCase()}`}
      to={
        title.toLowerCase() === "services"
          ? `${baseUrl}/services`
          : `${baseUrl}/#${title.toLowerCase()}`
      }
      onClick={() => handleClick(title)}
    >
      {title}
      <li></li>
    </HashLink>
  );
};

const Nav = () => {
  const [active, setActive] = useState(nav[0].title);
  const [activeMenu, setActiveMenu] = useState(false);
  const { showJoinwaitlist, setShowJoinwaitlist } = useContext(WaitlistContext);
  const [isVisible, setIsVisible] = useState(true);
  const [time, setTime] = useState(activeMenu? 5000:2000)
  let timeoutId = null;
  // let time = activeMenu? 5000:2000
  

  const handleScroll = () => {
    setIsVisible(true);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, time); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ activeMenu, time]);


  const handleClick = (value) => {
    setActive(value);
    
  };
  
  const handleMouseEnter = () => {
    setIsVisible(true)
    setTime(100000)
    // console.log("mouse entered")
  }

  const handleMouseLeave = () => {
    // setIsVisible(true)
    setTime(2000)
    // console.log("mouse leave")
  }

  return (
    <>
    <nav
    onMouseEnter={() => handleMouseEnter()}
    onMouseLeave={() => handleMouseLeave()}
      className={`${styles.nav} ${
        isVisible ? "flex" : " hidden"
      } fixed top-0 z-20 h-20 w-screen px-4 md:px-10 lg:px-20 xl:px-20  justify-between items-center bg-white text-black font-bold border-b-2 border-[#0048ff44] animate-slide-in`}
    >
      <HashLink to={`${baseUrl}`}>
        <img
          src={`/logo.png`}
          alt="Denurx Logo"
          className="w-12 h-12 md:w-16 md:h-16 sm:p-2"
        />
      </HashLink>
      {/* </a> */}
      <div className="flex flex-col items-center justify-center mb-">
        <ul className="hidden lg:flex items-center ">
          {nav.map((nav, index) => (
            <NavItem
              key={index}
              {...nav}
              index={index}
              active={active}
              handleClick={handleClick}
              mobile={false}
            />
          ))}
        </ul>
      </div>
      <button
        onClick={() => setShowJoinwaitlist(true)}
        className={`${styles.button_primary} hidden md:inline-block rounded-[15px]`}
      >
        Join Waitlist
      </button>
      {/* </a> */}
      <div
        onClick={() => setActiveMenu(true)}
        class="group flex lg:hidden  cursor-pointer items-center justify-center rounded-3xl bg-whit p-2 hover:bg-slate-200"
      >
        <div class="space-y-2 group-hover:scale-[1.1] select-none">
          <span class="block  h-1 w-8 sm:h-1 sm:w-10 origin-center rounded-full bg-black transition-transform ease-in-out group-hover:bg-primary_100"></span>
          <span class="block h-1 w-6 sm:h-1 sm:w-8  origin-center rounded-full bg-black transition-transform ease-in-out group-hover:bg-primary_100"></span>
        </div>
      </div>

      {/* {activeMenu && ( */}
      <aside
        className={`${
          activeMenu ? "flex" : "hidden"
        } flex-col lg:hidden absolute top-0 w-[50%] h-screen right-0 p-4 bg-[#eaecf0] animate-slide-in-right`}
      >
        <div
          onClick={() => setActiveMenu(false)}
          class="group flex lg:hidden h-10 w-10 cursor-pointer items-center justify-center rounded-3xl bg-whit p-2"
        >
          <div class="space-y-2 group-hover:scale-[1.1] select-none">
            <span class="block h-1 w-6 sm:h-1 sm:w-10 origin-center rounded-full bg-black transition-transform ease-in-out rotate-45 translate-y-1.5 group-hover:bg-primary_100"></span>
            <span class="block h-1 w-6 sm:h-1 sm:w-10  origin-center rounded-full bg-black transition-transform ease-in-out -rotate-45  -translate-y-1.5 group-hover:bg-primary_100"></span>
          </div>
        </div>
        <ul className="flex flex-col mt-20">
          {nav.map((nav, index) => (
            <NavItem
              key={index}
              {...nav}
              index={index}
              active={active}
              handleClick={handleClick}
              mobile={true}
            />
          ))}
        </ul>

        <button
          onClick={() => setShowJoinwaitlist(true)}
          className={`${styles.button_primary}`}
        >
          Join Waitlist
        </button>
      </aside>
    </nav>
      {showJoinwaitlist && (
        <JoinWaitlist setShowJoinwaitlist={setShowJoinwaitlist} showJoinwaitlist={showJoinwaitlist} />
      )}
    </>
  );
};

export default Nav;
