"use client";
import Image from "next/image";
import styled from "styled-components";
import legs from "./image/legs.png";

export default function Legs() {
  return <Img src={legs} alt="legs" />;
}

const Img = styled(Image)`
  display: block;
  position: relative;
  z-index: 3;
  top: calc(305px + (159 - 305) * ((100vw - 1024px) / (1920 - 1024)));
  width: calc(694px + (1078 - 694) * ((100vw - 1024px) / (1920 - 1024)));
  height: calc(433px + (672 - 433) * ((100vw - 1024px) / (1920 - 1024)));
  right: calc(50.5px + (79.5 - 50.5) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1024px) {
    top: calc(305px + (305 - 305) * ((100vw - 768px) / (1024 - 768)));
    width: calc(694px + (694 - 694) * ((100vw - 768px) / (1024 - 768)));
    height: calc(433px + (433 - 433) * ((100vw - 768px) / (1024 - 768)));
    right: 50px;
  }
  @media (max-width: 768px) {
    top: calc(170px + (305 - 170) * ((100vw - 360px) / (768 - 360)));
    width: calc(360px + (694 - 360) * ((100vw - 360px) / (768 - 360)));
    height: calc(343px + (433 - 343) * ((100vw - 360px) / (768 - 360)));
    right: calc(28px + (51.2 - 28) * ((100vw - 360px) / (768 - 360)));
  }
`;
