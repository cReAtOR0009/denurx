import  { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {WaitlistContext} from "../context/waitlistContext"

import { styles } from "../styles";
import { nav } from "../assets/text";
import JoinWaitlist from "./form/JoinWaitlist";



const NavItem = ({ title, active, handleClick, mobile, index }) => {

  return (
    <HashLink
      className={`${
        active === title ? "border-b-4 text-secondary" : "text-black"
      } ${
        mobile ? `mb-6 border-b-4 border-b-[transparent] ${active === title ?"border-b-secondary":"border-b-[transparent]"}` : "mr-4 md:mr-8"
      }   inline-block mb-4 uppercase  py-2 px-4 cursor-pointer hover:border-b-4 hover:border-b-secondary_100 hover:text-secondary_100`}
      to={`/denurx/#${title.toLocaleLowerCase()}`}
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
  const {showJoinwaitlist, setShowJoinwaitlist } = useContext(WaitlistContext)

  const handleClick = (value) => {
    setActive(value);
  };


  return (
    <nav
      className={`${styles.nav} fixed top-0 z-20 h-20 w-screen px-4 md:px-10 lg:px-20 xl:px-20 flex justify-between items-center bg-white text-black font-bold animate-slide-in`}
    >
      <HashLink to={"/denurx"}>
        <img
          src="./logo.png"
          alt="Logo here"
          className="w-12 h-12 md:w-16 md:h-16"
        />
      </HashLink>
      {/* </a> */}
      <div>
        <ul className="hidden lg:flex">
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
          className={`rounded-[30px]  bg-primaryBtn px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal  text-primary-700 animate-pulse hover:animate-shine focus:border-white transition duration-150`}
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
        } flex-col lg:hidden absolute top-0 w-[50%] h-screen right-0 p-4 bg-[#cacaca] animate-slide-in-right`}
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
      
          <button onClick={() => setShowJoinwaitlist(true)} className="rounded-[30px] bg-primaryBtn  px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] cursor-pointer animate-pulse hover:bg-secondary_100 focus:border-white transition duration-150">
            Join Waitlist
          </button>
      </aside>
     {showJoinwaitlist && <JoinWaitlist setShowJoinwaitlist={setShowJoinwaitlist} />}
    </nav>
  );
};

export default Nav;
