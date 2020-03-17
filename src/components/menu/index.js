import React from "react";
import "./styles.css";

const Menu = props => {
  const { isOpen, toggleMenu } = props;
  return isOpen ? (
    <div className="menu">
      <button className="close" onClick={() => toggleMenu()}>
        ×
      </button>
    </div>
  ) : null;
};

export default Menu;
