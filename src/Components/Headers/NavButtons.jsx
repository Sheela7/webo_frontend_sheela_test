import React from "react";
import Button from "../../Common/Button";

function NavButtons() {
  const links = [
    {
      id: 1,
      type: "normal",
      title: "sign in",
      navigateTo: "#",
    },
    {
      id: 2,
      type: "blue-bg",
      title: "start free",
      navigateTo: "#",
    },
  ];
  return (
    <ul className="nav-buttons">
      {links.map(({ id, title, navigateTo, type }) => {
        return (
          <li key={id}>
            <Button
              classes={`${type === "blue-bg" ? "bg-blue" : ""}`}
              title={title}
              navigateTo={navigateTo}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default NavButtons;
