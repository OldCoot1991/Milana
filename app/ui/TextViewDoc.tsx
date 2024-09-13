"use client";

import React from "react";
import styled from "styled-components";

interface TextProps {
  text: string;
  textAlign?: "left" | "right" | "center";
  textColor: "#FFFFFF" | "#033234";
}

const TextViewDoc: React.FC<TextProps> = ({
  text,
  textAlign = "left",
  textColor = "#033234",
}: TextProps) => {
  return (
    <TextStyled
      className="Manrope-Regular"
      aria-label={text}
      title={text}
      textAlign={textAlign}
      textColor={textColor}
    >
      {text}
    </TextStyled>
  );
};

export default TextViewDoc;

const TextStyled = styled.p<{ textAlign: string; textColor: string }>`
  // Добавляем типизацию для текстового выравнивания
  color: ${({ textColor }) => textColor};
  font-size: calc(22px + (24 - 22) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  margin: 0;
  text-align: ${({ textAlign }) =>
    textAlign}; // Используем переданное значение для text-align

  @media (max-width: 1024px) {
    font-size: calc(20px + (24 - 20) * ((100vw - 768px) / (1024 - 768)));
  }

  @media (max-width: 768px) {
    font-size: calc(18px + (20 - 18) * ((100vw - 360px) / (768 - 360)));
  }
`;
