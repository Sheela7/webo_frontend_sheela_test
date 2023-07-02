import React from "react";
import { links } from "../../constant/constant";
import { downArrow } from "../../assets/images";

function NavLinks() {
  return (
    <ul className="nav-links">
      {links.map(({ id, name, type, linkTo }) => {
        return type === "drop-down" ? (
          <li key={id}>
            <a href={linkTo}>{name} <img src={downArrow} alt="Down arrow" /></a>
          </li>
        ) : (
          <li key={id}>
            <a href={linkTo}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
