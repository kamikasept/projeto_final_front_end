import React from "react";
import Spacing from "../components/Spacing";
import Milshakes from "../assets/images/milkshakes.jpeg";

const Especialidades = () => {
  return (
    <div className="especialidades">
      <Spacing />
      <h1>As nossas especialidades</h1>
      <h2 className="spec-title">🍔 Burgers! 🍔</h2>
      <div className="spec-item">
        <img
          className="spec-img"
          src="src/assets/images/varios-burgers.jpeg"
          alt=""
        />
        <div className="spec-text">
          <p>
            No <strong>Kamikaze Smash Diner</strong>, levamos hambúrgueres a
            sério! Cada burger é uma experiência única, preparado com{" "}
            <strong>ingredientes frescos e selecionados</strong>:
          </p>

          <ul>
            <li>
              <strong>Carnes premium</strong>: Blend especial de fraldinha,
              costela e patinho, grelhado no ponto perfeito.
            </li>
            <li>
              <strong>Pães artesanais</strong>: Brioche macio, australiano com
              gergelim ou integral – assados diariamente.
            </li>
            <li>
              <strong>Combinações criativas</strong>: Do clássico{" "}
              <em>Cheese Burger</em> ao <em>Barbecue Bacon</em>, com molhos
              exclusivos.
            </li>
            <li>
              <strong>Opções veganas</strong>: Nosso <em>Beyond Burger</em> com
              "carne" vegetal e queijo derretido de castanhas.
            </li>
          </ul>

          <p>
            E não para por aí! Monte seu burger da forma que preferir ou se
            surpreenda com as <strong>criações do chef</strong>, como o{" "}
            <em>Truffle Burger</em> (com molho de trufas e cogumelos
            caramelizados).
          </p>
        </div>
      </div>
      <h2 className="spec-title">🥤 Milkshakes 🥤</h2>
      <div className="spec-item">
        <div className="spec-text">
          <p>
            Os nossos milkshakes são mais do que uma bebida - são uma
            experiência! Preparados com <strong>ingredientes premium</strong> e
            muito carinho, cada gole é uma explosão de sabor:
          </p>

          <ul>
            <li>
              <strong>Base perfeita</strong>: Gelado artesanal de alta qualidade
              batido na hora
            </li>
            <li>
              <strong>Sabores clássicos</strong>: Chocolate, Baunilha e Morango
            </li>
            <li>
              <strong>Criações especiais</strong>: Nutella com amendoim ou Doce
              de Leite
            </li>
            <li>
              <strong>Opções premium</strong>: Red Velvet com cream cheese
            </li>
          </ul>

          <p>
            E para deixar ainda mais especial, todos os nossos shakes vêm com{" "}
            <strong>coberturas incríveis</strong>: chantilly caseiro, calda
            quente, pedaços de cookie e muito mais!
          </p>
        </div>
        <img className="spec-img" src={Milshakes} alt="" />
      </div>
    </div>
  );
};

export default Especialidades;
