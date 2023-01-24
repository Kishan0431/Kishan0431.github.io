import React from 'react'
import styles from "../Styles/Techstack.module.css";


export const Techstack = () => {
  return<div id='skill' className={styles.Tech_container}>
        <h1>Techstack</h1>
        <div className={styles.skills}>
              <div className={styles.techStack_first}>
                  <div  className={styles.icon_container}>
                        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="javascript"/>
                        <p>JavaScript</p>
                  </div>
                  <div className={styles.icon_container}>
                        <img src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="javascript" />
                        <p>HTML</p>

                  </div>
                  <div className={styles.icon_container}>
                        <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="javascript" />
                        <p>CSS</p>
                  </div>

                  <div className={styles.icon_container}>
                        <img src="https://cdn-icons-png.flaticon.com/128/1260/1260667.png" alt="javascript" />
                        <p>React</p>
                  </div>
              </div>
              <div className={styles.techStack_first}>
                  <div className={styles.icon_container}>
                        <img src="https://www.coffeeclass.io/logos/chakra-ui.png" alt="chakra"/>
                        <p>Chakra</p>
                  </div>
                  <div className={styles.icon_container}>
                        <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="redux" />
                        <p>Redux</p>
                  </div>
                  <div className={styles.icon_container}>
                        <img src="data:image/png;base64,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" alt="node.js" />
                        <p>Node.js</p>
                  </div>
                  <div className={styles.icon_container}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFLElEQVR4nO2cW4hWVRTHV6VZoqYVphnRHUvtAunUS1SU9FKUWUkPXcguEFnWvFRoaRcQGXuMpAtDXiAwIpR6KIzSLlIYmUU3ia5T2liZpUXzi11r4Gv45pyzz3dmztoz6wffy/d955z/2vucdfZea+0t4jiO4ziO4ziO4ziO4ziO4ziOUzPARGAu8ACwFngP2AF0A3/qp1u/C7+tARYDV4Zj69afJMBMYAWwDeihPD16jg7g7LrtMg0wDmgHPmLg2K7XGFu3vWYADgeWqBsZLMK1HgQmyHAFOAC4DviR+vgJuBM4UIYTwEnAZuywCThRhgPAFcBu7PErME+GKuExBx7DPh1DziUBB+v4PBVWAyNlCDX+BtJjffKdoCOdTtJlTdLuKBGfn8dySRHgmlzTYCvwaYvhhrL06LWDhjzmSoLj/F9yjHo7uCj9/9HAfcDnDDyfAfeGaza4yS05x/wMnCApoAYVmWTd3M9Q9VptpKoJd/u8Zj4duK3A8a/33jCmAW4q2CCnZ5xjJLCg4SkK4Yp1wFLtoIs0YjpVPzP1u/DbQ8DzDSGOcPfeAYzIuN6ZBTVfLwkE1nYWNGZigfMF19RWZiSiT1Nbr6vJ+e+kgpp/AMaLVfQOLcoRYivpU5TFYjieHxNSPk6MABwfGUG1l0/QREcM54sRgAsitd8t1iiRybpR0hs49LJNLKGjkFhWSNoz9rPECppAj+F34FQxQtAC/JFsiAL4MFL8/WIMYFGkDVvF0BAuJpbzLTBKjAGMAr6LsONv4EgLwkPRFMmPo+VfW0KlRAxzUhRtxvf3BZgWacsiqRstFyxKlxgH6IqwZ5UFwe9GCH5JjAO8HGHPFguCv4wQvFKMAzwVYc8OC4J3JTl27gctSynKTqkbYH+E4A4xDnGz4n0WBIf6/KI8KcYBnomwZ78FwSHjVJR1YhzghQh7dlsQ/E2E4I/FOPyXOy7KVxYE51UU9J2+20tm/D+pFBNWeUvqBniOOC4TowBzIm1Za0H0w5Gi14hRiL+ZlloQfXmk6BB3P0aMARwbhpWRtlxqQfgU4lmZ+Ay4l0mSaD44vIwvFiMAl6imGD4QK4QQA/F0AScb0D615ELBZWIF4FzK8XWIwdeoe4Zm6MrQJpYIk6yShvwWSlQGs/BVC4jnA3tLat4uCRVmPQ5M1ke9PSPhsVlHVAcNoMYRukrzTVpjoRidRTZbfrqgSSHsOzlu6ZHwkgbGVKBrDDAbeDQybJJWaWLGpCxM7Z8ADmn431EFG+Mv9dGdJbQ8rceGc1TJErEKcFjGiOKVRvcCXBgx9It+4QHnUD3BfY4TywC3ZhhwT5OazJ4coze2oCVsQVAl88U6ujAiLOdpxq6+dxBwQ05ZYHsLWm6vsPFfS2bJaljQBuwpWpYInAI823BM6JD3dYI3pQUd51XU+HuSWaTXiy6Ia0bIoE3OOG5CVXMC4IwKGr8n2U08MkIU6wdyvF9xB9gJOZR8H/RXOdcJjDbeAauT8fs5S07DHd+MTzQMMd5gB7yY/GYdfXZMyaoh3ach7Y26HvgN4AtdyHFaDR2wasg0fh93tLzEvhDTBrEDgrZlybudLICrM4aozZgxSB0Qtiy7SoYDYY0w8KqhDthkITlUh0u6pUA9/vQWrjE959zfa17A/iYcAwUwVrc46O4ndHFoC+ce3c95u3WzWJth5Ro7YmFDgj9kymZXlHDf27B18V1V5BmGNMCssOlTxRtIzarqfI7jOI7jOI7jOI7jOI7jOI7jOI6kwz+c1nUaw6gmSQAAAABJRU5ErkJggg==" alt="javascript" />
                        <p>Github</p>
                  </div>
              </div>
        </div>
    </div>
  
}
