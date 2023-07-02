import React from "react";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";

function NavBar() {
  return (
    <div className={`navbar`}>
      <NavLinks />
      <NavButtons />
    </div>
  );
}

export default NavBar;
