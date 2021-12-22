import React from "react";
import logo from "../../image/header/Logo.png";
import cart from "../../image/header/cart.svg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <button
            className="hamburger hamburger--squeeze header__toggle js-menu-toggle"
            type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <div className="header__logo">
            <img src={logo} alt="Логотип" />
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="##">Каталог</a>
              </li>
              <li className="header__nav-item">
                <a href="##">Бренды</a>
              </li>
              <li className="header__nav-item">
                <a href="##">Доставка и оплата</a>
              </li>
              <li className="header__nav-item">
                <a href="##">Где купить</a>
              </li>
            </ul>
          </nav>

          <div className="header__right">
            <a href="tel:+74952884424" className="header__phone">
              +7 (495) 288-44-24
            </a>
            <a href="##" className="header__cart">
              <img src={cart} alt="Корзина" />
              <span className="header__cart-number">3</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
