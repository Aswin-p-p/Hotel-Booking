import React from 'react'
import './navbar.css'
export default function MainNav() {
  return (
    <>  <nav class="navbar navbar-expand-lg text-bg-danger p-3 ">
    <div class="container-fluid ">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand fs-1 text-white" style={{fontFamily: 'Stylish'}}>  HEAVEN HOTEL</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/">Home</a>
          </li>
        
          <li class="nav-item">
            <a class="nav-link" href='/homegellary'>Gellary</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href='/homeblog'>Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href='/homecontact'>Contact us</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
    </>
  )
}
