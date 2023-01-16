import React from 'react';
import styles from "../Styles/Profile.module.css";
import Typewriter from "typewriter-effect";
import { Button} from '@chakra-ui/react';

export const Profile = () => {
  
  return <>
  <div className={styles.Avatar_Container} id={"home"}>
    <div className={styles.Avatar_details}>
      <h2>Hi! I'm Kishan Joshi</h2>
    <Typewriter
        options={{
        strings: ['A Full Stack Developer', 'Life Long Learner < />'],
        autoStart: true,
        loop: true,
        }}
    />
    <Button id={styles.Resume_btn}>
        <a href='https://github.com/Kishan0431/Kishan0431/raw/main/Kishan_Joshi_Resume.pdf' download>Resume</a>
    </Button>
    </div>
    <div className={styles.Avatar}>
        <img src="https://avatars.githubusercontent.com/u/103808725?v=4" alt="avatar" />
    </div>
  </div>
  </>

}



  