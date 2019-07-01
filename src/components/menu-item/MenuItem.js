import React from "react";
import "./menuItem.scss";
export const MenuItem = ({ title, image,size }) => (
  <div  className={`${size} menu-item`}>
   <div class="background-image" style={{ backgroundImage: `url(${image})` }}/>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Sub title</span>
    </div>
  </div>
);
