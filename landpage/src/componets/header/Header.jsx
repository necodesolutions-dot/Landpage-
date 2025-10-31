import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaUserFriends, FaEnvelope } from "react-icons/fa";
import styles from "../header/header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
         <h1 className={styles.logo}> 
        <span className={styles.icon}> &lt; / &gt; </span>
       
             <span className={styles.ne}>NE</span>
             <span className={styles.code}>code</span>
             
             </h1>
        <nav className={styles.nav} >
            <a className={styles.navItem} href="#HOME">
                <IoMdHome />
                Home
                </a>
            <a className={styles.navItem} href="#EQUIPE">
                <FaUserFriends />
                Equipe
                </a>
            <a className={styles.navItem} href="#CONTATO">
                <FaEnvelope />
                Contato</a>
        </nav>
    </header>
  )
}

