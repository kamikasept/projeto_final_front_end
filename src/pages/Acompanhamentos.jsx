import React from "react";
import { aSideDishArray } from "../assets/database/aSideDish";
import Spacing from "../components/Spacing";
import MenuItem from "../components/MenuItem";
import { Link } from "react-router-dom";

const Acompanhamentos = () => {
  return (
    <div className="menu">
      <Spacing />
      <MenuItem
        title="Acompanhamentos"
        items={aSideDishArray.length}
        itemsArray={aSideDishArray}
        path="/acompanhamentos"
      />
      <div className="backToMenu">
        <Link to="/menu">Voltar ao Menu</Link>
      </div>
    </div>
  );
};

export default Acompanhamentos;
