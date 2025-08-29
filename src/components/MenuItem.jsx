import React from "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";
import { useState } from "react";

const MenuItem = ({ title, items, itemsArray, path }) => {
  return (
    <div className="item-list">
      <div className="item-list_header">
        <h2>{title}</h2>
        <Link to={path} className="item-list_link">
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list_container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currentObj, index) => (
            <SingleItem {...currentObj} key={`${title}-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default MenuItem;
