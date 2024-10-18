import { useState, useContext, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { WaitlistContext } from "../context/waitlistContext";
import JoinWaitlist from "./form/JoinWaitlist";
import { styles } from "../styles";
import { nav } from "../assets/text";

const NavItem = ({ title, active, handleClick, mobile, index }) => {
  return (
    <HashLink
      className={`capitalize ${
        active === title ? " text-secondary " : "text-black dark:text-dark-text" 
      } $ ${
        mobile
          ? `mb-6  ${
              active === title ? "" : ""
            }`
          : "mr-4 md:mr-8"
      }   inline-block uppercase  py-2 px-4 cursor-pointer   hover:text-secondary_100 text-nowrap`}
      // to={`/#${title.toLowerCase()}`}
      to={
        title.toLowerCase() === "services"
          ? `/services`
          : `/#${title.toLowerCase()}`
      }
      onClick={() => handleClick(title)}
    >
      {title}
      {/* <li></li> */}
    </HashLink>
  );
};

const Nav = () => {
  const [active, setActive] = useState(() => {
    // Initialize state from localStorage or default to a starting item
    return localStorage.getItem('activeNavItem') || nav[0].title;
  });
  const [activeMenu, setActiveMenu] = useState(false);
  const { showJoinwaitlist, setShowJoinwaitlist } = useContext(WaitlistContext);
  
  const handleClick = (value) => {
    setActive(value);
    localStorage.setItem('activeNavItem', value);
    
  };

  useEffect(() => {
    // Restore active item from localStorage on component mount
    const storedItem = localStorage.getItem('activeNavItem');
    if (storedItem) {
      setActive(storedItem);
    }
  }, []);
  

  return (
    <>
    <nav
      className={`${styles.nav} flex fixed top-0 z-20 h-20 w-screen px-4 md:px-10 lg:px-20 xl:px-20  justify-between items-center bg-white dark:bg-dark-backgroundNav  text-black font-bold border-b-2 border-primary_300 animate-slide-in max-w-[2500px]`}
    >
      <HashLink to={`/#home`}>
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
        className={`${styles.button_primar}  rounded-[15px] bg-primary px-4 py-2 sm:px-4 sm:py-4 text-xxs text-white sm:text-base text-nowrap font-medium uppercase leading-none  text-primary-700 animate-pulse hover:animate-pop-up-infinite focus:border-white transition duration-150 hidden md:inline-block `}
      >
        Join Waitlist
      </button>
      {/* </a> */}
      <div
        onClick={() => setActiveMenu(true)}
        className="group flex lg:hidden  cursor-pointer items-center justify-center rounded-3xl bg-whit p-2 hover:bg-slate-200"
      >
        <div className="space-y-2 group-hover:scale-[1.1] select-none">
          <span className="block  h-1 w-8 sm:h-1 sm:w-10 origin-center rounded-full bg-black dark:bg-white transition-transform ease-in-out group-hover:bg-primary_100"></span>
          <span className="block h-1 w-6 sm:h-1 sm:w-8  origin-center rounded-full bg-black dark:bg-white transition-transform ease-in-out group-hover:bg-primary_100"></span>
        </div>
      </div>

      {/* {activeMenu && ( */}
      <aside
        className={`${
          activeMenu ? "flex" : "hidden"
        } flex-col lg:hidden absolute top-0 w-[50%] h-screen right-0 p-4 bg-grey_30 border-l-2 border-primary_300 dark:bg-dark-backgroundNav animate-slide-in-right`}
      >
        <div
          onClick={() => setActiveMenu(false)}
          className="group flex lg:hidden h-10 w-10 cursor-pointer items-center justify-center rounded-3xl bg-whit p-2"
        >
          <div className="space-y-2 group-hover:scale-[1.1] select-none">
            <span className="block h-1 w-6 sm:h-1 sm:w-10 origin-center rounded-full bg-black dark:bg-white transition-transform ease-in-out rotate-45 translate-y-1.5 group-hover:bg-primary_100"></span>
            <span className="block h-1 w-6 sm:h-1 sm:w-10  origin-center rounded-full bg-black dark:bg-white transition-transform ease-in-out -rotate-45  -translate-y-1.5 group-hover:bg-primary_100"></span>
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
          className={`${styles.button_primary} self-start`}
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
