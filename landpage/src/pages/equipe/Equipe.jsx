import React from "react";
import FotoDeThiago from "../../assets/FotoDeThiago.jpg";
import FotoDeVictor from "../../assets/FotoDeVictor.jpg";
import FotoDeLuis from "../../assets/FotoDeLuis.jpg";
import FotoDePedro from "../../assets/FotoDePedro.jpg";
import { Profile } from "../../components/profile/Profile";
import styles from "./equipe.module.css";

// 🧭 Importa o Swiper e estilos
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export function Equipe() {
  const equipe = [
    {
      avatar: FotoDePedro,
      name: "Pedro Emmanuel",
      bio: "Desenvolvedor Back-end",
      email: "pedro.emmanuel@ufrpe.br",
      phone: "",
      githubUrl: "https://github.com/Pedro-Emmanuel-G-C-Machado",
      instagramUrl: "https://www.instagram.com/pedrinho_emmanuel/",
      theme: "",
    },
    {
      avatar: FotoDeLuis,
      name: "Luis Miguel",
      bio: "Desenvolvedor Front-end",
      email: "luis.negreiros@ufrpe.br",
      phone: "",
      githubUrl: "https://github.com/Luis-PyDev01",
      instagramUrl: "https://www.instagram.com/luis_t63/",
      theme: "",
    },
    {
      avatar: FotoDeVictor,
      name: "Victor Rodrigues",
      bio: "Desenvolvedor Front-end",
      email: "victor.rodrigues@ufrpe.br",
      phone: "",
      githubUrl: "https://github.com/V1ctorRodrigues",
      instagramUrl: "https://www.instagram.com/vii.ctorx?",
      theme: "",
    },
    {
      avatar: FotoDeThiago,
      name: "Thiago Lamark",
      bio: "Desenvolvedor Back-end",
      email: "thiago.feitosa@ufrpe.br",
      phone: "",
      githubUrl: "https://github.com/LamarkTH",
      instagramUrl: "https://www.instagram.com/thiagojj.java",
      theme: "",
    },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Nossa Equipe</h1>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "90%", maxWidth: "500px", margin: "0 auto" }}
      >
        {equipe.map((membro, index) => (
          <SwiperSlide key={index}>
            <Profile {...membro} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
