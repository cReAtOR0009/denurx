import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { styles } from "../styles";
import { nav } from "../assets/text";
import { menu, close } from "../assets/images";
import {
  animateNavItems,
  animateFromTo,
  animateButton,
  revealDivOnScroll,
} from "../assets/animation";

const NavItem = ({ title, active, handleClick, mobile, index }) => {
  const handleMouseEnter = (event) => {
    const navItem = event.currentTarget;
    gsap.to(navItem, { y: 10, duration: 0.3 });
  };

  const handleMouseLeave = (event) => {
    const navItem = event.currentTarget;
    gsap.to(navItem, { y: 0, duration: 0.3 });
  };

  return (
    <HashLink
      className={`${
        active === title ? "border-b-4 text-secondary" : "text-white"
      } ${
        mobile ? "mb-6" : "mr-4 md:mr-8"
      }  nav-item inline-block mb-4 uppercase border-b-secondary py-2 px-4 cursor-pointer hover:border-b-4 hover:border-b-secondary_100 hover:text-secondary_100`}
      to={`/denurx/#${title.toLocaleLowerCase()}`}
      onClick={() => handleClick(title)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
      <li></li>
    </HashLink>
  );
};

const Nav = () => {
  const containerRef = useRef(null);
  const aside = useRef(null);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);
  const [active, setActive] = useState(nav[0].title);
  const [activeMenu, setActiveMenu] = useState(false);
  const navRef = useRef(null);

  const handleClick = (value) => {
    setActive(value);
  };

  useGSAP(() => {
    revealDivOnScroll(containerRef);
    const navItems = navRef.current.querySelectorAll("a");
    animateNavItems(navItems);
    animateFromTo(logoRef, "x", -150, 0);
    animateFromTo(buttonRef, "x", -150, 0, 1);
    // animateButton('#action_button1');
  }, []);

  useGSAP(() => {
    // const tl = gsap.timeline();
    if (activeMenu) {
      animateFromTo(aside, "x", 250, 0, 0, 1);
    } else {
      animateFromTo(aside, "x", 0, 250, 0, 0.5);
    }
    // animateFromTo(aside, "x", 250, 0, 0, .5 )
    // return () => {
    //   tl.kill(); // Clean up the timeline on component unmount
    // };
  }, [activeMenu]);

  return (
    <nav
      ref={containerRef}
      className={`${styles.nav} fixed top-0 z-20 h-20 w-screen px-4 md:px-10 lg:px-20 xl:px-20 flex justify-between items-center `}
    >
      {/* <a id="logo" href="#home" rel="noopener noreferrer" className=""> */}
      <HashLink to={"/denurx/#home"}>
        <img
          ref={logoRef}
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
      <Link ref={buttonRef} to={"/denurx/waitlist"}>
        <button
          className={`rounded-[30px] animate-pulse bg-primaryBtn px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal  text-primary-700 border border-[transparent] hover:bg-secondary_100 focus:border-white transition duration-150`}
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

      {/* {activeMenu && ( */}
      <aside
        ref={aside}
        className={`${
          activeMenu ? "flex" : "hidden"
        } flex-col lg:hidden absolute top-0 w-[50%] h-screen right-0 p-4 navSidebar bg-white shadow-featuresCardShadow hover:shadow-featuresCardHover`}
      >
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
        <Link
          id="action_button1"
          to="/denurx/waitlist"
          rel="noopener noreferrer"
        >
          <button className="rounded-[30px] animate-pulse bg-primaryBtn  px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] hover:bg-secondary_100 focus:border-white transition duration-150">
            Join Waitlist
          </button>
        </Link>
      </aside>
      {/* )} */}
    </nav>
  );
};

export default Nav;
