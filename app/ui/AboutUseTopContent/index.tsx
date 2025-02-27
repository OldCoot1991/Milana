"use client";
import styled from "styled-components";
import img1 from "../../components/AboutUseTopContent/img1.png";

const ContainerAboutUseContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(20px + (170 - 20) * ((100vw - 1024px) / (1920 - 1024)));
  margin-top: 100px;
  @media (max-width: 1024px) {
    gap: 20px;
    margin-top: 0px;
  }
`;

const ContainerAboutUseContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(20px + (170 - 20) * ((100vw - 1024px) / (1920 - 1024)));
  margin-top: 100px;
  padding: 40px;
  @media (max-width: 1024px) {
    gap: 20px;
    margin-top: 0px;
    padding: 20px;
  }
  @media (max-width: 1010px) {
    flex-direction: row;
    gap: 40px;
    margin-top: 50px;
  }
  @media (max-width: 880px) {
    flex-direction: column-reverse;
    gap: 40px;
    margin-top: 50px;
    padding: 0;
  }
`;
const ContainerContentAboutUse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1530px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: calc(100px + (150 - 100) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 880px) {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 880px) {
    padding: 0px;
  }
`;



const ContainerTextAboutUse = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerCardAboutUse = styled.div`
  width: calc(440px + (600 - 440) * ((100vw - 1024px) / (1920 - 1024)));
  height: calc(520px + (750 - 520) * ((100vw - 1024px) / (1920 - 1024)));
  position: relative;
  z-index: 3;
  display: block;
  @media (max-width: 980px) {
    display: none;
  }
`;

const ContainerCardAboutUseBottom = styled.div`
  width: calc(440px + (600 - 440) * ((100vw - 1024px) / (1920 - 1024)));
  height: calc(520px + (750 - 520) * ((100vw - 1024px) / (1920 - 1024)));
  position: relative;
  z-index: 3;
  display: block;
`;

const ImageAboutUseTopContentCard = styled.div`
  width: calc(440px + (600 - 440) * ((100vw - 1024px) / (1920 - 1024)));
  height: calc(520px + (750 - 520) * ((100vw - 1024px) / (1920 - 1024)));
  border-radius: 40px;
  background-color: white;
  background-size: cover;
  position: relative;
  z-index: 2;
  left: -20px;
`;

const ImageAboutUseBottomContentCard = styled.div`
  width: calc(440px + (600 - 440) * ((100vw - 1024px) / (1920 - 1024)));
  height: calc(520px + (750 - 520) * ((100vw - 1024px) / (1920 - 1024)));
  border-radius: 40px;
  background-color: white;
  background-size: cover;
  position: relative;
  z-index: 2;
  left: -20px;
  @media (max-width: 600px) {
    width: calc(300px + (440 - 300) * ((100vw - 360px) / (600 - 360)));
    height: calc(380px + (520 - 380) * ((100vw - 360px) / (600 - 360)));
    left: calc(10px + (-45 - 10) * ((100vw - 360px) / (600 - 360)));
  }
  @media (max-width: 400px) {
    left: 0px;
  }
`;

const BgAboutUseTopContentCard = styled.div`
  width: calc(440px + (600 - 440) * ((100vw - 1024px) / (1920 - 1024)));
  height: calc(520px + (750 - 520) * ((100vw - 1024px) / (1920 - 1024)));
  background-size: cover;
  border-radius: 40px;
  background-color: #81e5ef;
  position: relative;
  z-index: 1;
  bottom: calc(540px + (780 - 540) * ((100vw - 1024px) / (1920 - 1024)));
  left: calc(0px + (25 - 0) * ((100vw - 1024px) / (1920 - 1024)));
`;

const BgAboutUseBottomContentCard = styled.div`
  width: calc(440px + (600 - 440) * ((100vw - 1024px) / (1920 - 1024)));
  height: calc(520px + (750 - 520) * ((100vw - 1024px) / (1920 - 1024)));
  background-size: cover;
  border-radius: 40px;
  background-color: #81e5ef;
  position: relative;
  z-index: 1;
  bottom: calc(540px + (780 - 540) * ((100vw - 1024px) / (1920 - 1024)));
  left: calc(0px + (25 - 0) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 600px) {
    left: calc(10px + (-20 - 10) * ((100vw - 360px) / (600 - 360)));
    width: calc(300px + (440 - 300) * ((100vw - 360px) / (600 - 360)));
    height: calc(380px + (520 - 380) * ((100vw - 360px) / (600 - 360)));
    bottom: calc(395px + (540 - 395) * ((100vw - 360px) / (600 - 360)));
  }
  @media (max-width: 400px) {
    left: 15px;
  }
`;

export {
  ContainerAboutUseContentBottom,
  BgAboutUseBottomContentCard,
  ImageAboutUseBottomContentCard,
  ContainerCardAboutUseBottom,
  ContainerAboutUseContentTop,
  ContainerContentAboutUse,
  Container,
  ContainerTextAboutUse,
  ContainerCardAboutUse,
  ImageAboutUseTopContentCard,
  BgAboutUseTopContentCard,
};
