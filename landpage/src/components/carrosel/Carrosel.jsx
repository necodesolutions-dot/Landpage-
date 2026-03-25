import React from 'react'
import styles from "../../components/carrosel/carrosel.module.css";

import { Swiper, SwiperSlide } from "swiper/react"; // ✅ CORRETO
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules"; // ✅ NECESSÁRIO

import { Profile } from "../../components/profile/Profile";

export function Carrosel({ team }) {
  return (
    <>
      <h1 className={styles.titulo}>Nossa Equipe</h1>

      <Swiper
        modules={[Navigation, Pagination]}  // ativa setas + bolinhas
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        style={{ width: "90%", maxWidth: "500px", margin: "0 auto" }}
      >
        {team.map((member, index) => (
          <SwiperSlide key={member.email || index}>
            <Profile {...member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
