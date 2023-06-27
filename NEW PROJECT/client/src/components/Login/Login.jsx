import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate, } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [log, setlog] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const [formErrors, setFormErrors] = useState({}); //diffrence {} and []

  const [isSubmit, setIsSubmit] = useState(false)

  const change = (e) => {
    const { name, value } = e.target
    setlog({ ...log, [name]: value })
  }
  const validate = (values) => {
    var error = {}
    console.log("error", error);
    if (!values.email) {
      error.email = 'enter the email'
    }
    if (!values.password) {
      error.password = 'enter the password'
    }
    return error;

  }


  const sub = (e) => {
    e.preventDefault()
    setFormErrors(validate(log))
    setIsSubmit(true)
    console.log("state--------", log);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post(`http://localhost:2000/register/login`, log).then((response) => {
        console.log('response------->', response);
        if (response.data.success === true) {
          if (response.data.data.status === "0") {
            toast.error('Waiting for admins approval', {
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
          else if (response.data.data.role === "0") {
            localStorage.setItem('token', response.data.token)
            navigate('/admhome')
          } else if (response.data.data.role === "1") {
            localStorage.setItem('token', response.data.token)
            navigate('/userhome')
          }
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
  }





  return (
    <>
      <ToastContainer />
      <form>
        <h3>Login Here</h3>

        <label for="username">{formErrors.email ? <span style={{ color: "red" }}>Email *</span> : "Email"}</label>
        <input type="text" name='email' placeholder="Email" id="username"
          style={{ borderColor: formErrors.email ? "red" : "" }}
          onChange={change}
          onClick={() => { setFormErrors({ ...formErrors, email: "" }) }}
        />

        <label for="password">{formErrors.password ? <span style={{ color: "red" }}>Password *</span> : "Password"}</label>
        {/* <span style={{ fontSize:"10px",  color: formErrors.password ? "red" : ""}}>{formErrors.password}</span> */}
        <input type="password" name='password' placeholder="Password" id="password"
          style={{ borderColor: formErrors.password ? "red" : "" }}
          onChange={change}
          onClick={() => { setFormErrors({ ...formErrors, password: "" }) }}
        />

        <button onClick={sub}>Log In</button>
        <Link to={'/register'}> <button className='reg'  >Create an Account</button></Link>
      </form>
    </>
  )
}

export default Login