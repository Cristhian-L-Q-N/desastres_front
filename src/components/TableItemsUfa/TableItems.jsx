import "./style/index.css";
import { NavLink } from "react-router-dom";

const TableItems = ({ data, columns, title, height, width }) => {
  return (
    <div className="table-container-main">
      <h2>{title}</h2>
      <div className="table-only" style={{ height: height }}>
        <table className="tabla">
          <thead className="UWU">
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="table-row" key={index}>
                {columns.map((column) => (
                  <td key={column.accessor}>
                    {item[column.accessor] === true
                      ? "SI"
                      : item[column.accessor] === false
                      ? "NO"
                      : item[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableItems;
