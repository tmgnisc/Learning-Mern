import React, { useState } from 'react';

const Register = () =>{
 const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    phone: '',
    password:''

 })

 //handle input change

 const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({
        ...formValues, [name] : value 
        
    })
 }
}
export default Register