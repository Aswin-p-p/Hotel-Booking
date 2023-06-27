import React, { useEffect, useState } from 'react'
import './update.css'

import { useParams } from 'react-router-dom'
import axios from 'axios'
function Update() {
 const {id} = useParams()
 const [room,setroom] = useState([])
 useEffect(()=>{
  axios.post(`http://localhost:2000/imageupload/single/${id}`).then((response)=>{
    console.log(response.data.data);
    setroom(response.data.data)
  }).catch((error)=>{
    console.log(error);
  })
console.log(room);
 },[])

 const change = (e)=>{
  const {name, value} = e.target
      
  setroom({...room,[name]:value})

}

const sub = (e)=>{
  e.preventDefault()
axios.post(`http://localhost:2000/imageupload/update/${id}`,room).then((response)=>{
 console.log("response--------",response);
 window.location.reload()
})

}







  return (
    <>
    
    <div className='update'>
    <img src="/asset/back.jpg" class="img-fluid" alt="..."/> 
  <form className='updateform' >
    <h2 id='urate'>Update Room Rate :</h2>
    <h4 id='rate'>Price:</h4>
      <input type="text" class="form-control" onChange={change} value={room.rate||""} name='rate' />
      <h4 id='rate'>Loaction:</h4>
      <input type="text" class="form-control" onChange={change} value={room.location||""} name='location' />
      <h4 id='rate'>Facilities:</h4>
      <input type="text" class="form-control" onChange={change} value={room.facilities||""} name='facilities' />
      <h4 id='rate'>Extra:</h4>
      <input type="text" class="form-control" onChange={change} value={room.extrafnfo||""} name='extrafnfo' />
      <h4 id='rate'>Discount:</h4>
      <input type="text" class="form-control" onChange={change} value={room.discount||""} name='discount' />
      <h4 id='rate'>Near Place:</h4>
      <input type="text" class="form-control" onChange={change} value={room.nearbyplace||""} name='nearbyplace' />
      <h4 id='rate'>Rating:</h4>
      <input type="text" class="form-control" onChange={change} value={room.roomrating||""} name='roomrating' />
      <button type="submit" class="btn btn-primary" onClick={sub}>Submit</button>
   </form>
   </div>
    </>
  )
}

export default Update