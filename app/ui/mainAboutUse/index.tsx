"use client";
import styled from "styled-components";

const MainTopAboutUse = () => {
  return (
    <MainTopAboutUseContainer>
      <MainTopImageAboutUseContainer>
        <MainTopImageAboutUse className="MainTopAboutUse_img_1" />
        <MainTopImageAboutUse className="MainTopAboutUse_img_2" />
      </MainTopImageAboutUseContainer>
    </MainTopAboutUseContainer>
  );
};

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
    width: calc(360px + (650 - 360) * ((100vw - 36 0px) / (710 - 360)));
  }

  @media (max-width: 360px) {
    border-radius: 0;
    height: calc(350px + (360 - 350) * ((100vw - 360px) / (360 - 300)));
    width: calc(300px + (360 - 300) * ((100vw - 360px) / (360 - 300)));
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

export default MainTopAboutUse;
