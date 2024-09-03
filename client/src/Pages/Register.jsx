import React, { useState } from "react";
import "../Styles/register.css";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate()

  //handle input change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); //jaba form click garxam by default page refresh hunxa so yo rakheko
    console.log("form submitted", formValues);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        alert("register successful")
        setFormValues({ username: "", email: "", phone: "", password: "" });
        navigate("/login")
      } else {
        alert("invalid credentials")
      }
      console.log(response);
    } catch (error) {
      console.log("error while fetching API on register", error);
    }
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
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
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
