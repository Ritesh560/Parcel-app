import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Register from "./components/register/register"
import Login from "./components/login/login"
import Parcel from "./components/parcel/parcel"

const App = () => {
  const [user, setLoginUser] = useState({})

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user && user.email ? <Parcel setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
      </Routes>
    </Router>
  )
}

export default App
