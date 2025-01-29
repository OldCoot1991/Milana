"use client";

import React from "react";
import styled from "styled-components";

interface TitleBannerProps {
  text: string;
}

const TitleBanner: React.FC<TitleBannerProps> = ({
  text,
}: TitleBannerProps) => {
  return (
    <Title className="Manrope-Medium" aria-label={text} title={text}>
      Лечение варикоза <br /> за один час
      <br />
      <SpanBanner>без боли <br /> без реабилитации <br /> и госпитализации</SpanBanner>
      {` `}
    </Title>
  );
};

export default TitleBanner;

const SpanBanner = styled.span`
  color: var(--text-red);
`;

const Title = styled.h1`
  position: relative;
  z-index: 3;
  color: var(--text-dark);
  font-size: calc(60px + (80 - 60) * ((100vw - 1024px) / (1920 - 1024)));
  width: calc(891px + (900 - 891) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  text-align: right;
  margin: 0;
  bottom: calc(554px + (650 - 554) * ((100vw - 1024px) / (1920 - 1024)));
  left: calc(0px + (800 - 0) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1024px) {
    font-size: calc(48px + (60 - 48) * ((100vw - 768px) / (1024 - 768)));
    width: calc(662px + (891 - 662) * ((100vw - 768px) / (1024 - 768)));
    left: calc(20px + (10 - 22) * ((100vw - 768px) / (1024 - 768)));
    bottom: calc(500px + (554 - 500) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    font-size: calc(30px + (48 - 30) * ((100vw - 360px) / (768 - 360)));
    width: calc(331px + (662 - 331) * ((100vw - 360px) / (768 - 360)));
    left: calc(0px + (22 - 0) * ((100vw - 360px) / (768 - 360)));
    bottom: calc(310px + (500 - 300) * ((100vw - 360px) / (768 - 360)));
  }
`;
