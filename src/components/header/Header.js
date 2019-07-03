import React from "react";
import { NavLink,Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.scss";

const Header = ({ user }) => {
  return (
    <div className="header">
      <NavLink to="/" className="logo-container">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink to="/shop" className="options">
          SHOP
        </NavLink>
        <NavLink to="/contact" className="options">
          CONTACT
        </NavLink>
        {user?(<div className="option" onClick={()=>auth.signOut()}>Sign Out</div>):(<Link  className="option"to="/signin">Sign In</Link>)}
      </div>
    </div>
  );
};
export default Header;
