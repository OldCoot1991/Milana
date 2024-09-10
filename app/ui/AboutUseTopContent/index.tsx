"use client";
import styled from "styled-components";
import img1 from "../../components/AboutUseTopContent/img1.png"

const ContainerAboutUseContentTop = styled.div`
  display: flex;
  flex-wrap: wrap;
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
width: calc(460px + (600 - 460) * ((100vw - 1024px) / (1920 - 1024)));
height: calc(540px + (750 - 540) * ((100vw - 1024px) / (1920 - 1024)));
display: block;
`

const ImageAboutUseTopContentCard = styled.img`
width: 200px;
height: 200px;
background-size: cover;
`


export { ContainerAboutUseContentTop, ContainerContentAboutUse, Container , ContainerTextAboutUse , ContainerCardAboutUse , ImageAboutUseTopContentCard};
