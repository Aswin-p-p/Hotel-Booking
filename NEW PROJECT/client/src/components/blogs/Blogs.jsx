import React from 'react'
import './Blogs.css'

function Blogs() {
  return (
   <>

   <div class='text-bg-light p-3'>
   <div id="carouselExampleCaptions" class="carousel slide bg-light">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/asset/person.jpg" class="" id='person' alt="..."/>
      
      <div class="carousel-caption d-none d-md-block" id='caption2'>
        <h3><i>Aswin</i></h3>
        <h5><i>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</i></h5>
       
      </div>
    </div>
    <div class="carousel-item">
      <img src="/asset/elon.webp" class="" id='person' alt="..."/>
      <div class="carousel-caption d-none d-md-block" id='caption2'>
      <h3><i>Aswin</i></h3>
        <h5><i>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</i>.</h5>
      
      </div>
    </div>
    <div class="carousel-item">
      <img src="/asset/person2.jpg" class="" id='person' alt="..."/>
      <div class="carousel-caption d-none d-md-block" id='caption2'>
      <h3><i>Aswin</i></h3>
        <h5><i>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</i></h5>
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
 
   </>
  )
}

export default Blogs