"use client";

import styled from "styled-components";

const ButtomDownload = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 30px;
  background-size: cover;
  border: 0;
  cursor: pointer;
`;

const ContainerDocumentsContent = styled.div`
  width: 100%;
  border-bottom: 1px solid #0db0b8;
  margin-bottom: 20px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleDocuments = styled.span`
  font-size: calc(24px + (32 - 24) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  text-align: left;
  @media (max-width: 1024px) {
    font-size: calc(20px + (24 - 20) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    font-size: calc(18px + (24 - 18) * ((100vw - 360px) / (768 - 360)));
  }
`;
const ContainerDocument = styled.div`
  display: flex;
  gap: 40px;
`;

const ButtonLook = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 30px;
  background-size: cover;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;
export {
  ButtomDownload,
  ContainerDocumentsContent,
  Container,
  TitleDocuments,
  ContainerDocument,
  ButtonLook,
};
