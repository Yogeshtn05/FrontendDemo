import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import CreateUser from './CreateUser.jsx'
import UpdateUser from './UpdateUser.jsx'
import User from './User'
const Apps = () => {
  return (
    <div>
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<User />}/>
        <Route path="/addUser" element={<CreateUser />}/>
        <Route path="/api/update/:id" element={<UpdateUser />}/>
        </Routes>
        </BrowserRouter>
        </div>
  )
}

export default Apps