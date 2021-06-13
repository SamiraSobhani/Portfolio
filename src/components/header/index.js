import React from "react";
import "../header/style.css";
function Header() {
  return (
    <>
      <div className="header"></div>
      <div className="navbar">
        <button className="header_button">Project</button>
        <button className="header_button">About me</button>
        <button className="header_button">Contact me</button>
      </div>
    </>
  );
}

export default Header;
