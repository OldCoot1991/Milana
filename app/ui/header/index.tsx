"use client";
import styled from "styled-components";

const HeaderLayout = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: calc(50px + (100 - 50) * ((100vw - 1024px) / (1920 - 1024)));
  padding-right: calc(50px + (100 - 50) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: calc(20px + (50 - 20) * ((100vw - 360px) / (768 - 360)));
    padding-right: calc(20px + (50 - 20) * ((100vw - 360px) / (768 - 360)));
    padding-top: calc(20px + (30 - 20) * ((100vw - 360px) / (768 - 360)));
    padding-bottom: calc(20px + (30 - 20) * ((100vw - 360px) / (768 - 360)));
  }
`;

const Element1 = styled.div`
  display: flex;
  order: 1; /* Начальный порядок для этого элемента */
  height: 100%;
  @media (max-width: 720px) {
    height: 100%;
    justify-content: center;
    order: 2; /* Меняем порядок для мобильных устройств */
  }
`;

const Element2 = styled.div`
  display: flex;
  order: 2; /* Начальный порядок для этого элемента */
  height: 100%;
  align-items: center;
  @media (max-width: 720px) {
    order: 1; /* Меняем порядок для мобильных устройств */
  }
`;

const Element3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: end;
  height: 100%;
  width: 100%;
  order: 3; /* Начальный порядок для этого элемента */
`;

export { HeaderLayout, Element1, Element2, Element3 };
