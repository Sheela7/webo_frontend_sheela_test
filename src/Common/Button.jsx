import React from "react";
import "./Common.css";

function Button({ classes, title, navigateTo }) {
  return (
    <div className={`btn ${classes}`}>
      <a href={navigateTo}>{title}</a>
    </div>
  );
}

export default Button;
