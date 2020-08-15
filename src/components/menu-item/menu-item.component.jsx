import React from "react";

import "./menu-item.styles.scss";

export default ({ title, imageUrl, size }) => {
  return (
    <div className={`${size ? size : ""} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
