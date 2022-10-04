import React from 'react';
import './App.css';
import Login from "./components/Login"
import ClientLogin from "./pages/login/ClientLogin"
import EngineerLogin from "./pages/login/EngineerLogin"
import { BrowserRouter, Routes,  Route } from "react-router-dom"

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Login />
      {/* <div className="app-pages"> */}
      <Routes>
          <Route path='/engineerlogin' element={<EngineerLogin />}  />
          <Route path='/clientlogin' element={<ClientLogin />}/>
      </Routes>
      {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
