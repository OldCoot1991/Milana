'use client'

import React from "react";
import styled from "styled-components";

interface TextProps {
  text: string;
  textAlign?: 'left' | 'right' | 'center'; // Новый пропс для выравнивания текста
}

const TextP: React.FC<TextProps> = ({ text, textAlign = 'left' }: TextProps) => {
  return (
    <TextStyled className="Manrope-Regular" aria-label={text} title={text} textAlign={textAlign}>
      {text}
    </TextStyled>
  );
};

export default TextP;

const TextStyled = styled.p<{ textAlign: string }>` // Добавляем типизацию для текстового выравнивания
  color: var(--text-dark);
  font-size: calc(24px + (24 - 24) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  text-align: ${({ textAlign }) => textAlign}; // Используем переданное значение для text-align
  margin-top: 0;
  @media (max-width: 1024px) {
    font-size: calc(20px + (24 - 20) * ((100vw - 768px) / (1024 - 768)));
  }
  
  @media (max-width: 768px) {
    font-size: calc(18px + (20 - 18) * ((100vw - 360px) / (768 - 360)));
  }
`;