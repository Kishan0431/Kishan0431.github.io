import React from 'react';
import styles from "../Styles/Profile.module.css";
import Typewriter from "typewriter-effect";


export const Profile = () => {
  
  return <>
  <div className={styles.Avatar_Container}>
    <div className={styles.Avatar_details}>
      <h2>Hi! I,m Kishan Joshi</h2>
    <Typewriter
        options={{
        strings: ['A Full Stack Developer'],
        autoStart: true,
        loop: true,
        }}
    />
    </div>
    <div className={styles.Avatar}>
        <img src="https://avatars.githubusercontent.com/u/103808725?v=4" alt="avatar" />
    </div>
  </div>
  </>
   
 
}



  