import React, { useState } from 'react'
import App from './App';

const login = (isLoggedIn, setLoggedIn) => {
    const [data, setData]= useState({username: '', password:''});

    const handleSubmit=(e)=>{
        e.preventDefault();
        setData({...data, [e.target.name]: e.target.value});
    };

  return (
    <div>
        {isLoggedIn ? (<p>You are logged in!</p>):
        (
            <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' name='username' placeholder='Username' value={data.username} onChange={handleSubmit} />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' name='password' placeholder='Password' value={data.password} onChange={handleSubmit} />
        </div>
        <button onClick={()=>setLoggedIn('true')}>Login</button>
        </form>
        )}
    </div>
  )
}

export default login