import React, { useState, useRef, useEffect } from "react";
import { groupsData } from "../assets/database/groupData";

const Dropdown = ({ onSelect, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`dropdown-container ${className}`}>
      <div className={`dropdown ${isOpen ? "active" : ""}`} ref={dropdownRef}>
        <button className="dropdown-button" onClick={toggleDropdown}>
          <span>
            {selectedOption ? selectedOption.name : "Selecione um Grupo"}
          </span>
          <span className={`dropdown-arrow ${isOpen ? "rotated" : ""}`}>▼</span>
        </button>

        <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
          {groupsData.map((option, index) => (
            <div
              key={option.id}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              <span className="dropdown-item-icon">{option.icon}</span>
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedOption && (
        <div className="selected-group-info">
          <h2>{selectedOption.title}</h2>
          <p>{selectedOption.description}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
