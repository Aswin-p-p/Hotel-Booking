import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './User.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function ViewUser() {
const [user,setUser] = useState([])
const {id} = useParams()
useEffect(()=>{
    axios.post(`http://localhost:2000/imageupload/userview`).then((response)=>{
        console.log("response---------->",response);
        setUser(response.data.data)
    }).catch((error)=>{
        console.log(error);
    })
},[])

console.log(user);

const submit = (id)=>{

     axios.post(`http://localhost:2000/register/update/${id}`,user).then((response)=>{
         console.log("response--------->",response);
         if(response.data.success===true){
          toast.error('Admin approved', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
         }
     }).catch((error) => {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
    
}

const deleteuser = (id)=>{
  axios.post(`http://localhost:2000/register/delete/${id}`).then((response)=>{
   window.location.reload()
  }).catch((error)=>{
    console.log(error);
  })
}
  return (
    <>
    <ToastContainer/>
<table class="table bg-info">
  <thead>
    <tr class='bg-light-subtle'>
      <th scope="col">User Id:</th>
      <th scope="col">UserName:</th>
      <th scope="col">Email:</th>
      <th scope="col">Number:</th>
      <th scope="col">Action:</th>
    </tr>
  </thead>
     {user.map((data)=>(
           <tbody class="table-group">
           <tr>
             <th >{data._id}</th>
             <td>{data.username}</td>
             <td>{data.email}</td>
             <td>{data.number}</td>
             <td>
             <button class='approve bg-success' onClick={()=>{submit(data._id)}}><p>Accept</p></button>
             <button type="button" onClick={()=>{deleteuser(data._id)}} class="approve bg-danger"><p>Delete</p></button>
              </td>
           </tr>

         </tbody>
     ))}
</table>
    </>
  )
}

export default ViewUser