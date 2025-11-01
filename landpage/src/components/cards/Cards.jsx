import React from "react";
import styles from "../../components/cards/cards.module.css";

export function Card({ title, description, img, alt }) {
  return (
    <div className={styles.card}>
      {img && <img src={img} alt={alt || title} className={styles.image} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
     <link to="/servicos" className={styles.button} >
        Saiba mais
     </link>
      
      

    </div>
  );
}
