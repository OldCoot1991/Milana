'use client'

import React from "react";
import styled from "styled-components";

interface TitleSelectionProps {
  text: string;
  textColor: "#FFFFFF" | "#033234";
}

const TitleSelection: React.FC<TitleSelectionProps> = ({
  text,
  textColor = "#033234",
}: TitleSelectionProps) => {
  return (
    <Title className="Manrope-Bold" aria-label={text} title={text} textColor={textColor} >
      {text}
    </Title>
  );
};

export default TitleSelection;

const Title = styled.span<{textColor: string }>`
 color: ${({ textColor }) => textColor};
  font-size: calc(24px + (24 - 24) * ((100vw - 1024px) / (1920 - 1024)));
  line-height: 120%;
  @media (max-width: 1024px) {
    font-size: calc(22px + (24 - 22) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    font-size: calc(16px + (22 - 16) * ((100vw - 360px) / (768 - 360)));
  }
`;