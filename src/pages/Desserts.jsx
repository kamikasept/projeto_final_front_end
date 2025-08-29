import React from "react";
import { dessertArray } from "../assets/database/desserts";
import Spacing from "../components/Spacing";
import MenuItem from "../components/MenuItem";
import { Link } from "react-router-dom";

const Desserts = () => {
  return (
    <div className="menu">
      <Spacing />
      <MenuItem
        title="Sobremesas"
        items={dessertArray.length}
        itemsArray={dessertArray}
      />
      <div className="backToMenu">
        <Link to="/menu">Voltar ao Menu</Link>
      </div>
    </div>
  );
};

export default Desserts;
