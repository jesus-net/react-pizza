import React from "react";

import "./Header.scss";
import logo from "../../assets/img/logo.svg";
import {Button} from "../UI/Button/Button";
export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
          <div className="header__block">
            <span className="header__title">REACT PIZZA</span>
            <p className="header__text">самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <Button type="cart" price={520} count={3}/>
      </div>
    </header>
  );
};
