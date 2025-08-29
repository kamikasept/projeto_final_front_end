import React, { useState } from "react";
import grupoImage from "../assets/images/grupos/grupo.jpg";
import Dropdown from "../components/DropDown";

const Grupos = () => {
  const [setSelectedGroup] = useState(null);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="grupos">
      <img className="grupoIamge" src={grupoImage} alt="Grupo a Mesa" />

      <Dropdown className="dropdown" onSelect={handleGroupSelect} />
    </div>
  );
};

export default Grupos;
