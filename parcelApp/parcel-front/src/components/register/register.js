import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./register.css"

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  })

  const handelChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handelsubmit = () => {
    const { name, email, password, repassword } = user
    if (name && email && password && repassword && password === repassword) {
      axios
        .post("http://localhost:5000/register", user)
        .then((res) => {
          alert(res.data.message)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      alert("Please fill all details correctly")
    }
  }

  return (
    <div className="login">
      <input type="text" placeholder="Enter your Name" name="name" className="input" onChange={handelChange} />
      <input type="email" className="input" placeholder="Enter your Email" name="email" onChange={handelChange} />
      <input type="password" name="password" className="input" placeholder="Enter your Password" onChange={handelChange} />
      <input type="password" name="repassword" className="input" placeholder="Re-Enter your Password" onChange={handelChange} />
      <div className="button" onClick={handelsubmit}>
        Register
      </div>
      <div>or</div>
      <Link to="/">
        <div className="button">Login</div>
      </Link>
    </div>
  )
}

export default Register
