import React, { Fragment, useState } from "react";
import "./style/index.css";

import { Link, NavLink } from "react-router-dom";
import Card from "./components/Card/Card";

const Navbar2 = () => {
  const [activeOption, setActiveOption] = useState("Comunidades");
  return (
    <div className="navbar-container-uwu">
      <NavLink to={"/dashboard/"} onClick={() => setActiveOption("Home")}>
        <Card
          description={"Comunidades"}
          iconName={"octicon:home-24"}
          className={""}
          isActive={activeOption === "Home"}
        />
      </NavLink>
      <NavLink to={"/dashboard/"} onClick={() => setActiveOption("Dish")}>
        <Card
          description={"Educacion"}
          iconName={"iconoir:reports"}
          className={""}
          isActive={activeOption === "Dish"}
        />
      </NavLink>
      <NavLink to={"/dashboard/"} onClick={() => setActiveOption("Cart")}>
        <Card
          description={"Salud"}
          iconName={"iconoir:reports"}
          className={""}
          isActive={activeOption === "Cart"}
        />
      </NavLink>
      <NavLink to={"/dashboard/"} onClick={() => setActiveOption("Profile")}>
        <Card
          description={"Servicios Basicos"}
          iconName={"iconoir:reports"}
          className={""}
          isActive={activeOption === "Profile"}
        />
      </NavLink>
    </div>
  );
};

export default Navbar2;
