"use client";
import styled from "styled-components";

const MainTopImageAboutUse = styled.div`
  height: calc(410px + (410 - 410) * ((100vw - 1024px) / (1920 - 1024)));
  width: calc(472px + (740 - 472) * ((100vw - 1024px) / (1920 - 1024)));
  border-radius: calc(30px + (40 - 30) * ((100vw - 1024px) / (1920 - 1024)));
  background-size: cover;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    height: calc(292px + (410 - 292) * ((100vw - 768px) / (1024 - 768)));
    width: calc(344px + (472 - 344) * ((100vw - 768px) / (1024 - 768)));
    border-radius: calc(20px + (30 - 20) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    height: calc(360px + (292 - 360) * ((100vw - 360px) / (768 - 360)));
    width: calc(292px + (344 - 292) * ((100vw - 360px) / (768 - 360)));
    border-radius: calc(0px + (20 - 0) * ((100vw - 360px) / (768 - 360)));
  }
  @media (max-width: 710px) {
    &:nth-child(1) {
      display: none;
    }
    height: calc(292px + (360 - 292) * ((100vw - 360px) / (710 - 360)));
    width: calc(360px + (710 - 360) * ((100vw - 360px) / (710 - 360)));
    background-position: center;
  }
`;

const MainBottomImageAboutUse = styled.div`
  height: calc(410px + (566 - 410) * ((100vw - 1024px) / (1920 - 1024)));
  width: calc(964px + (1530 - 964) * ((100vw - 1024px) / (1920 - 1024)));
  border-radius: calc(30px + (40 - 30) * ((100vw - 1024px) / (1920 - 1024)));
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    height: calc(292px + (410 - 292) * ((100vw - 768px) / (1024 - 768)));
    width: calc(708px + (964 - 708) * ((100vw - 768px) / (1024 - 768)));
    border-radius: calc(20px + (30 - 20) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    height: calc(360px + (292 - 360) * ((100vw - 360px) / (768 - 360)));
    width: calc(360px + (708 - 360) * ((100vw - 360px) / (768 - 360)));
    border-radius: calc(0px + (20 - 0) * ((100vw - 360px) / (768 - 360)));
  }

  @media (max-width: 360px) {
    border-radius: 0;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
  }
`;

const MainTopAboutUseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-top: calc(50px + (100 - 50) * ((100vw - 360px) / (768 - 360)));
    padding-bottom: calc(50px + (100 - 50) * ((100vw - 360px) / (768 - 360)));
  }
`;

const MainAboutUseContainerReverse = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(20px + (50 - 20) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1600px) {
  align-items: center;
  flex-direction: column-reverse;
  gap: 50px;
  }
  @media (max-width: 1024px) {
    gap: 20px;
    padding: 0px;
  }
  @media (max-width: 360px) {
    gap: 0px;
  }
`;

const ImageLogo = styled.div`
  width: calc(489px + (489 - 489) * ((100vw - 1024px) / (1920 - 1024)));
  height: calc(199px + (199 - 199) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1024px) {
    width: calc(343px + (489 - 343) * ((100vw - 768px) / (1024 - 768)));
    height: calc(140px + (199 - 140) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    width: calc(196px + (343 - 196) * ((100vw - 360px) / (768 - 360)));
    height: calc(80px + (140 - 80) * ((100vw - 360px) / (768 - 360)));
  }
`;

const MainAboutUseTitle = styled.h1`
  font-size: 50px;
  line-height: 120%;
  text-align: left;
  color: #033234;
  margin-top: 0;
  @media (max-width: 1024px) {
    font-size: calc(36px + (50 - 36) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 1024px) {
    font-size: calc(24px + (36 - 24) * ((100vw - 360px) / (768 - 360)));
  }
`;

const TextP = styled.p<{textColor: string }>`
 color: ${({ textColor }) => textColor};
  font-size: calc(24px + (24 - 24) * ((100vw - 768px) / (1920 - 768)));
  line-height: 120%;
  margin: 0;
  @media (max-width: 768px) {
    font-size: calc(18px + (24 - 18) * ((100vw - 360px) / (768 - 360)));
  }
`;

const MainAboutUseContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 704px;
  @media (max-width: 1600px) {
    display: none;
    }
  @media (max-width: 600px) {
    gap: 20px;
  }
`;

const LAptopAndMobailMainAboutUseContainerText = styled.div`
  display: none;
  @media (max-width: 1600px) {
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    }
  @media (max-width: 600px) {
    gap: 20px;
  }
`;

const MainCenterImageAboutUseContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MainTopImageAboutUseContainer = styled.div`
  display: flex;
  gap: calc(20px + (50 - 20) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1024px) {
    gap: 20px;
    padding: 0px;
  }
  @media (max-width: 360px) {
    gap: 0px;
  }
`;

export {
  MainTopImageAboutUseContainer,
  MainTopAboutUseContainer,
  MainBottomImageAboutUse,
  MainTopImageAboutUse,
  MainAboutUseContainerReverse,
  ImageLogo,
  MainCenterImageAboutUseContainer,
  MainAboutUseTitle,
  MainAboutUseContainerText,
  TextP,
  LAptopAndMobailMainAboutUseContainerText
};
