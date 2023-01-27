import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import styles from "../Styles/calender.module.css";


export const Calender = () => {


  return <div className={styles.calender_div}>
    <h1>My Github Calender</h1>
    <div className={styles.calender}>
        <GitHubCalendar 
                username="Kishan0431"
                fontSize={20}
                blockSize={18}
                >
        </GitHubCalendar>
    </div>
    
  </div>
  
}

