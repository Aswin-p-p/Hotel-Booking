import React from 'react'
import Welcome from '../../components/welcome/Welcome'
import AdminNav from '../../components/navbar/AdminNav'
function AdminHome() {
  return (
   <>
    <AdminNav/>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item "  data-bs-interval="10000">
      <img src="/asset/hotel7.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <Welcome/>
      </div>
    </div>
    <div class='login'>
      
    </div>
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="/asset/hotel8.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <Welcome/>
      </div>
    </div>
    <div class='login'>
      
    </div>
   
    <div class="carousel-item">
      <img src="/asset/hotel6.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-caption">
        <Welcome/>
      </div>
    <div class='login'>
      
    </div>
  </div>
 
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



   </>
  )
}

export default AdminHome