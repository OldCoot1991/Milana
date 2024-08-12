"use client";

import styled from "styled-components";

export default function HeaderLinkTelMobail() {
  return (
    <HeaderTelLink href="tel:89003030001" target="_blank">
      <Tel />
    </HeaderTelLink>
  );
}
function Tel() {
  return (
    <HeaderTelSvg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.5" stroke="#033234" />
      <path
        d="M15.5495 11.0762L16.56 10.7551C17.5057 10.4546 18.5172 10.9409 18.9225 11.891L19.7294 13.7838C20.0813 14.608 19.8861 15.5777 19.2472 16.1806L17.471 17.8588C17.5808 18.8631 17.9195 19.8515 18.4881 20.824C19.0284 21.765 19.7529 22.5886 20.6189 23.2461L22.7544 22.5367C23.5632 22.2689 24.4442 22.5778 24.9405 23.303L26.0965 24.9924C26.6744 25.8361 26.5703 26.999 25.8544 27.714L25.0869 28.4803C24.3232 29.2428 23.2329 29.52 22.2233 29.2064C19.8411 28.4672 17.6512 26.2729 15.6527 22.6235C13.6514 18.9685 12.9458 15.8661 13.5341 13.3199C13.7818 12.2485 14.5493 11.3945 15.5513 11.0762"
        fill="#033234"
      />
    </HeaderTelSvg>
  );
}

const HeaderTelSvg = styled.svg`
  height: 60px;
  width: 60px;
  @media (max-width: 768px) {
    height: calc(40px + (60 - 40) * ((100vw - 360px) / (768 - 360)));
    width: calc(40px + (60 - 40) * ((100vw - 360px) / (768 - 360)));
  }
`;

const HeaderTelLink = styled.a`
  margin-right: 10px;
  height: 60px;
  width: 60px;
  border: 0px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  @media (min-width: 720px) {
    display: none;
  }
  @media (max-width: 768px) {
    height: calc(40px + (60 - 40) * ((100vw - 360px) / (768 - 360)));
    width: calc(40px + (60 - 40) * ((100vw - 360px) / (768 - 360)));
  }
`;
