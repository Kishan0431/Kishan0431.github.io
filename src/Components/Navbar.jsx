import React from 'react';
import styles from "../Styles/Navbar.module.css";
import { Button} from '@chakra-ui/react'

export const Navbar = () => {
  return <>
  <div className={styles.navbar_container}>
    <div className={styles.navbar_div}>
      <h3>Home</h3>
      <h3>About me</h3>
      <h3>Skills</h3>
      <h3>Project</h3>
      <h3>Contact</h3>
      <Button id={styles.Resume_navbtn}>
        <a href='https://github.com/Kishan0431/Kishan0431/raw/main/Kishan_Joshi_Resume.pdf' download>Resume</a>
      </Button>
    </div>
  </div>
  </>
  
}
