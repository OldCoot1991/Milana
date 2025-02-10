"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { ViewArrayListCardDoctor } from "@/app/array/ViewArrayListCardDoctor";
import CardDoctor from "../Doctors";
import ViewDoctorsContainerComponents from "../Doctors/ViewDoctorsContainer";

export default function SwiperComponents() {
  const [docId, setDocId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const swiperRef = useRef<any>(null); // ref для записи экземпляра Swiper

  const handleCloseModal = () => {
    setIsVisible(false);
    setDocId(null);
  };
  const handleCardClick = (id: string) => {
    setDocId(id);
    setIsVisible(true);
  };


  

  const selectedDoctor = ViewArrayListCardDoctor.find(
    (doctor) => doctor.key === docId
  );

  return (
    <div className="container-swiper">
      <Swiper
        ref={swiperRef} // Связываем ref со Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {ViewArrayListCardDoctor.map((doctor, index) => (
          <SwiperSlide key={index}>
            <CardDoctor
              key={doctor.key}
              name={doctor.name}
              onClick={() => handleCardClick(doctor.key)}
              profile={doctor.profile}
              classImage={doctor.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Используем ref для доступа к методам Swiper */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="swiper-button-prev"
      >
        {"<"}
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="swiper-button-next"
      >
        {">"}
      </button>
      {isVisible && selectedDoctor && (
        <ViewDoctorsContainerComponents
          key={selectedDoctor.key}
          onClick={handleCloseModal}
          name={selectedDoctor.name}
          image={selectedDoctor.image}
          profile={selectedDoctor.profile}
          internship={selectedDoctor.internship}
        />
      )}
    </div>
  );
}
