import { useState, useEffect } from "react";
import { baseUrl } from "./baseUrl";

const useValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (submitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log(
          // "authenticated!",
          values.name,
          values.email,
          values.message
          // values.password
        );
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);

    const lead = { ...values };
    const config = {
      method: "POST",
      body: JSON.stringify(lead),
      headers: new Headers({ "Content-Type": "application/json" }),
    };
    await fetch(baseUrl, config).then((res) => console.log(res));
    setValues(initialState);
  };

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    submitting,
  };
};

export default useValidation;
