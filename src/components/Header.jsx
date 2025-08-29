import React from "react";
import iconKamikaze from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={iconKamikaze} alt="Icon do Kamikaze Smash Diner" />
      </Link>
      <div className="nav__bar">
        <Link className="header__link" to="/menu">
          Menu
        </Link>

        <Link className="header__link" to="/especialidades">
          Especialidades
        </Link>

        <Link className="header__link" to="/grupos">
          Grupos
        </Link>

        <Link className="header__link" to="/reservas">
          Reservas & Contactos
        </Link>
      </div>
    </div>
  );
};

export default Header;
