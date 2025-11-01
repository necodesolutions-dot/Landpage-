import React from "react";
import FotoDeThiago from "../../assets/FotoDeThiago.jpg"
import FotoDeVictor from "../../assets/FotoDeVictor.jpg"
import FotoDeLuis from "../../assets/FotoDeLuis.jpg"
import FotoDePedro from "../../assets/FotoDePedro.jpg"
import { Profile } from "../../components/profile/Profile";
import styles from "./equipe.module.css"

export function Equipe() {
  return (
    <section className={styles.container}>
      <Profile
        avatar={FotoDePedro}
        name="Pedro Emmanuel"
        bio="Desenvolvedor Back-end"
        email="pedro.emmanuel@ufrpe.br"
        phone="(81) 99599-4894"
        githubUrl="https://github.com/Pedro-Emmanuel-G-C-Machado"
        instagramUrl="https://www.instagram.com/pedrinho_emmanuel/"
        theme ="backend"
      />
  
          <Profile
        avatar={FotoDeLuis}
        name="Luis Miguel"
        bio="Desenvolvedor Front-end"
        email="luis.negreiros@ufrpe.br"
        phone="(81) 98256-8709"
        githubUrl="https://github.com/Luis-PyDev01"
        instagramUrl="https://www.instagram.com/luis_t63/"
        theme =""
      />
          <Profile
        avatar={FotoDeVictor}
        name="Victor Rodrigues "
        bio="Desenvolvedor Front-end"
        email="victor.rodrigues@ufrpe.br"
        phone=" (87) 9211-6830"
        githubUrl="https://github.com/V1ctorRodrigues"
        instagramUrl="https://www.instagram.com/vii.ctorx?"
        theme =""
      />
         <Profile
        avatar={FotoDeThiago}
        name="Thiago Lamark"
        bio="Desenvolvedor Back-end"
        email="thiago.feitosa@ufrpe.br"
        phone="(81) 97317-7698"
        githubUrl="https://github.com/LamarkTH"
        instagramUrl="https://www.instagram.com/thiagojj.java"
        theme ="backend"
      />
    </section>
  );
}
