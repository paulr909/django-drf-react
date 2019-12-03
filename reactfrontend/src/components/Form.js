import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const lead = { name, email, message };
    const config = {
      method: "POST",
      body: JSON.stringify(lead),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(props.endpoint, config).then(res => console.log(res));
    window.location.reload(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
            value={name}
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
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="label">Message</label>
          <textarea
            className="form-control"
            name="message"
            onChange={e => setMessage(e.target.value)}
            value={message}
            required
            placeholder={"300 Characters Maximum"}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-sm btn-primary">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  endpoint: PropTypes.string.isRequired
};

export default Form;
