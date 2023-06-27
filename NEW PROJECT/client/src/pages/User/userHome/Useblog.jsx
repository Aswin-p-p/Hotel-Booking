import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Blogs from '../../../components/blogs/Blogs'
function Useblog() {
    const user_id = localStorage.getItem("user_id")
    console.log(user_id);
  return (
   <>
   <Navbar/>
<Blogs/>
   </>
  )
}

export default Useblog