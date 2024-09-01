import React, { useState } from "react";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    emailL: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
};
export default Contact;
