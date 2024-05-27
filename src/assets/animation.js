// gsapAnimations.js
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateNavItems = (navItems) => {
  gsap.fromTo(
    navItems,
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.5, stagger: 0.3, ease: "power1.out" }
  );
};

export const animateButton = (buttonRef) => {
  gsap.to(buttonRef.current, {
    scale: 1.1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    scrub: true,
  });
};

export const animateFromTo = (
  ref,
  position,
  from,
  to,
  delay = 0.5,
  duration = 0.5
) => {
  gsap.fromTo(
    ref.current,
    { opacity: 0, [position]: from },
    {
      opacity: 1,
      [position]: to,
      duration: duration,
      stagger: 0.3,
      ease: "power1.out",
      delay: delay,
    }
  );
};


export const animateChildrenFromTo = (
  ref,
  position,
  from,
  to,
  delay = 0.5,
  duration = 0.5,
  trigger = false
) => {
  gsap.fromTo(
    ref,
    { opacity: 0, [position]: from },
    {
      opacity: 1,
      [position]: to,
      duration: duration,
      stagger: 0.3,
      ease: "power1.out",
      delay: delay,
      scrollTrigger: trigger
        ? {
            trigger: ref,
            start: "top 90%",
            end: "bottom 10%",
            stagger: 0.25,
            ease: "power1.out",
            // markers:true
            // scrub: true,
          }
        : null,
    }
  );
};

export const revealOnScroll = (ref) => {
  gsap.fromTo(
    ref.current,
    { opacity: 0, y: -20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power1.out",
      delay: 0.5,
    }
  );
};

export const revealDivOnScroll = (ref) => {
  gsap.fromTo(
    ref.current,
    { opacity: 0, y: 150 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        end: "bottom 25%",
        toggleActions: "play none none none",
        // markers: true,
        // scrub:0.1
      },
    }
  );

  // const Children = gsap.utils.toArray(ref.current.children);

  // Children.forEach((child) => {
  //   gsap.fromTo(
  //     child,
  //     { opacity: 0, y: 20 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: child,
  //         start: "top 10%",
  //         end: "bottom 10%",
  //         scrub: true,
  //       },
  //     }
  //   );
  // });
};

/*export const revealDivOnScroll = (ref) => {
  const revealElement = ref.current;
  const windowHeight = window.innerHeight;

  const handleScroll = () => {
    //We first check if there's an element (revealElement) on the page that we want to reveal when scrolling.
    if (revealElement) {
      //If the element exists, we find out how far it is from the top of the browser window (revealElementTop). This tells us its current position on the page.
      const revealElementTop = revealElement.getBoundingClientRect().top; //gets the 
      //We set a variable (revealPoint) to determine at what point we want the element to start revealing
      const revealPoint = 50; // Adjust this value to control when the element should start revealing

      //If the element's top position is less than the window height minus the reveal point, it means the element has scrolled into view.
      if (revealElementTop < windowHeight - revealPoint) {
        gsap.fromTo(
          revealElement,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.3, ease: "power1.out", delay: 0.3 }
        );
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check on initial render

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};*/
