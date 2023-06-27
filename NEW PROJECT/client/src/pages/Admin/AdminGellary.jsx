import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AdminGellary() {
    const [gellary,setgellary]= useState([])
useEffect (()=>{
    axios.post(`http://localhost:2000/gellary/viewgellary`).then((response)=>{
        console.log("response-->",response);
        setgellary(response.data.data)
    }).catch((error)=>{
        console.log(error);
    })
},[])
console.log(gellary);
const deleteuser = (id)=>{
    axios.post(`http://localhost:2000/gellary/delete/${id}`).then((response)=>{
      console.log("response0--------->",response);

    }).catch((error)=>{
      console.log(error);
    })
}
  return (
    <>
           <div class='fluid'>
    <img src="/asset/back2.jpg" class="img-fluid" alt="..."/> 
    </div>
    <div className='content fluid' >
    <div class="row row-cols-1 row-cols-md-3 g-4">
     {gellary.map((data)=>(
                   <div class="col">
                   <div class="card">
                     <img src={`upload/${data.image}`}class="card-img-top" alt="..."/>
                     <div class="card-body">
                     <button onClick={()=>{deleteuser(data._id)}} class="btn btn-danger">Delete</button>
                      </div>                      
                   </div>                   
                 </div>
     ))}




</div>
</div>
    </>
  )
}

export default AdminGellary