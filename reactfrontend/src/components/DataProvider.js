import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

const DataProvider = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            setIsLoading(true);
            fetch(props.endpoint)
                .then(res => {
                    if (res.status !== 200) {
                        return {message: "Error connecting"};
                    }
                    return res.json();
                })
                .then(data => setData(data));
        };
        fetchData();
    }, [data, setIsLoading]);

    return (isLoading ? props.render(data) :
        <div className="text-center">Loading ...</div>);
};

DataProvider.propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
};

export default DataProvider;
