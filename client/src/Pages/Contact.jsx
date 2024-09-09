import React, { useState, useEffect } from "react";
import "../Styles/contact.css";
import { useAuth } from "../store/auth";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);
  const [submitStatus, setSubmitStatus] = useState(null); // For user feedback

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setFormValues({
        username: user.username || "",
        email: user.email || "",
        message: "",
      });
      setUserData(false);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Contact form submitted successfully", formValues);
    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setSubmitStatus("Message sent successfully!");
      } else {
        setSubmitStatus("Failed to send message.");
      }
    } catch (error) {
      console.log("Error while fetching API for contact", error);
      setSubmitStatus("Error submitting the form.");
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
            value={formValues.username || ""} // Ensure value is controlled
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
            value={formValues.email || ""} // Ensure value is controlled
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formValues.message || ""} // Ensure value is controlled
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
      {submitStatus && <p>{submitStatus}</p>}
    </div>
  );
};

export default Contact;
