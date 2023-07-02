import React, { useState } from "react";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";

function Navigation() {
  const [isMenu, setIsMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsMenu(!isMenu)
  }
  return (
    <div className="navigation">
      <h3 className="company-logo">ar shakir</h3>

      <div className={`navbar ${isMenu ? "navbar-mobile" : ""}`}>
        <NavLinks />
        <NavButtons />
      </div>
      <div className="hamburger-menu" onClick={toggleHamburgerMenu}>
        <i className={`fa-solid ${!isMenu ? "fa-bars" : "fa-xmark"}`}  />
      </div>
    </div>
  );
}

export default Navigation;
