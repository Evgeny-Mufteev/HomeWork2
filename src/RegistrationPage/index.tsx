import React from "react";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

import vk from "../../image/footer/vk.svg";
import fb from "../../image/footer/fb.svg";
import instagram from "../../image/footer/instagram.svg";

const RegistrationPage: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default RegistrationPage;
