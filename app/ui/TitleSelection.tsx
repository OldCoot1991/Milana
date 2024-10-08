'use client'

import React from "react";
import styled from "styled-components";

interface TitleSelectionProps {
  text: string;
}

const TitleSelection: React.FC<TitleSelectionProps> = ({
  text,
}: TitleSelectionProps) => {
  return (
    <Title className="Manrope-Medium" aria-label={text} title={text}>
      {text}
    </Title>
  );
};

export default TitleSelection;

const Title = styled.h1`
  color: var(--text-dark);
  font-size: calc(64px + (80 - 64) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
  @media (max-width: 1024px) {
    font-size: calc(48px + (64 - 48) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    font-size: calc(32px + (48 - 32) * ((100vw - 360px) / (768 - 360)));
    margin-top: calc(50px + (100 - 50) * ((100vw - 360px) / (768 - 360)));
    margin-bottom: calc(40px + (50 - 40) * ((100vw - 360px) / (768 - 360)));
  }
`;