import React, { useEffect, useState } from "react";
import "./style/index.css";
import TableItems from "../../../../components/TableItemsUfa/TableItems";

const ComunidadesCpnv = (props) => {
  const [comunidadesData, setComunidadesData] = useState([]);
  console.log(comunidadesData);
  useEffect(() => {
    fetch("http://localhost:3000/comunidades")
      .then((response) => response.json())
      .then((data) => {
        setComunidadesData(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <>
      <div className="comunidades-main">
        {comunidadesData.length > 0 ? (
          <TableItems
            title="COMUNIDADES CPNV"
            data={comunidadesData}
            columns={[
              { Header: "COD_INE", accessor: "cod_ine" },
              { Header: "Departamento", accessor: "departamento" },
              { Header: "Provincia", accessor: "provincia" },
              { Header: "Municipio", accessor: "municipio" },
              { Header: "Comunidad", accessor: "comunidad" },
              { Header: "Empadronados", accessor: "empadronados" },
              { Header: "Viviendas", accessor: "viviendas" },
              { Header: "Latitud", accessor: "latitud" },
              { Header: "Longitud", accessor: "longitud" },
            ]}
          />
        ) : (
          <p>No hay datos disponibles.</p>
        )}
      </div>
    </>
  );
};

export default ComunidadesCpnv;
