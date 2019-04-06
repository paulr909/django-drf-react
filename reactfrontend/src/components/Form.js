import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const {name, email, message} = this.state;
        const lead = {name, email, message};
        const config = {
            method: "post",
            body: JSON.stringify(lead),
            headers: new Headers({"Content-Type": "application/json"})
        };
        fetch(this.props.endpoint, config).then(response => console.log(response));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="label">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label">Email</label>
                        <div>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="label">Message</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.handleChange}
                            value={this.state.message}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };
}

export default Form;
