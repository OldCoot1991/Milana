"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SkeletonLogo = styled.div`

`;

export default function HeaderLogo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
    });

  if (!isLoaded) {
    return <SkeletonLogo />;
  }

  return (
    <HeaderLinkLogo href="/">
      <svg viewBox="0 0 82 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.8862 9.16169C57.5547 5.08585 67.1914 3.13949 73.8613 6.62499C85.9726 12.9542 83.3398 29.9598 73.9831 38.4645C73.9831 38.4645 61.2219 50.0811 45.8022 56.0464C52.8527 50.4654 64.9753 41.0463 69.914 30.9686C77.664 15.1541 65.2954 6.60453 48.8862 9.1617L48.8862 9.16169Z"
          fill="#009B97"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.4731 5.3419C33.9846 0.742756 23.1344 -1.32552 15.9283 0.896234C7.34562 3.54249 0.725707 12.0711 0.0451392 21.129C-1.45896 41.1512 35.0247 59.8722 49.8432 64C37.1424 55.8192 4.52422 32.3427 15.8708 13.8816C20.2372 6.77761 29.4062 2.41945 40.4731 5.3419Z"
          fill="#C91100"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.876 46.6798C51.0354 41.604 57.7352 33.8596 57.7352 33.8596C65.0197 24.9642 57.6554 12.9551 57.6554 12.9551C56.0965 21.662 52.8877 21.7627 48.7569 27.7511C44.6538 33.6988 45.7311 41.0316 49.8431 46.6798C49.8431 46.6798 46.5423 31.1648 56.2195 24.9904C56.2195 24.9904 47.8717 30.4325 50.8759 46.6798H50.876Z"
          fill="#C91100"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.0492 43.0762C40.1075 47.2674 37.7735 52.5668 37.7735 52.5668C47.8974 31.6331 25.8281 36.7398 25.6447 27.7638C32.5932 35.7129 46.2858 34.3192 40.4269 50.552C53.7608 27.881 29.0467 27.0334 23.8854 19.3082C21.1199 15.1686 22.2426 10.4957 22.2426 10.4957C22.2426 10.4957 15.7212 22.3972 22.5068 31.8014C27.3927 38.5728 35.5447 37.9761 38.0492 43.0762L38.0492 43.0762Z"
          fill="#009B97"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.9774 15.0944C45.6829 15.0944 47.8761 17.2528 47.8761 19.9153C47.8761 22.5778 45.6829 24.7362 42.9774 24.7362C40.2719 24.7362 38.0786 22.5778 38.0786 19.9153C38.0786 17.2528 40.2719 15.0944 42.9774 15.0944Z"
          fill="#C91100"
        />
      </svg>
    </HeaderLinkLogo>
  );
}

const HeaderLinkLogo = styled(Link)`
  width: 82px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: calc(52.2px + (82 - 52.2) * ((100vw - 360px) / (768 - 360)));
  }
`;