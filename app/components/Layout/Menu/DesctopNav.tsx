"use client";

import styled from "styled-components";

const DesctopNav = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <ButtonLink className="Manrope-Regular" href="/">
            Главная
          </ButtonLink>
        </Li>
        <Li>
          <ButtonLink className="Manrope-Regular" href="./about-us">
            О нас
          </ButtonLink>
        </Li>
        <Li>
          <ButtonLink className="Manrope-Regular" href="./documets">
            Документы
          </ButtonLink>
        </Li>
        <Li>
          <ButtonLink className="Manrope-Regular" href="./services">
            Услуги
          </ButtonLink>
        </Li>
        <Li>
          <ButtonLink className="Manrope-Regular" href="./doctors">
            Врачи
          </ButtonLink>
        </Li>
        <Li>
          <ButtonLink className="Manrope-Regular" href="./address">
            Контакты
          </ButtonLink>
        </Li>
        {/* <Li>
          <ButtonLink
            className="Roboto-Regular"
            href="https://app.medtochka.ru/authorization/?next=%2F%3Flpu_hash%3D3f95a31a4856851683a3ebb7d764ff61%26source%3Dlpu_site"
          >
            Личный кабинет
          </ButtonLink>
        </Li> */}
      </Ul>
    </Nav>
  );
};

export default DesctopNav;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-left: calc(30px + (50 - 30) * ((100vw - 1024px) / (1920 - 1024)));
  padding-right: calc(30px + (50 - 30) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1024px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 768px) {
    padding-left: calc(20px + (30 - 20) * ((100vw - 360px) / (768 - 360)));
    padding-right: calc(20px + (30 - 20) * ((100vw - 360px) / (768 - 360)));
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: calc(10px + (20 - 10) * ((100vw - 768px) / (1920 - 768)));
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  padding: 18px 20px;
  border: 1px solid #0db0b8;
  border-radius: 30px;
  @media (max-width: 900px) {
    padding: 10px 10px;
  }
`;

const ButtonLink = styled.a`
  color: var(--text-dark);
  text-decoration: none;
  font-size: calc(20px + (24 - 20) * ((100vw - 1024px) / (1924 - 1024)));
  letter-spacing: 0.44px;
  line-height: 100%;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;
