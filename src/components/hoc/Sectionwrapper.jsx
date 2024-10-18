import React from 'react'
import { styles } from '../../styles';

const Sectionwrapper = (Component, idName, backgroundProp, container1) =>
    function HOC(props) {
    // let  background = `bg-${backgroundProp}`
    // console.log("background:", background)
      return (
        <section
          className={`relative ${!container1? `${styles.container}`:`${styles.footer_container} border-primary_300 border-t-2`} relative ${!container1? 'dark:bg-dark-containerBg':'dark:bg-dark-backgroundNav'}  {backgroundProp} max-w-[2500px]`}
        >
          <span className='hash-span absolute -top-16' id={idName}>
            &nbsp;
          </span>
  
          <Component {...props}  />
        </section>
      );
    };

export default Sectionwrapper