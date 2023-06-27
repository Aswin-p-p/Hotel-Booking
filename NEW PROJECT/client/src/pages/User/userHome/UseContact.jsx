import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Contact from '../../../components/Contact/Contact'
function UseContact() {
    const user_id = localStorage.getItem("user_id")
    console.log(user_id);
  return (
  <>
  <Navbar/>
  <Contact/>
  </>
  )
}

export default UseContact