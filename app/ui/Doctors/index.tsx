"use client"

import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
display: flex;
flex-direction: column;
`

const ContainerDoctors = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 20px;
padding-left: 150px;
padding-right: 150px;
`


const CardDoctorsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 10px;
padding-right: 10px;
padding-bottom: 10px;
border-radius: 40px;
max-width: 438px;
text-align: center;
`

const CardDoctorsName = styled.p`
font-size: 32px;
line-height: 120%;
text-align: center;
padding-left: 20px;
padding-right: 20px;
`

const CardDoctorsProfile = styled.span`
font-size: 24px;
line-height: 120%;
padding-left: 20px;
padding-right: 20px;
`

const CardDoctorsImageDiv = styled.div`
height: 150px;
width: 100px;
background-image: url(../../components/Doctors/images/milana.jpg);
`

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
  
`;

const ViewDoctorsContainerLeft = styled.div`
height: 100%;
padding: 50px 30px;
background-color: #0DB0B8;
border-top-left-radius: 40px;
border-bottom-left-radius: 40px;
`
const ViewDoctorsContainerRight = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
width: 100%;
padding-left: 50px;
padding-right: 50px;
padding-bottom: 50px;
`
const ViewContainerText = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 40px;
`
export {ViewContainerText, ViewDoctorsContainerLeft , ViewDoctorsContainerRight , ViewDoctorsContainer ,Container, CardDoctorsContainer, ContainerDoctors , CardDoctorsName , CardDoctorsProfile , CardDoctorsImageDiv , Overlay  }