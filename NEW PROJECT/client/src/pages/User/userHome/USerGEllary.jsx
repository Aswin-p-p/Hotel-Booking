import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Gellary from '../../../components/gellary/Gellary'
function USerGEllary() {
    const user_id = localStorage.getItem("user_id")
    console.log(user_id);
  return (
    <>
    <Navbar/>
   <Gellary/>
    </>
  )
}

export default USerGEllary