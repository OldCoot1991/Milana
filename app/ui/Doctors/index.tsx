"use client";

import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerDoctors = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
  gap: calc(20px + (50 - 20) * ((100vw - 1024px) / (1920 - 1024)));
  padding-left: calc(10px + (150 - 10) * ((100vw - 360px) / (1920 - 360)));
  padding-right: calc(10px + (150 - 10) * ((100vw - 360px) / (1920 - 360)));
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardDoctorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: calc(380px + (438 - 380) * ((100vw - 1024px) / (1920 - 1024)));
  text-align: center;
  @media (max-width: 1024px) {
    width: calc(290px + (380 - 290) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
  }
`;

const CardDoctorsName = styled.p`
  font-size: calc(26px + (32 - 26) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: calc(22px + (26 - 22) * ((100vw - 768px) / (1024 - 768)));
  }
`;

const CardDoctorsProfile = styled.span`
  font-size: calc(20px + (24 - 20) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  @media (max-width: 1024px) {
    font-size: calc(18px + (20 - 18) * ((100vw - 768px) / (1024 - 768)));
  }
`;

const CardDoctorsImageDiv = styled.div`
  height: 150px;
  width: 100px;
  background-image: url(../../components/Doctors/images/milana.jpg);
`;

// Стили для модального окна и фона
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ViewDoctorsContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 40px;
  z-index: 1001;
  max-width: 1495px;
  width: 100%;
  display: flex;
  transition: all 0.5s;
`;

const ViewDoctorsContainerLeft = styled.div`
  height: 100%;
  padding: 50px 30px;
  background-color: #0db0b8;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
`;
const ViewDoctorsContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
`;
const ViewContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
`;
export {
  ViewContainerText,
  ViewDoctorsContainerLeft,
  ViewDoctorsContainerRight,
  ViewDoctorsContainer,
  Container,
  CardDoctorsContainer,
  ContainerDoctors,
  CardDoctorsName,
  CardDoctorsProfile,
  CardDoctorsImageDiv,
  Overlay,
};