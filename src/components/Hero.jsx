import React from "react";
import backImage from "../assets/images/Hero_Back.avif";
import burger1 from "../assets/images/burgers/burguer1.jpg";

const Main = () => {
  return (
    <div className="hero">
      <img className="heroImage" src={backImage} alt="" />

      <p className="heroText">
        VENHA CONHECER O <span className="realce-laranja">MELHOR </span>
        HAMBURGER DA <span className="realce-laranja">CIDADE</span>
      </p>
      <div className="sobreRestaurante">
        <p className="textHome">
          Feitos com os melhores ingredientes. Os nossos{" "}
          <span>Hamburgueres</span> são sem duvidas os melhores da cidade.
        </p>
        <img src={burger1} alt="" />
        <p className="textHome">
          Nascido em 2025, o <span>Kamikaze Smash Diner</span> veio para trazer
          uma explosão de sabores
        </p>
      </div>
    </div>
  );
};

export default Main;
