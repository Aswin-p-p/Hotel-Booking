import React, { useState } from 'react'
import AdminNav from '../navbar/AdminNav'
import axios from 'axios'

function AddGellary() {
 const [file,setfile]= useState("")
 const [gellary,setgellary] = useState({
    image : ''
 })

 const submit = (e)=>{
    e.preventDefault()


    if(file){
        const data= new FormData();
        const filename=file.name
        data.append("name",filename)
        data.append("file",file)
        console.log("fileData",data);
        axios.post(`http://localhost:2000/gellary/upload`,data).then((response)=>{
          console.log(response);
        }).catch((error)=>{
          console.log(error);
        })
      }

    axios.post(`http://localhost:2000/gellary/check-register`,gellary).then((response)=>{
        console.log("response-------->",response);
         const data = response.data
         console.log('data------>',data);
       }).catch((error)=>{
         console.log(error);
       })

    
 }

  return (
   <>
   <AdminNav/>
<form style={{height:'300px'}}>

<h3 id='h3'  align="center">ADD Gellary</h3>
<div class="mb-3">
<label for="exampleInputPassword1" id='h3' class="form-label">Add Photo</label>
<input type="file" id='inputcolor' 
      onChange={(e)=>{setfile(e.target.files[0]);console.log(e.target.files[0].name);
      setgellary({...gellary,image:e.target.files[0].name})}} 
name='image'   />
<button class='btn btn-primary' onClick={submit}>Appload</button>

</div>

   </form>
   </>
  )
}

export default AddGellary