
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const[isLoggedIn, setLoggedIn]=useState(false);
  return (
    <div>
      <h1>Parent Component</h1>
        <login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
    </div>
  )
}

export default App
