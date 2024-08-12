"use client";

import styled from "styled-components";

const DesctopNav = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <ButtonLink className="Roboto-Regular" href="/">
            Главная
          </ButtonLink>
        </Li>
        <Li>
          <ButtonLink className="Roboto-Regular" href="./about-us">
            О клинике
          </ButtonLink>
        </Li>
        <Li>
          <ButtonLink className="Roboto-Regular" href="./documets">
            Документы
          </ButtonLink>
        </Li>
        <Li>
          <ButtonLink className="Roboto-Regular" href="./services">
            Услуги
          </ButtonLink>
        </Li>
        <Li>
          <ButtonLink className="Roboto-Regular" href="./doctors">
            Врачи
          </ButtonLink>
        </Li>
        <Li>
          <ButtonLink className="Roboto-Regular" href="./address">
            Контакты
          </ButtonLink>
        </Li>
        <Li>
          <ButtonLink
            className="Roboto-Regular"
            href="https://app.medtochka.ru/authorization/?next=%2F%3Flpu_hash%3D3f95a31a4856851683a3ebb7d764ff61%26source%3Dlpu_site"
          >
            Личный кабинет
          </ButtonLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default DesctopNav;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-left: calc(50px + (100 - 50) * ((100vw - 1024px) / (1920 - 1024)));
  padding-right: calc(50px + (100 - 50) * ((100vw - 1024px) / (1920 - 1024)));
  @media (max-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 768px) {
    padding-left: calc(20px + (50 - 20) * ((100vw - 360px) / (768 - 360)));
    padding-right: calc(20px + (50 - 20) * ((100vw - 360px) / (768 - 360)));
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  :hover {
    border-bottom: 3px solid #d8135a;
    transition: 0.2s ease-in-out;
  }
`;

const ButtonLink = styled.a`
  color: var(--text-dark);
  text-decoration: none;
  font-size: calc(20px + (24 - 20) * ((100vw - 1024px) / (1924 - 1024)));
  letter-spacing: 0.44px;
  line-height: 100%;

  @media (max-width: 1024px) {
    font-size: calc(17px + (20 - 17) * ((100vw - 768px) / (1024 - 768)));
  }
`;
