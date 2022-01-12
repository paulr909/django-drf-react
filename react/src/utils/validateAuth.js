const validateAuth = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  if (!values.name) {
    errors.name = "Name Required";
  } else if (values.name.length < 3) {
    errors.name = "Your name must be more than 3 characters";
  }
  if (!values.message) {
    errors.message = "Message Required";
  } else if (values.message.length > 300) {
    errors.message = "Message must not contain more than 300 characters";
  }
  return errors;
};

export default validateAuth;
