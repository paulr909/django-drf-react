import React from "react";
import PropTypes from "prop-types";

class DataProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loaded: false,
            message: "Loading..."
        }
    };

    componentDidMount() {
        fetch(this.props.endpoint)
            .then(response => {
                if (response.status !== 200) {
                    return this.setState({message: "Something went wrong"});
                }
                return response.json();
            })
            .then(data => this.setState({data: data, loaded: true}));
    }

    render() {
        return this.state.loaded ? this.props.render(this.state.data) : <p>{this.state.message}</p>;
    }

    static propTypes = {
        endpoint: PropTypes.string.isRequired,
        render: PropTypes.func.isRequired
    };
}

export default DataProvider;
