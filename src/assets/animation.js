import { useEffect } from "react";
import { gsap } from "gsap";


export const animateNavItems = (navItems) => {
  gsap.fromTo(
    navItems,
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.5, stagger: 0.3, ease: "power1.out" }
  );
};

export const animateButton = (buttonId) => {
  gsap.to(buttonId, {
    scale: 1.1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    scrub:true
  });
};

export const animateFromTo = (id, positon, from, to, delay= 0.5, duration=0.5) => {
    gsap.fromTo(
      id,
      { opacity: 0, [positon]: from },
      { opacity: 1, [positon]: to, duration: duration, stagger: 0.3, ease: "power1.out", delay:delay }
    );
  };

  export const revealOnScroll = (id) => {
    gsap.fromTo(id,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power1.out", delay:0.5, })
  }

  export const revealDivOnScroll = (id) => {
    useEffect(() => {
      const revealElement = document.getElementById(id);
      const windowHeight = window.innerHeight;
  
      const handleScroll = () => {
        // console.log("handle scroll")
        if (revealElement) {
          const revealElementTop = revealElement.getBoundingClientRect().top;
          const revealPoint = 50; // Adjust this value to control when the element should start revealing
  
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
    }, [id]);
  };