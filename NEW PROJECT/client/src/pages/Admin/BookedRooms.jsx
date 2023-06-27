import React, { useEffect, useState } from 'react'
import AdminNav from '../../components/navbar/AdminNav'
import axios from 'axios'

function BookedRooms() {
  const [user,setuser] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:2000/roomorder/view-bookings`).then((response)=>{
      setuser(response.data.data)
      console.log("response------>",response);
    }).catch((error)=>{
      console.log(error);
    })
  },[])

  const sub = (id)=>{
    axios.post(`http://localhost:2000/roomorder/vacate/${id}`).then((respoonse)=>{
      setuser(respoonse.data.data)
      console.log("res--------->",respoonse);
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <>
    <AdminNav/>
    <table class="table bg-info">
  <thead>
    <tr class='bg-light-subtle'>
      <th scope="col">Room Id:</th>
      <th scope="col">Username:</th>
      <th scope="col">Email:</th>
      <th scope="col">check IN:</th>
      <th scope="col">check Out:</th>
      <th scope="col">Payment:</th>
      <th scope="col">Room Vacate:</th>
    </tr>
  </thead>
    {user?.map((data)=>(
            <tbody class="table-group">
            <tr>
              <th >{data._id}</th>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.checkin}</td>
              <td>{data.checkout}</td>
              <td>{data.payment}</td>
              <td><button className='btn btn-primary'onClick={()=>{sub(data._id)}}>Vacate</button></td>
            </tr>        
          </tbody>
    ))}          
</table>
    </>
  )
}

export default BookedRooms