import React from 'react'
import { useAuth } from '../store/auth'

const Home = () =>{
  const {user, isLoggedIn} = useAuth() 
  return(

    <div>
        <h1>this is home page</h1>
        {isLoggedIn && user ? (
            <h2>Welcome, {user.username}!</h2>
        ) : (
            <p>please login first</p>
        )}
    </div>
  )
}
export default Home