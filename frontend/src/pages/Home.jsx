import React from 'react';
import {useNavigate} from "react-router-dom"
function Home() {
  const navigate = useNavigate()
  function handleClick(){
    navigate("/signup")
  }
  return (
    <div style={{height:`calc(100vh - 6rem)`}} className="flex items-center justify-center ">
      <h1 className="text-red">Welcome to Home please signup first</h1>
      <button onClick={handleClick}>Signup</button>
    </div>
  );
}

export default Home;