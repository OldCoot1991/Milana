"use client";

import React from "react";
import styled from "styled-components";

interface TextProps {
  text: string;
}

const SubText: React.FC<TextProps> = ({ text }: TextProps) => {
  return (
    <TextStyled className="Roboto-Bold" aria-label={text} title={text}>
      {text}
    </TextStyled>
  );
};

export default SubText;

const TextStyled = styled.p`
  color: var(--text-dark);
  font-size: calc(24px + (50 - 24) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 100%;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    font-size: calc(20px + (24 - 20) * ((100vw - 768px) / (1024 - 768)));
    margin-top: 10px;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    font-size: calc(18px + (20 - 18) * ((100vw - 360px) / (768 - 360)));
    margin-top: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 360px) {
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;
