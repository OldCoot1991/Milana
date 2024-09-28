"use client";
import styled from "styled-components";

const FooterLayout = styled.footer`
  margin-top: 100px;
  padding-top: calc(100px + (100 - 100) * ((100vw - 1024px) / (1920 - 1024)));
  padding-left: calc(50px + (200 - 50) * ((100vw - 1024px) / (1920 - 1024)));
  padding-right: calc(150px + (200 - 150) * ((100vw - 1024px) / (1920 - 1024)));
  padding-bottom: 60px;
  background-color: #0DB0B8;
  display: flex;
  justify-content: space-around; 
  @media (max-width: 1024px) {
    margin-top: 50px;
    padding-top: 100px;
    padding-left: 50px;
  }
  @media (max-width: 768px) {
    padding-top: calc(40px + (50 - 40) * ((100vw - 360px) / (768 - 360)));
    padding-left: calc(20px + (50 - 20) * ((100vw - 360px) / (768 - 360)));
    padding-right: calc(20px + (60 - 20) * ((100vw - 360px) / (768 - 360)));
    padding-bottom: calc(40px + (60 - 40) * ((100vw - 360px) / (768 - 360)));
  }
  @media (max-width: 360px) {
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
  }
`;

export default FooterLayout;
