'use client'

import React from "react";
import styled from "styled-components";

interface TextProps {
  text: string;
}

const Text: React.FC<TextProps> = ({
  text,
}: TextProps) => {
  return (
    <TextStyled className="Manrope-Regular" aria-label={text} title={text}>
      {text}
    </TextStyled>
  );
};

export default Text;

const TextStyled = styled.p`
  color: var(--text-dark);
  font-size: calc(24px + (32 - 24) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 100%;
  text-align: left;
  @media (max-width: 1024px) {
    font-size: calc(20px + (24 - 20) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    font-size: calc(18px + (20 - 18) * ((100vw - 360px) / (768 - 360)));
  }
`;