import React from "react";

import logo from "../../image/header/Logo.png";

// import vk from "../../image/footer/vk.svg";
// import fb from "../../image/footer/fb.svg";
// import instagram from "../../image/footer/instagram.svg";

type RegistrationPageFooterPropsType = {
  socialLink: {
    vk: string;
    fb: string;
    instagram: string;
  };
};

const Footer: React.FC<RegistrationPageFooterPropsType> = (props) => {
  const {
    socialLink: { vk, fb, instagram },
  } = props;
  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="footer__logo">
          <img src={logo} alt="Логотип" width="123" />
        </div>

        <ul className="footer__menu">
          <li>
            <a href="##">Каталог</a>
          </li>
          <li>
            <a href="##">О компании</a>
          </li>
          <li>
            <a href="##">Доставка и оплата</a>
          </li>
          <li>
            <a href="##">Где купить</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="##" target="_blank">
            <img src={vk} alt="vk" />
          </a>
          <a href="##" target="_blank">
            <img src={fb} alt="fb" />
          </a>
          <a href="##" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>

      <div className="footer__copyright">
        © 2017-2020 Все права защищены. Использование материалов с сайта без
        разрешения запрещено!
      </div>
    </footer>
  );
};

export default Footer;
