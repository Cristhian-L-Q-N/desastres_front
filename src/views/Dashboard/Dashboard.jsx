import React, { useEffect, useState } from "react";
import "./style/index.css";
import TableItems from "../../components/TableItemsUfa/TableItems";
import Navbar2 from "../../components/Navbar copy/Navbar2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComunidadesCpnv from "./views/ComunidadesCpnv/ComunidadesCpnv";
import Educacion from "./views/Educacion/Educacion";

const Dashboard = () => {
  return (
    <>
      <Navbar2 />
      <div className="body-main">
        <Routes>
          {/* <Route path="/" element={<ComunidadesCpnv />} /> */}
          <Route path="/dashboard/comunidades" element={<ComunidadesCpnv />} />
          <Route path="/" element={<ComunidadesCpnv />} />
          <Route path="/educacion" element={<Educacion />} />
          {/*<Route path="/educacion" element={<Tables />} />
        <Route path="/servicios" element={<Profile />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default Dashboard;
