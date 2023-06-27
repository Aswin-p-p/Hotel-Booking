import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Luxury from '../../../components/Luxury/Luxury'
function UseRoom() {
    const user_id = localStorage.getItem("user_id")
    console.log(user_id);
  return (
  <>
  <Navbar/>
  <Luxury/>
  </>
  )
}

export default UseRoom