import React from 'react'
import styles from "./footer.module.css"
 export function Footer() {
  return (
  <footer className={styles.footer}>
    <p> Todos os direitos reservados para  &copy; NEcode, ano de {new Date().getFullYear()}</p>
  </footer>
  )
}
