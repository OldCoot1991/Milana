"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { ViewArrayListCardDoctor } from "@/app/array/ViewArrayListCardDoctor";
import { CardDoctor } from "../Doctors";
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
        ref={swiperRef}
        slidesPerView={3} // Задается значение по умолчанию
        spaceBetween={0}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-1",
          prevEl: ".swiper-button-prev-1",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // Адаптивные настройки
          1324: {
            slidesPerView: 3,
          },
          680: {
            slidesPerView: 2,
          },
          // Когда ширина экрана меньше 768 пикселей
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {ViewArrayListCardDoctor.map((doctor, index) => (
          <SwiperSlide key={index}>
            <CardDoctor
              key={doctor.key}
              name={doctor.name}
              onClick={() => handleCardClick(doctor.key)}
              profile={doctor.profile}
              classImage={doctor.image}
              medicalAssociations={doctor.medicalAssociations || []}
              treatmentProfile={doctor.treatmentProfile || []}
              education={doctor.education || []}
              workExperience={doctor.workExperience || []}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container_pagination">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="swiper-button-prev-1"
        >
          {""}
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="swiper-button-next-1"
        >
          {""}
        </button>
      </div>
      {isVisible && selectedDoctor && (
        <ViewDoctorsContainerComponents
          key={selectedDoctor.key}
          onClick={handleCloseModal}
          name={selectedDoctor.name}
          image={selectedDoctor.image}
          profile={selectedDoctor.profile}
          internship={selectedDoctor.internship}
          medicalAssociations={selectedDoctor.medicalAssociations || []} // значение по умолчанию
          treatmentProfile={selectedDoctor.treatmentProfile || []} // значение по умолчанию
          education={selectedDoctor.education || []} // значение по умолчанию
          workExperience={selectedDoctor.workExperience || []} // значение по умолчанию
          classImage={""}
        />
      )}
    </div>
  );
}
