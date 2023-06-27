import React, { useEffect, useState } from 'react'
import './gellary.css'
import axios from 'axios'

function Gellary() {
const [gellary,setgellary] = useState([])
useEffect(()=>{
  axios.post(`http://localhost:2000/gellary/viewgellary`).then((response)=>{
    console.log('response----->',response);
    setgellary(response.data.data)
  }).catch((error)=>{
    console.log(error);
  })
},[])
console.log(gellary);

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
               
                   </div>
                 </div>
     ))}




</div>
</div>
  </>
  )
}

export default Gellary