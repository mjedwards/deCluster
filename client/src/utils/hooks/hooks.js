import { useState } from "react";

export const useUserForm = (callback, initialState = {}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = useState(initialState);
  const [formErrors, setFormErrorsErrors] = useState({});

  const validateEmail = (email) => {
    // Regular expression to validate email
    const re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };
  

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if ('email_username' in values && values.email_username.includes('@')) {
      if (!validateEmail(values.email_username)) {
        setFormErrorsErrors({ ...formErrors, email_username: 'Invalid email format' });
        return; // Stop the form submission if validation fails
      }
    }
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
    formErrors,
  };
};
