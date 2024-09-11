"use client";
import styled from "styled-components";
import img1 from "../../components/AboutUseTopContent/img1.png"

const ContainerAboutUseContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(20px + (170 - 20) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1024px) {
    gap: 20px;
  }
`;

const ContainerContentAboutUse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1530px;
  width: 100%;
  gap: calc(50px + (100 - 50) * ((100vw - 1024px) / (1920 - 1024)));
  margin: 0 auto;
  margin-bottom: calc(100px + (150 - 100) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1024px) {
    gap: 50px;
    margin-bottom: 100px;
  }
  @media (max-width: 768px) {
    gap: calc(30px + (50 - 30) * ((100vw - 360px) / (768 - 360)));
  }
  @media (max-width: 360px) {
    gap: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const ContainerTextAboutUse = styled.div`
display: flex;
flex-direction: column;
`

const ContainerCardAboutUse = styled.div`
width: calc(440px + (600 - 440) * ((100vw - 1024px) / (1920 - 1024)));
height: calc(520px + (750 - 520) * ((100vw - 1024px) / (1920 - 1024)));
position: relative;
z-index: 3;
display: block;
@media (max-width: 980px) {
display: none;
}
`

const ImageAboutUseTopContentCard = styled.div`
width: calc(440px + (600 - 440) * ((100vw - 1024px) / (1920 - 1024)));
height: calc(520px + (750 - 520) * ((100vw - 1024px) / (1920 - 1024)));
border-radius: 20px;
background-color: white;
background-size: cover;
position: relative;
z-index: 2;
`

const BgAboutUseTopContentCard = styled.div`
width: calc(440px + (600 - 440) * ((100vw - 1024px) / (1920 - 1024)));
height: calc(520px + (750 - 520) * ((100vw - 1024px) / (1920 - 1024)));
background-size: cover;
border-radius: 20px;
background-color: #81E5EF;
position: relative;
z-index: 1;
bottom: 760px;
left: 20px;
`


export { ContainerAboutUseContentTop, ContainerContentAboutUse, Container , ContainerTextAboutUse , ContainerCardAboutUse , ImageAboutUseTopContentCard ,BgAboutUseTopContentCard };
