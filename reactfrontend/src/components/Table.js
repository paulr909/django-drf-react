import React from "react";
import PropTypes from "prop-types";

const Table = ({ data }) =>
  !data.length ? null : (
    <div>
      <h2>
        Showing <strong>{data.length}</strong> items
      </h2>
      <table className="table table-striped">
        <thead>
          <tr className="table-header">
            {Object.entries(data[0]).map(item => (
              <th key={item}>{item[0]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              {Object.entries(item).map(item => (
                <td key={item}>{item[1]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

Table.propTypes = {
  data: PropTypes.array.isRequired
};

export default Table;
