import React, { useEffect, useState } from "react";
import "./style/index.css";
import TableItems from "../../../../components/TableItemsUfa/TableItems";

const Educacion = (props) => {
  const [educacionData, setEducacionData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/educacion")
      .then((response) => response.json())
      .then((data) => {
        setEducacionData(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div className="dashboard-main">
      {educacionData.length > 0 ? (
        <TableItems
          title="EDUCACION"
          data={educacionData}
          columns={[
            {
              Header: "Nombre Establecimiento Educativo",
              accessor: "nombreestablecimientoeducativo",
            },
            { Header: "Comunidad", accessor: "comunidad" },
            { Header: "Daño Parcial", accessor: "dañoparcial" },
            { Header: "Daño Total", accessor: "dañototal" },
            { Header: "Suspensión Clases", accessor: "suspensionclases" },
            {
              Header: "Pérdida Material Educativo",
              accessor: "perdidamaterialeducativo",
            },
            {
              Header: "Funciona Como Albergue",
              accessor: "funcionacomoalbergue",
            },
            { Header: "COD_INE", accessor: "cod_ine" },
            { Header: "Formulario ID", accessor: "formulario_id" },
          ]}
        />
      ) : (
        <p>No hay datos disponibles.</p>
      )}
    </div>
  );
};

export default Educacion;
