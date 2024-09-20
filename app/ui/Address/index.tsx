"use client";

import { constants } from "buffer";
import styled from "styled-components";

const Container = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-left: calc(50px + (195 - 50) * ((100vw - 1024px) / (1920 - 1024)));
  padding-right: calc(50px + (195 - 50) * ((100vw - 1024px) / (1920 - 1024)));
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    padding-left: calc(40px + (60 - 40) * ((100vw - 768px) / (1024 - 768)));
    padding-right: calc(40px + (60 - 40) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    padding-left: calc(20px + (40 - 10) * ((100vw - 368px) / (768 - 368)));
    padding-right: calc(20px + (40 - 10) * ((100vw - 368px) / (768 - 368)));
  }
`;
const ContainerInfo = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-between;
 width: 100%;
 gap: 10px;
 @media (max-width: 900px) { 
  gap: 0px;
 }
`;

const ContainerContact = styled.div`
  margin-top: 30px;
  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;
const ContainerMap = styled.div``;
export { Container, ContainerInfo, ContainerContact, ContainerMap };
