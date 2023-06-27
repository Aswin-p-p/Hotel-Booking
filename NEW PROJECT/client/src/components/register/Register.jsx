import React, { useState } from 'react'
import './register.css'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
 const [reg,setReg] = useState({
  username : '',
  email : '',
  number : '',
  password : ''
 })
 const navigate = useNavigate()
 const [formError,setFormError] = useState({})
 const [isSubmit,setIsSubmit] = useState(true)

 const change = (e)=>{
    const {name,value} = e.target
    setReg({...reg,[name]:value})
 }
 const validate = (values)=>{
   var error = {}
 // const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
var phoneno = /^[6-9]\d{9}$/;
var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
// let strongPassword = new RegExp('(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{8,})')
   console.log('error',error);
 if(!values.username){
  error.username = 'enter the username'
 }
   if(!values.email){
     error.email = 'enter the email'
   }else if(!mailformat.test(values.email)){
    error.email ="enter the valide email"
   }
   if(!values.number){
     error.number = 'enter the number'
   }else if(!phoneno.test(values.number)){
           error.number = 'enter the valide number'
   }
   if(!values.password){
     error.password = 'enter the password '
   }
return error





}
 const submit = (e) =>{
    e.preventDefault()
    setFormError(validate(reg))
   setIsSubmit(true)
    console.log("state--------",reg);


    if(Object.keys(formError).length===0 && isSubmit){
    axios.post(`http://localhost:2000/register/check-register`,reg).then((response)=>{
   console.log('response--->',response);
   if(response.data.success===true){
    navigate('/')
   }
   else if(response.data.error===true){
    toast.error('Username Already Existed', {
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
   
}).catch((error)=>{
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

 }
 

  return (
    <>
     <ToastContainer/>
    
    <div class='register'>
    <img src="/asset/register.jpg" class="img-fluid" alt="..."/>
   
    <form class='contenttt'>
        <h3>Register Here</h3>
        <label >{formError?.username? <span style={{color:"red"}}>username*</span>:"Username"}</label>
        <input type="text" name='username' placeholder='username' onClick={()=>{setFormError({...formError,username:""})}} onChange={change} />
        <label >{formError?.email? <span style={{color:"red"}}>Email*</span>:"Email"}</label>
        <input type="text" name='email' placeholder='Email' onClick={()=>{setFormError({...formError,email:""})}} onChange={change} />
        <label>{formError?.number? <span style={{color:"red"}}>Number*</span>:"Number"}</label>
        <input type="text" name='number' placeholder='Number' onClick={()=>{setFormError({...formError,number:""})}} onChange={change} />
        <label > {formError?.password? <span style={{color:"red"}}>Password*</span>:"Password"}</label>
        <input type="text" name='password' placeholder='password' onClick={()=>{setFormError({...formError,password:""})}} onChange={change} />
        <button onClick={submit}>Submit</button>  
    </form>
    </div>
      
    </>
  )
}

export default Register
