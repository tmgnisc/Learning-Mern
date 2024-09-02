import React, { useState } from 'react';
import "../Styles/login.css"

const Login = () =>{
  const [formValues, setFormValues] = useState({
    email: '',
    password:''
  })

  const handleChange = (e) =>{
    const {name, value} = e.target 
    setFormValues({
        ...formValues, 
        [name]: value 
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault 
    console.log("login successful", formValues);
    
  }
//
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
    </div>
  );
}
export default Login