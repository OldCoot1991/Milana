"use client";
import Image from "next/image";
import styled from "styled-components";
import legs from "./image/Legs.svg";

export default function Legs() {
  return <Img src={legs} alt="legs" />;
}

const Img = styled(Image)`
  display: block;
  position: relative;
  width: 49%;
  z-index: 3;
  right: 0;
  height: 100%;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 63%;
    height: 100%;
    opacity: 0.6;
  }
`;
