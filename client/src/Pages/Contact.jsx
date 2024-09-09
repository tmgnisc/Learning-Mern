import React, { useState } from "react";
import "../Styles/contact.css";
import { useAuth } from "../store/auth";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    emailL: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);

  const { user } = useAuth();
  if (userData && user) {
  setFormValues({
    username:user.username,
    email: user.email,
    message: "",
  })
  setUserData(false)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    console.log("Contact form submitted successfully", formValues);
    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers:{
          "Content-Type" : "application/json", 
        }, 
        body: JSON.stringify(formValues)
      })
    } catch (error) {
      console.log("error while fetching api of contact", error)
    }
  };
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default Contact;
