import React from "react";
import { drinksArray } from "../assets/database/drinks";
import Spacing from "../components/Spacing";
import MenuItem from "../components/MenuItem";
import { Link } from "react-router-dom";

const Drinks = () => {
  return (
    <div className="menu">
      <Spacing />
      <MenuItem
        title="Bebidas"
        items={drinksArray.length}
        itemsArray={drinksArray}
      />
      <div className="backToMenu">
        <Link to="/menu">Voltar ao Menu</Link>
      </div>
    </div>
  );
};

export default Drinks;
