'use client'

import React from "react";
import styled from "styled-components";

interface TitleSelectionProps {
  text: string;
}

const TitleViewSelection: React.FC<TitleSelectionProps> = ({
  text,
}: TitleSelectionProps) => {
  return (
    <Title className="Manrope-Medium" aria-label={text} title={text}>
      {text}
    </Title>
  );
};

export default TitleViewSelection;

const Title = styled.h1`
  color: var(--text-dark);
  font-size: calc(38px + (42 - 38) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  text-align: left;
  margin-top: 50px;
  margin-bottom: 50px;
  @media (max-width: 1024px) {
    font-size: calc(34px + (38 - 34) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    font-size: calc(18px + (34 - 18) * ((100vw - 360px) / (768 - 360)));
    margin-top: calc(40px + (50 - 40) * ((100vw - 360px) / (768 - 360)));
    margin-bottom: calc(40px + (50 - 40) * ((100vw - 360px) / (768 - 360)));
  }
`;