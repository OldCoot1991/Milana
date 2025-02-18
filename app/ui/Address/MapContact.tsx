"use client";

import styled from "styled-components";

export default function MapContact() {
  return (
    <MapContainer>
      <Map>
        <IFrame src="https://yandex.ru/map-widget/v1/org/dok_varikoz/77813633340/?ll=43.626610%2C43.480327&z=17"></IFrame>
      </Map>
    </MapContainer>
  );
}



const Map = styled.div`
  height: 440px;
`;
const IFrame = styled.iframe`
  position: relative;
  z-index: 9999;
  border-radius: 40px;
  width: calc(440px + (613 - 440) * ((100vw - 1024px) / (1920 - 1024)));
  height: calc(520px + (683 - 520) * ((100vw - 1024px) / (1920 - 1024)));
  box-shadow: 25px -25px 0px 0px rgba(129, 229, 239, 1);
  @media (max-width: 1024px) {
    width: calc(440px + (440 - 440) * ((100vw - 768px) / (1024 - 768)));
    height: calc(510px + (520 - 510) * ((100vw - 768px) / (1024 - 768)));
    box-shadow: 20px -20px 0px 0px rgba(129, 229, 239, 1);
  }
  @media (max-width: 980px) {
    width: calc(588px + (710 - 588) * ((100vw - 768px) / (900 - 768)));
    height: calc(510px + (520 - 510) * ((100vw - 768px) / (1024 - 768)));
    box-shadow: 15px -15px 0px 0px rgba(129, 229, 239, 1);
  }
  @media (max-width: 768px) {
    width: calc(280px + (628 - 280) * ((100vw - 360px) / (768 - 360)));
    height: 370px;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  z-index: 1;
  background-color: transparent;
  position: relative;
  top: 60px;
  @media (max-width: 980px) {
    display: flex;
    top: 40px;
  }
`;
