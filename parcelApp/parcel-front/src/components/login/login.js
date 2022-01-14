import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import "./login.css"

const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handelsubmit = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handelLogin = () => {
    if (user.email === "" || user.password === "") alert("All sections are compulsory")
    else {
      axios.post("http://localhost:5000/login", user).then((res) => {
        alert(res.data.message)
        setLoginUser(res.data.user)
      })
    }
  }

  return (
    <div className="login">
      <input className="input" name="email" placeholder="Email-Id" input="text" value={user.email} onChange={handelsubmit} />
      <input className="input" name="password" placeholder="Password" input="password" value={user.password} onChange={handelsubmit} />
      <div className="button" onClick={handelLogin}>
        Login
      </div>
      <div>or</div>
      <Link to="/register">
        <div className="button">Register</div>
      </Link>
    </div>
  )
}

export default Login
