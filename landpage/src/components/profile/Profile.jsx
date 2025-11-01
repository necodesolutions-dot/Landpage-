import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import styles from "./profile.module.css";

export function Profile({
  avatar,
  name = "Usuário Desconhecido",
  bio,
  email,
  phone,
  githubUrl,
  instagramUrl,
  theme
}) {
  return (
    <div className={styles.container}>
      {avatar && <img src={avatar} alt={name} className={styles.avatar} />}
      <h2 className={styles.name}>{name}</h2>

      {bio && <p className={styles.info}>{bio}</p>}
      {email && <p className={styles.info}>{email}</p>}
      {phone && <p className={styles.info}>{phone}</p>}

      {(githubUrl || instagramUrl) && (
        <div className={styles.links}>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={
                theme === "backend"
                  ? styles.linkButtonBackend
                  : styles.linkButton
              }
            >
              GitHub
              <FaGithub size={22} className={styles.icon} />
            </a>
          )}
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className={
                theme === "backend"
                  ? styles.linkButtonBackend
                  : styles.linkButton
              }
            >
              Instagram
              <FaInstagram size={22} className={styles.icon} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
