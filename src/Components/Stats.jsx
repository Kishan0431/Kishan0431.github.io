import React from 'react'
import styles from "../Styles/Stats.module.css";

export const Stats = () => {
  return<div className={styles.stats}>
   
        <h1>My Statistics</h1>
        <div>
        <a href="https://github.com/Kishan0431">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Kishan0431"
          />
        </a>
      </div>
 
      <div>
        <a href="https://github.com/Kishan0431">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kishan0431"  //launguages
          />
        </a>
        <a href="https://github.com/Kishan0431">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=Kishan0431&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  
  
}
