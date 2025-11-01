import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdHomeRepairService } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ IMPORTANTE!
import styles from "../header/header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <span className={styles.icon}> &lt; / &gt; </span>
        <span className={styles.ne}>NE</span>
        <span className={styles.code}>code</span>
      </h1>

      <nav className={styles.nav}>
        <Link className={styles.navItem} to="/">
          <IoMdHome />
          Home
        </Link>

        <Link className={styles.navItem} to="/equipe">
          <FaUserFriends />
          Equipe
        </Link>

        <Link className={styles.navItem} to="/servicos">
          <MdHomeRepairService />
          Serviços
        </Link>
      </nav>
    </header>
  );
}
