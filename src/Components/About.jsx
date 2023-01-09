import React from 'react'
import styles from "../Styles/About.module.css";

export const About = () => {
  return <div>
    <div id={styles.About_container}>
{/* eslint-disable-next-line */}
    <marquee  direction="left">नमस्ते! I'm Full Stack Developer Specialization in MERN stack and Seeking to pursue a career in a challenging environment to hone industry skill.</marquee>
 
       <h1>About me</h1>
       <h3>A Motivated aspiring Full Stack Developer with hands-on experience in building
          websites with MERN stack and various web technologies including HTML, CSS,
          and JS. Curious to learn about emerging web technologies. Looking forward to
          making a significant contribution to an organization through dedicated effort.</h3>
          <img id={styles.about_avatar} src="https://i.ibb.co/jHzQ8fv/emoji.png" alt="avatar" />
    </div>
    
  </div>
  
}
