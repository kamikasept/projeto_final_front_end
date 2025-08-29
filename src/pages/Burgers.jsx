import React from "react";
import { burgerArray } from "../assets/database/burgers";
import Spacing from "../components/Spacing";
import MenuItem from "../components/MenuItem";
import { Link } from "react-router-dom";

const Burgers = () => {
  return (
    <div className="menu">
      <Spacing />
      <MenuItem
        title="Burgers"
        items={burgerArray.length}
        itemsArray={burgerArray}
      />
      <div className="backToMenu">
        <Link to="/menu">Voltar ao Menu</Link>
      </div>
    </div>
  );
};

export default Burgers;
