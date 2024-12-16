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
      !Лазерное лечение Варикоза <br/> «Всё включено»
      <br />
      <SpanBanner>с выгодой</SpanBanner>
      {` `}
      от 10 000 ₽
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
  font-size: calc(64px + (75 - 64) * ((100vw - 1024px) / (1920 - 1024)));
  width: calc(891px + (891 - 891) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  text-align: right;
  margin: 0;
  bottom: calc(404px + (520 - 404) * ((100vw - 1024px) / (1920 - 1024)));
  left: calc(53px + (879 - 53) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1024px) {
    font-size: calc(48px + (64 - 48) * ((100vw - 768px) / (1024 - 768)));
    width: calc(662px + (891 - 662) * ((100vw - 768px) / (1024 - 768)));
    left: calc(23px + (53 - 23) * ((100vw - 768px) / (1024 - 768)));
    bottom: calc(264px + (404 - 264) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    font-size: calc(32px + (48  - 32) * ((100vw - 360px) / (768 - 360)));
    width: calc(331px + (662 - 331) * ((100vw - 360px) / (768 - 360)));
    left: calc(5px + (23 - 5) * ((100vw - 360px) / (768 - 360)));
    bottom: calc(314px + (264 - 310) * ((100vw - 360px) / (768 - 360)))
  }
`;
