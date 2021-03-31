import React from "react";
import { Header } from "./Header";

export const Navbar = () => {
  return (
    <div className="navbar navbar-light">
      <a className="navbar-brand" href="#">
        <img
          src="App_logo_final.png"
          alt="HTML5 Icon"
          width="125"
          height="125"
        ></img>
        <Header />
      </a>
    </div>
  );
};
