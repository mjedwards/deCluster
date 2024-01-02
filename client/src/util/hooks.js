import { useState } from "react";

export const userForm = (callback, initialState = {}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
