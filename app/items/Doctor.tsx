"use client"; // Указываем, что это клиентский компонент

import { useState } from "react";
import { ArrayListCardDoctor } from "../array/ArrayListCardDoctor";
import { ViewArrayListCardDoctor } from "../array/ViewArrayListCardDoctor"; // Импортируем второй массив
import CardDoctor from "../components/Doctors";
import ViewDoctorsContainerComponents from "../components/Doctors/ViewDoctorsContainer";

export default function ListCardDoctor() {
  const [docId, setDocId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false); 

  const handleCardClick = (id: string) => {
    setDocId(id);
    setIsVisible(true); 
  };

  const handleCloseModal = () => {
    setIsVisible(false); 
    setDocId(null); 
  };

  
  const viewDoctorKeys = ViewArrayListCardDoctor.map((doctor) => doctor.key);

  
  const filteredDoctors = ArrayListCardDoctor.filter((doctor) =>
    viewDoctorKeys.includes(doctor.key)
  );

 
  const selectedDoctor = ViewArrayListCardDoctor.find(
    (doctor) => doctor.key === docId
  );

  return (
    <>
      {filteredDoctors.map((doctor) => (
        <CardDoctor
          key={doctor.key}
          name={doctor.name}
          onClick={() => handleCardClick(doctor.key)} 
          profile={doctor.profile}
          classImage={doctor.image}
        />
      ))}

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
    </>
  );
}
