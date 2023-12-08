import React, { useState } from "react"
import Login from "./Login"
import Register from "./Register"
import "../css/Auth.css"

export default function ({appData, setAppData}) {
  let [authMode, setAuthMode] = useState("signin")

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <div className="Auth-form">
            <div className="Auth-form-content">
                <Login setAuth = {setAuthMode} appData={appData} setAppData={setAppData}/>
            </div>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className="Auth-form-container">
        <div className="Auth-form">
            <div className="Auth-form-content">
                <Register setAuth = {setAuthMode} appData={appData} setAppData={setAppData}/>
            </div>
        </div>
      </div>
    )
  }
}