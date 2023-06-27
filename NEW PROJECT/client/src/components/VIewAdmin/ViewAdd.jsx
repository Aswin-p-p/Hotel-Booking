import React, { useEffect, useState } from 'react'
import './viewadmin.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ViewAdd() {

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
 
  const deleteuser = (id)=>{
       axios.post(`http://localhost:2000/imageupload/delete/${id}`).then((response)=>{
        window.location.reload()
       })
  }


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
                          <h5 class="card-title"><i>Add Discount:{details.discount} </i></h5>
                          <h5 class="card-title"><i>Place:{details.location} </i></h5>
                          <h5 class="card-title"><i>facilities:{details.facilities} </i></h5>
                          <h5 class="card-title"><i>Extra:{details.extrainfo} </i></h5>
                          <h5 class="card-title"><i>discount:{details.discount} </i></h5>
                          <h5 class="card-title"><i>nearbyplace:{details.nearbyplace} </i></h5>
                         <button type="button" onClick={()=>{deleteuser(details._id)}} class="btn btn-danger">DELETE</button>
                     <Link to={`/updateroom/${details._id}`}>   <button type="button"class="btn btn-primary">UPDATE</button> </Link> 
                      </div>
                      </div>
                    </div>
          ))}
     </div> 
    </div>

   </>
  )
}

export default ViewAdd