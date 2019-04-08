import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";

const Table = ({data}) =>
    !data.length ? null : (
        <div className="row">
            <h1>Showing <strong>{data.length}</strong> Items</h1>
            <table className="table table-striped">
                <thead>
                <tr className='table-header'>
                    {Object.entries(data[0]).map(item => <th key={key(item)}>{item[0]}</th>)}
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        {Object.entries(item).map(item => <td key={key(item)}>{item[1]}</td>)}
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
