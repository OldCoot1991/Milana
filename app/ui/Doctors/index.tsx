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
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  text-align: center;
  @media (max-width: 1920px) {
    margin-left: 0px;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const CardDoctorsName = styled.p`
  font-size: calc(32px + (32 - 32) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  width: 100%;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: calc(24px + (32 - 24) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    font-size: 24px;
    width: 80%;
  }
`;

const CardDoctorsProfile = styled.span`
  font-size: calc(24px + (24 - 24) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  @media (max-width: 1024px) {
    font-size: calc(20px + (24 - 20) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardDoctorsImageDiv = styled.div`
  height: 150px;
  width: 100px;
  background-image: url(../../components/Doctors/images/milana.jpg);
`;

// Стили для модального окна и фона

const ViewDoctorsContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 40px;
  z-index: 1001;
  width: calc(900px + (1300 - 1000) * ((100vw - 1024px) / (1920 - 1024)));
  display: flex;
  transition: all 0.5s;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 95%;
    border-radius: 20px;
  }
`;

const ViewDoctorsContainerLeft = styled.div`
  height: 100%;
  padding: 50px 30px;
  background-color: rgba(13, 176, 184, 1);
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  @media (max-width: 900px) {
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    padding: 20px 25px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
const ViewDoctorsContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  @media (max-width: 900px) {
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 20px;
  }
`;
const ViewContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 5px;
    margin-top: 15px;
  }
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
};
