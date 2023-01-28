import React from 'react';
import styles from "../Styles/Navbar.module.css";
import { Link} from 'react-scroll';



export const Navbar = () => {
 
 
  return <>
  <div className={styles.navbar_container}>
    
    <ul>
      <li>
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
          Home
      </Link>
      </li>
      <li>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
          About
      </Link>
      </li>
      <li>
      <Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500}>
          Techstack
      </Link>
      </li>
      <li>
      <Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500}>
          Projects
      </Link>
      </li>
      <li>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
      </Link>
      </li>
      {/* <Button id={styles.Resume_navbtn}>
        <a href='https://github.com/Kishan0431/Kishan0431/raw/main/Kishan_Joshi_Resume.pdf' download>Resume</a>
      </Button> */}
    </ul>

  </div>
  </>
  
}
