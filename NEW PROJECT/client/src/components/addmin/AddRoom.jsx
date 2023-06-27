import React, { useState } from 'react'
import './Addroom.css'    

import axios from 'axios'

function AddRoom() {


 const [file,setfile] = useState("")

  const [room,setroom] = useState({
    rate :"",
    image : "",
    location:"",
    facilities:"",
    extrainfo:"",
    discount:"",
    nearbyplace:"",
    roomrating:""
  })   
const change = (e)=>{
        
  const {name, value} = e.target
  
    setroom({...room,[name]:value})  
  
  }
const submit = (e)=>{
  e.preventDefault()
  console.log('state----->',room);
                                                    
  if(file){
    const data= new FormData();
    const filename=file.name
    data.append("name",filename)
    data.append("file",file)
    console.log("fileData",data);
    axios.post(`http://localhost:2000/imageupload/upload`,data).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
 
        
    axios.post(`http://localhost:2000/imageupload/check-room`,room).then((response)=>{
     console.log("response-------->",response);
      const data = response.data
      console.log('data------>',data);
    }).catch((error)=>{
      console.log(error);
    })
}

  return (
    <>
       <form id='addroom' >
    <div className='form'>

        <h3 id='h3'  align="center">ADD ROOM</h3>
  <div class="mb-3">
    <label for="exampleInputPassword1" id='h3' class="form-label">Add Photo</label>
    <input type="file" id='inputcolor' 
              onChange={(e)=>{setfile(e.target.files[0]);console.log(e.target.files[0].name);
              setroom({...room,image:e.target.files[0].name})}} 
       name='image'   />
  </div>
  <h5 id='h5'>Price:</h5>   <input type="text" class="form-control" onChange={change} id='inputcolor' name='rate' />
  <h5 id='h5'>Location:</h5>   <input type="text" class="form-control" onChange={change} id='inputcolor' name='location' />
  <h5 id='h5'>Facilities:</h5>   <input type="text" class="form-control" onChange={change} id='inputcolor' name='facilities'/>
  <h5 id='h5'>Extra:</h5>   <input type="text" class="form-control" onChange={change} id='inputcolor' name='extrainfo' />
  <h5 id='h5'>Discount:</h5>   <input type="text" class="form-control" onChange={change} id='inputcolor' name='discount' />
  <h5 id='h5'>Near By Place:</h5>   <input type="text" class="form-control" onChange={change} id='inputcolor' name='nearbyplace' />
  <h5 id='h5'>Rating:</h5>   <input type="text" class="form-control" onChange={change} id='inputcolor' name='roomrating' />
  <button type="submit" class="btn btn-primary" onClick={submit} >Submit</button>
  </div>
</form>
    </>
  )
}

export default AddRoom