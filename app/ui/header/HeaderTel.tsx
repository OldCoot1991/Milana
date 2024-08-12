"use client"

import Link from "next/link";
import styled from "styled-components";

export default function HeaderTel() {
  return (
    <Tel className="Roboto-Bold" href={"tel:+7 (900) 303-00-01"} target="_blank">
      +7  (900) 303-00-01
    </Tel>
  );
}

const Tel = styled(Link)`
margin: 0 auto;
font-size: calc(24px + (32 - 24) * ((100vw - 1024px) / (1920 - 1024)));
letter-spacing: 0.44px;
color: var(--text-dark);
@media (max-width: 1024px) {
    font-size: calc(20px + (24 - 20) * ((100vw - 768px) / (1024 - 768)));
}
@media (max-width: 720px) {
    display: none;
}
`
