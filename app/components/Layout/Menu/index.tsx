"use client";

import React, { useState } from "react";
import styles from "../../../styles/menu_button.module.css";
import styless from '../../../styles/menu.module.css';

interface Props {
  onClick?: () => void;
}

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
  }

export default function HeaderButton({ onClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={styles.mobail_button}>
      <button
        className={`${styles.icon} ${styles.nav_icon_5} ${
          isOpen ? styles.open : ""
        }`}
        onClick={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Menu isOpen={isOpen} onClose={handleMenuToggle} />
    </div>
  );
}


function Menu({ isOpen, onClose }: MenuProps) {
    return (
      <div className={`${styless.menu} ${isOpen ? styless.open : ''}`}>
        <ul className={styless.ul}>
          <li className={styless.li}><a href="/">Главная</a></li>
          <li className={styless.li}><a href="./about-us">О клинике</a></li>
          <li className={styless.li}><a href="./documets">Документы</a></li>
          <li className={styless.li}><a href="./services">Услуги</a></li>
          <li className={styless.li}><a href="./doctors">Врачи</a></li>
          <li className={styless.li}><a href="./address">Контакты</a></li>
          <li className={styless.li}><a href="https://app.medtochka.ru/authorization/?next=%2F%3Flpu_hash%3D3f95a31a4856851683a3ebb7d764ff61%26source%3Dlpu_site">Личный кабинет</a></li>
        </ul>
        <button className={styless.closeBtn} onClick={onClose}>Закрыть</button>
      </div>
    );
  };

  
