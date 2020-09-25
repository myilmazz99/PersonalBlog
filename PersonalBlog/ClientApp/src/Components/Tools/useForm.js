import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  const handleChange = e => {
    let { name, value } = e.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [callback, errors, isSubmitting]);

  return {
    values,
    handleSubmit,
    handleChange,
    errors
  };
};

export default useForm;
