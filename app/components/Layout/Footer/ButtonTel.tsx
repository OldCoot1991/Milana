"use client"
import IconTel from "@/app/ui/footer/IconTel";
import styled from "styled-components";

export default function ButtonTel() {
  return (
    <ContainerButtonTel className="Roboto-Regular" href="tel:89003030001" target="_blank">
      <IconTel />
      {"Связаться"}
    </ContainerButtonTel>
  );
}

const ContainerButtonTel = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 20px;
  font-size: 24px;
  letter-spacing: 0.44px;
  line-height: 100%;
  border-radius: 30px;
  background-color: #81E5EF;
  color: #033234;
  @media (max-width: 768px) {
    font-size: calc(18px + (24 - 18) * ((100vw - 360px) / (768 - 360)));
    padding-left: calc(10px + (20 - 10) * ((100vw - 360px) / (768 - 360)));
    padding-top: calc(10px + (18 - 10) * ((100vw - 360px) / (768 - 360)));
    padding-right: calc(10px + (20 - 10) * ((100vw - 360px) / (768 - 360)));
    padding-bottom: calc(10px + (18 - 10) * ((100vw - 360px) / (768 - 360)));
  }
  @media (max-width: 360px) {
    padding: 10px 10px;
  }
`;
