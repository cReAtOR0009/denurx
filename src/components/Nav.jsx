import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { styles } from "../styles";
import { nav } from "../assets/text";
import { menu, close } from "../assets/images";
import { animateNavItems, animateFromTo } from "../assets/animation";

const NavItem = ({ title, active, handleClick, mobile, index }) => {
  return (
    <li
      onClick={() => handleClick(title)}
      className={`${
        active === title ? "border-b-4 text-secondary" : "text-white"
      } ${
        mobile ? "mb-6" : "mr-4 md:mr-8"
      } inline-block mb-4 uppercase border-b-[red] py-2 px-4 cursor-pointer hover:border-b-4 hover:text-secondary_100`}
    >
      <HashLink to={`/#${title.toLocaleLowerCase()}`}>{title}</HashLink>
    </li>
  );
};

const Nav = () => {
  const [active, setActive] = useState(nav[0].title);
  const [activeMenu, setActiveMenu] = useState(false);
  const navRef = useRef(null);

  const handleClick = (value) => {
    setActive(value);
  };

  useEffect(() => {
    const navItems = navRef.current.querySelectorAll("li");
    animateNavItems(navItems);
    animateFromTo("#logo", "x", -150, 0);
    animateFromTo("#action_button1", "x", -150, 0, 1);
  }, []);

  return (
    <nav
      className={`${styles.nav} fixed top-0 z-20 h-20 w-screen px-4 md:px-10 lg:px-20 xl:px-20 flex justify-between items-center "bg-[transparent]"`}
    >
      {/* <a id="logo" href="#home" rel="noopener noreferrer" className=""> */}
      <HashLink to={"/#home"}>
        <img
          src="./logo.png"
          alt="Logo here"
          className="w-12 h-12 md:w-16 md:h-16"
        />
      </HashLink>
      {/* </a> */}
      <div>
        <ul className="hidden lg:flex" ref={navRef}>
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
      {/* <a  id="action_button1" href="#join wait list" rel="noopener noreferrer"> */}
      <Link to={"/waitlist"}>
        <button
          className={`rounded-[30px] bg-primaryBt btn featuresCardShadow px-4 py-2 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal  text-primary-700 border border-[transparent] hover:bg-secondary_100 focus:border-white transition duration-150`}
        >
          Join Waitlist
        </button>
      </Link>
      {/* </a> */}
      <div
        onClick={() => setActiveMenu(true)}
        class="group flex lg:hidden  cursor-pointer items-center justify-center rounded-3xl bg-whit p-2 hover:bg-slate-200"
      >
        <div class="space-y-2">
          <span class="block  h-1 w-8 sm:h-1 sm:w-10 origin-center rounded-full bg-white transition-transform ease-in-out group-hover:bg-primary_100"></span>
          <span class="block h-1 w-6 sm:h-1 sm:w-8  origin-center rounded-full bg-white transition-transform ease-in-out group-hover:bg-primary_100"></span>
        </div>
      </div>

      {activeMenu && (
        <div className="lg:hidden absolute top-0 w-[50%] h-screen right-0 p-4 bg-primary">
          <div
            onClick={() => setActiveMenu(false)}
            class="group flex lg:hidden h-10 w-10 cursor-pointer items-center justify-center rounded-3xl bg-whit p-2"
          >
            <div class="space-y-2 group-hover:scale-[1.1]">
              <span class="block h-1 w-6 sm:h-1 sm:w-10 origin-center rounded-full bg-white transition-transform ease-in-out rotate-45 translate-y-1.5 group-hover:bg-primary_100"></span>
              <span class="block h-1 w-6 sm:h-1 sm:w-10  origin-center rounded-full bg-white transition-transform ease-in-out -rotate-45  -translate-y-1.5 group-hover:bg-primary_100"></span>
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
          <a href="#join wait list" rel="noopener noreferrer">
            <button
              id="action_button1"
              className={`rounded-[30px] bg-secondary px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal  text-primary-700 border border-[transparent] hover:bg-secondary_100 focus:border-white transition duration-150`}
            >
              Join Waitlist
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
