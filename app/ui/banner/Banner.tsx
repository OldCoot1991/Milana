"use client";

import React from "react";
import styled from "styled-components";

interface BannerProps {
  children: React.ReactNode;
}

const BannerUi: React.FC<BannerProps> = ({ children }: BannerProps) => {
  return <BannerContainer>{children}</BannerContainer>;
};

export default BannerUi;

const BannerContainer = styled.div`
  height: calc(770px + (810 - 770) * ((100vw - 1024px) / (1920 - 1024)));
  width: calc(964px + (1820 - 964) * ((100vw - 1024px) / (1920 - 1024)));
  border-radius: calc(30px + (40 - 30) * ((100vw - 1024px) / (1920 - 1024)));
  background-color: #d4f4f2;
  margin: auto;
  position: relative;
  z-index: 1;
  @media (max-width: 1024px) {
    height: calc(770px + (770 - 770) * ((100vw - 768px) / (1024 - 768)));
    width: calc(708px + (964 - 708) * ((100vw - 768px) / (1024 - 768)));
    border-radius: calc(20px + (30 - 20) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    height: calc(500px + (770 - 500) * ((100vw - 360px) / (768 - 360)));
    width: calc(360px + (708 - 360) * ((100vw - 360px) / (768 - 360)));
    border-radius: calc(0px + (20 - 0) * ((100vw - 360px) / (768 - 360)));
  }
  @media (max-width: 360px) {
    border-radius: 0;
    width: 100%;
  }
`;
