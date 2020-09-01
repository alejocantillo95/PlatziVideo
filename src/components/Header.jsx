import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header>
    <img className="header__img" src="./images/logo-platzi-video-BW2.png" alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src="./images/user-icon.png" alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href="http://">Cuenta</a></li>
          <li><a href="http://">Cerrar Sesión</a></li>
        </ul>
      </div>
  </header>
);

export default Header;