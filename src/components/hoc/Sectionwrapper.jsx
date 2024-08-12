import React from 'react'
import { styles } from '../../styles';

const Sectionwrapper = (Component, idName, backgroundProp) =>
    function HOC(props) {
    // let  background = `bg-${backgroundProp}`
    // console.log("background:", background)
      return (
        <section
         
          className={`${styles.container} relative dark:bg-dark-containerBg ${backgroundProp}`}
        >
          <span className='hash-span' id={idName}>
            &nbsp;
          </span>
  
          <Component {...props}  />
        </section>
      );
    };

export default Sectionwrapper