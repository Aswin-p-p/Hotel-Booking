import React from 'react'
import { useNavigate } from 'react-router-dom'
import './admin.css'
export default function AdminNav() {
  const navigate = useNavigate()
  const logout = () =>{  
    localStorage.removeItem("user_id",)
    navigate('/')
}
  return (
    <>  <nav class="navbar navbar-expand-lg text-bg-danger p-3 ">
    <div class="container-fluid ">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand fs-1 text-white" style={{fontFamily: 'Stylish'}}>  HEAVEN HOTEL</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id='navbarr' style={{marginLeft:"10Px"}}>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/adminhome">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admroom">AddRooms</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/addgellary">AddGellary</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admview">ViewRooms</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/userview">ViewUser</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href='/admgellary'>Gellary</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href='/bookedrooms'>Booked</a>
          </li>


          <li class="nav-item">
            <a class="nav-link" onClick={logout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}
