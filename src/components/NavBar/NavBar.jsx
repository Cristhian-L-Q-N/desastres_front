

import './style/index.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import OptionsCard from "./components/OptionsCard"

const NavBar = () => {
  const [activeOption, setActiveOption] =useState("Dashboard");
  return (
    <div className="navbar-container">
      <h3>APP DESASTRES</h3>
      <NavLink to={"/dashboard"} onClick={() => setActiveOption("Dashboard")}>
        <OptionsCard
          description={"Dashboard"}
          iconName={"octicon:home-24"}
          className={""}
          isActive={activeOption === "Dashboard"}
        />
      </NavLink>
      <NavLink to={"/reportes"}onClick={() => setActiveOption("Reportes")}>
    <OptionsCard
          description={"Reportes"}
          iconName={"iconoir:reports"}
          className={""}
          isActive={activeOption === "Reportes"}
        />
      </NavLink>
      <NavLink to={"/graficas"} onClick={() => setActiveOption("Graficas")}>
        <OptionsCard
          description={"Graficas"}
          iconName={"wpf:statistics"}
          className={""}
          isActive={activeOption === "Graficas"}
        />
      </NavLink>
    </div>
  );
};

export default NavBar;
