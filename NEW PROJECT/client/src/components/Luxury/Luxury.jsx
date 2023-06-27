import React, { useEffect, useState } from 'react'
import './Luxury.css'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Luxury() {

  const [room,setroom]= useState([])
  
  useEffect(()=>{
    axios.post(`http://localhost:2000/imageupload/viewroom`).then((response)=>{
        console.log(response.data.data);
        setroom(response.data.data)
    }).catch((error)=>{
        console.log(error);
    })
  },[])
  console.log(room);
 


  return (
     
      <>
       <div class='fluid'>
    </div>
    <div className='content fluid' >
    <div class="row row-cols-1 row-cols-md-3 g-4" id='rowbox'>
          {room.map((details)=>(  
                      <div class="col">
                      <div class="card">
                        <img src={`upload/${details.image}`} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title"><i>Price:{details.rate} </i></h5>
                          <h5 class="card-title"><i>Discount:{details.discount} </i></h5>
                          <h5 class="card-title"><i>{details.facilities} </i></h5>
                          <h5 id='h5' style={{color:"green"}}> <i>Free cancelation Available</i> </h5>
                          <Link to={`/roomdeteils/${details._id}`}>   <button type="button"class="btn btn-primary" >More Details</button> </Link> 
                          <Link to={`/regroom/${details._id}`}>   <button type="button"class="btn btn-success">Book Now</button> </Link> 
                   
                      </div>
                      </div>
                    </div>
          ))}
     </div> 
    </div>
    </>
    
  )
}

export default Luxury