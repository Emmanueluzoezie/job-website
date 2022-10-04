import React from "react"
import "./Login.css"
import logo from "../data/logo.png"
import { auth, authProvider } from '../firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full h-full flex justify-center ">
      <div className="flex flex-column ">
        <img src={logo} className=""/>
        <button onClick={() => {}} className="cursor-pointer">SignIn as Enginner</button>
        <p>OR</p>
        <button>SignIn as Client</button>
      </div>
    </div>
  )
}

export default Login