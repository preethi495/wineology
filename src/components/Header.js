import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Wineology logo" />
      <div className="w-100">
        <div className="list-group">
          <a className="list-group-item" href="#">
            ABOUT
          </a>
          <a className="list-group-item" href="#">
            SHOP
          </a>
          <a className="list-group-item" href="#">
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
