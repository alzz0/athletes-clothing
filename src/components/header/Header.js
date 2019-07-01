import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="logo-container">
        <Logo className="logo" />
      </NavLink>
      <div class="options">
        <NavLink to="/shop" className="options">
          SHOP
        </NavLink>
        <NavLink to="/contact" className="options">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
