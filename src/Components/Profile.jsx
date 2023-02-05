import React from 'react';
import styles from "../Styles/Profile.module.css";
import Typewriter from "typewriter-effect";
import { Button} from '@chakra-ui/react';
import { motion } from "framer-motion";

export const Profile = () => {
  
  return <>
  <div className={styles.Avatar_Container} id={"home"}>
    <div className={styles.Avatar_details}>
      <h2>Hi! I'm Kishan Joshi</h2>
    <Typewriter
        options={{
        strings: ['Front-end developer', 'Life Long Learner < />'],
        autoStart: true,
        loop: true,
        }}
    />
    <motion.div  animate={{ x:80 }}
    transition={{ type: "spring", stiffness:150 ,damping:1.5 }}>
    <Button id={styles.Resume_btn}>
        <a href='https://github.com/Kishan0431/Kishan0431/raw/main/Kishan_Joshi_Resume.pdf' download>Resume</a>
    </Button>
    </motion.div>
    
    
    </div>
    <motion.div className={styles.Avatar}  initial={{ scale: 0 }}
    animate={{ rotate:360, scale:1.1 }}
        transition={{
          type:"spring",
          stiffness:25,
          damping:3
        }}>
        <img src="https://avatars.githubusercontent.com/u/103808725?v=4" alt="avatar" onMouseDown="10px"/>
    </motion.div>
  </div>
  </>

}



  