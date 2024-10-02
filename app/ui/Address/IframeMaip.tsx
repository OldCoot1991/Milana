"use client";

import styled from "styled-components";

const IFrame = styled.iframe`
  position: relative;
  z-index: 9999;
  width: 100%;
  height: calc(520px + (683 - 520) * ((100vw - 1024px) / (1920 - 1024)));
  border-bottom: 1px solid black;
  @media (max-width: 1024px) {
    height: calc(510px + (520 - 510) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 980px) {
    height: calc(510px + (520 - 510) * ((100vw - 768px) / (1024 - 768)));
  }
  @media (max-width: 768px) {
    height: 370px;
  }
`;

export default IFrame;
