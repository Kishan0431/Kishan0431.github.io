import React from 'react';
import styles from "../Styles/Contact.module.css";
import {MdEmail} from 'react-icons/md';
import {FaGithubSquare,FaLinkedinIn} from 'react-icons/fa';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {BiUpArrowAlt} from 'react-icons/bi';
import { Link} from 'react-scroll';

const Contact = () => {
  return<div id={"contact"}>
    <div id={styles.contact_container}>
        <h1>Contact</h1>
        <div id={styles.outer}>
            <div>
                <a href="https://linkedin.com/in/kishan joshi" target='_blank' rel='noreferrer'> <FaLinkedinIn  className={styles.social}/></a>
            </div>
            <div>
                <a href="https://joshikishanm005@gmail.com" target='_blank' rel='noreferrer'><MdEmail className={styles.social}/></a>
            </div>
            <div>
                <a href="https://github.com/Kishan0431" target='_blank' rel='noreferrer'><FaGithubSquare className={styles.social}/></a>
            </div>
            <div>
                <a href="https://twitter.com/kishanvjoshi12" target="blank" rel='noreferrer'><AiFillTwitterSquare className={styles.social}/></a>
            </div>
        </div>
     <div id={styles.upbtn}>
        <div>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
            <BiUpArrowAlt className={styles.up}/>
        </Link>
        </div>
     </div>   
    </div>
    <p id={styles.copyright}>Copyright © 2023. All Rights Reserved.Made with ❤️ by Kishan Joshi</p>
  </div>
 
}

export default Contact