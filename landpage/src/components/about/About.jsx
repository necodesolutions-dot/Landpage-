import React from 'react'
import styles from "../about/about.module.css"

export function About(title, img, description) {
  return (
    <>
   <div className={styles.container}>
    <img src ={img} alt=""  className={styles.img} />
    <h4 className={styles.titulo}>{title}</h4>
    <p className={styles.description}>{description}</p>
   </div>
    
    </>
  )
}

 