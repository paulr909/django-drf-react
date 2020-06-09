import React from "react";
import { Link } from "react-router-dom";
import useValidation from "../utils/useValidation";
import validateAuth from "../utils/validateAuth";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: ""
};

const Form = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    submitting
  } = useValidation(INITIAL_STATE, validateAuth);

  return (
    <div>
      <Link to="/" className="btn btn-outline-dark btn-sm mb-3">
        Leads &gt;
      </Link>
      <form onSubmit={handleSubmit} noValidate={true}>
        <div className="form-group">
          <label className="label">Name</label>
          <input
            className={errors.name && "error-input"}
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            required
            placeholder="Name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label className="label">Email</label>
          <div>
            <input
              className={errors.email && "error-input"}
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              required
              placeholder="Email"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
        </div>
        <div className="form-group">
          <label className="label">Message</label>
          <textarea
            className={errors.message && "error-input"}
            name="message"
            onChange={handleChange}
            value={values.message}
            onBlur={handleBlur}
            required
            placeholder="300 Characters Maximum"
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>
        <div className="form-group">
          <button
            disabled={submitting}
            type="submit"
            className="btn btn-outline-primary btn-sm"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
