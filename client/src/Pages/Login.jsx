import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/login.css";
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login successful", formValues);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      console.log("login form", response);

      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        setFormValues({ email: "", password: "" });

        // Show success toast
        toast.success("Login successful!");
       setTimeout(() =>{
        navigate("/");
       }, 1000)
      } else {
        // Show error toast
        toast.error("Invalid credentials. Please try again.");
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log("Error on the API of login", error);

      // Show error toast
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
