"use client";

import Image from "next/image";
import styles from "../../styles/news.module.css";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Img1 from "./Image.png";
import TitleSelection from "@/app/ui/TitleSelection";

export default function News() {
  const swiperRef = useRef<any>(null); // ref для записи экземпляра Swiper

  return (
    <div className={styles.news}>
      <h1 className={styles["title_content"]}>Новости и акции</h1>
      <Swiper
        ref={swiperRef}
        slidesPerView={3} // Задается значение по умолчанию
        spaceBetween={0}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-2",
          prevEl: ".swiper-button-prev-2",
        }}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
        breakpoints={{
          // Адаптивные настройки
          1324: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          // Когда ширина экрана меньше 768 пикселей
          0: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <div className={styles.container}>
            <Image className={styles.image} src={Img1} alt={""} />
            <p className={styles["text"]}> Новости</p>
            <h1 className={styles["title-card"]}>
              Лазерное лечение варикоза стало еще эффективнее!
            </h1>
            <span className={styles.date}>11 марта 2024</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.container}>
            <Image className={styles.image} src={Img1} alt={""} />
            <p className={styles["text"]}> Новости</p>
            <h1 className={styles["title-card"]}>
              Лазерное лечение варикоза стало еще эффективнее!
            </h1>
            <span className={styles.date}>11 марта 2024</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.container}>
            <Image className={styles.image} src={Img1} alt={""} />
            <p className={styles["text"]}> Новости</p>
            <h1 className={styles["title-card"]}>
              Лазерное лечение варикоза стало еще эффективнее!
            </h1>
            <span className={styles.date}>11 марта 2024</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="container_pagination">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="swiper-button-prev-2"
        >
          {""}
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="swiper-button-next-2"
        >
          {""}
        </button>
      </div>
    </div>
  );
}
