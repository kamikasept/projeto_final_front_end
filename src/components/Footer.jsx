import React from "react";
import iconKamikaze from "../assets/images/icon.png";
import iconFacebook from "../assets/images/iconFacebook.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <Link to="/">
          <img
            className="logoFooter"
            src={iconKamikaze}
            alt="Icon do Kamikaze Smash Diner"
          />
        </Link>
        <div className="legalPages">
          <Link>Informação Legal</Link>
          <Link>Privacidade</Link>
          <Link>Politica de Cookies</Link>
        </div>

        <Link to="facebook">
          <img src={iconFacebook} alt="Icon do facebook" />
        </Link>
      </div>
      <div>
        <p className="concept">Concebido por Mickael Oliveira</p>
      </div>
    </div>
  );
};

export default Footer;
