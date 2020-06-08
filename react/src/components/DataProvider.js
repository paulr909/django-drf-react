import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DataProvider = ({ endpoint, render }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // mimic slow network 2000ms
    setTimeout(() => {
      const fetchData = () => {
        setLoading(true);
        fetch(endpoint)
          .then(res => {
            if (res.status !== 200) {
              return { message: "Error connecting" };
            }
            return res.json();
          })
          .then(data => setData(data))
          .catch(() => {
            console.error();
          });
      };
      fetchData();
    }, 2000);
  }, []);

  return loading ? render(data) : <h3 className="text-center">Loading...</h3>;
};

DataProvider.propTypes = {
  endpoint: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

export default DataProvider;
