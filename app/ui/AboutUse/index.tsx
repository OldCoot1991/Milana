"use client";
import styled from "styled-components";

const TitleAboutUseCard = styled.p`
  color: var(--text-red);
  font-size: calc(24px + (24 - 24) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 1024px) {
    font-size: calc(20px + (24 - 20) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    font-size: calc(18px + (20 - 18) * ((100vw - 360px) / (768 - 360)));
  }
`;

const ContainerAboutUse = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin-top: 100px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 50px;
    justify-content: center;
  }
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: calc(239px + (339 - 239) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1030px) {
    width: calc(268px + (339 - 268) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    width: calc(307px + (268 - 307) * ((100vw - 360px) / (768 - 360)));
    gap: 0px;
    margin-bottom: 20px;
  }
`;



const SvgImage = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 10px;
    @media (max-width: 1024px) {
        width: calc(100px + (130 - 100) * ((100vw - 768px) / (1024 - 768)));
        height: calc(100px + (130 - 100) * ((100vw - 768px) / (1024 - 768)));
    }
    @media (max-width: 768px) {
        width: calc(60px + (100 - 60) * ((100vw - 360px) / (768 - 360)));
        height: calc(60px + (100 - 60) * ((100vw - 360px) / (768 - 360)));
    }
`;

export { TitleAboutUseCard, ContainerAboutUse, ContainerCard, SvgImage };
