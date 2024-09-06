import React from 'react'
import { useAuth } from '../store/auth'

const Home = () =>{
  const {user, isLoggedin} = useAuth() 
  return(

    <div>
        <h1>this is home page</h1>
        {isLoggedin && user ? (
            <h2>Welcome, {user.username}!</h2>
        ) : (
            <p>please login first</p>
        )}
    </div>
  )
}
export default Home