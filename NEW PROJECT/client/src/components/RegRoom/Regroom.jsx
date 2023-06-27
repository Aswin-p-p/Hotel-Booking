import React, { useEffect, useState } from 'react'
import './regroom.css'
import Navbar from '../navbar/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Regroom() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const { id } = useParams()


  const [book, setbook] = useState({
    username: "",
    number: "",
    checkin: "",
    checkout: "",
    nopeoples: "",
    payment: ""
  })
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(true)
  const change = (e) => {
    const { name, value } = e.target
    setbook({ ...book, [name]: value })
    console.log("state---->", book);

  }
  const validate = (values) => {
    var error = {}
    var phoneno = /^[6-9]\d{9}$/;
    console.log('error', error);
    if (!values.username) {
      error.username = 'enter the username'
    }
    if (!values.number) {
      error.number = 'enter the number'
    } else if (!phoneno.test(values.number)) {
      error.number = "enter the valide number"
    }
    if (!values.checkin) {
      error.checkin = 'enter the check in'
    }
    if (!values.checkout) {
      error.checkout = 'enter the checkout'
    }
    if (!values.checkout) {
      error.nopeoples = 'enter the No of peoples'
    }

    return error





  }
  const calculationDuration = () => {
    const startDate = new Date(book.checkin)
    const enddate = new Date(book.checkout)
    const durationInMilliseconds = enddate - startDate;
    const durationinDays = Math.ceil(durationInMilliseconds / (1000 * 60 * 60 * 24))
    return durationinDays
  }

 let price = 0
  const calculationprice = () => {

    const basepernyt = 1000;
    const additionalGuestcharge = 600;
    const stayDuration = calculationDuration()
    const totalPrice = basepernyt * stayDuration + additionalGuestcharge * book.nopeoples
    // setbook(...totalPrice,payment : totalPrice)
    return totalPrice

  }
 
  // useEffect(() => {
  //   setbook({ ...book, payment: price })
  // }, [price])


  const sub = (e) => {
    e.preventDefault()
    setFormError(validate(book))

    setIsSubmit(true)
    console.log(formError);

    console.log("state------->", book);
    if (Object.keys(formError).length === 0 && isSubmit) {

      axios.post(`http://localhost:2000/roomorder/roombook/${id}`, book, {
        headers: {
          "Authorization": `Barer ${token}`
        }

      }).then((response) => {
        console.log("response----------->", response);
        if (response.data.success === true) {
          toast.error('successfuy booked', {
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
        // console.log(error);
        // toast.error("Please Log Again", {
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
        console.log(error);
      })
    }

  }




  return (
    <>
      <ToastContainer />
      <Navbar />
      <div class='register'>
        <img src="/asset/back2.jpg" class="img-fluid" alt="..." />
        <form class='contenttt2'>
          <h3>Book Now</h3>
          <label for="username">{formError?.username ? <span style={{ color: "red" }}>username*</span> : "Username"}</label>

          <input type="text"
            name='username'
            placeholder="username"
            onClick={() => { setFormError({ ...formError, username: "" }) }}
            onChange={change}
            id="username" />

          <span style={{ fontSize: "13px", color: formError.number ? "red" : " " }}>{formError.number}</span>

          <label for="username">{formError?.number ? <span style={{ color: "red" }}>Number*</span> : "Number"}</label>
          <input type="text"
            name='number'
            placeholder="number"
            id="username"
            onClick={() => { setFormError({ ...formError, number: "" }) }}
            onChange={change} />

          <span style={{ fontSize: "13px", color: formError.checkin ? "red" : "" }}>{formError.checkin}</span>

          <label for="username">{formError?.checkin ? <span style={{ color: "red" }}>Check In*</span> : "Check In"}</label>

          <input type="date"
            name='checkin'
            placeholder="checkin"
            id="username"

            onClick={() => { setFormError({ ...formError, checkin: "" }) }}
            onChange={change} />

          <span style={{ fontSize: "13px", color: formError.checkout ? "red" : "" }}>{formError.checkout}</span>

          <label for="username">{formError?.checkout ? <span style={{ color: "red" }}>Check out*</span> : "Check Out"}</label>

          <input type="date"
            name='checkout'
            placeholder="checkout"
            id="username"
            onClick={() => { setFormError({ ...formError, checkout: "" }) }}
            onChange={change} />

          <span style={{ fontSize: "13px", color: formError.nopeoples ? "red" : "" }}>{formError.nopeoples}</span>

          <label for="username">{formError?.nopeoples ? <span style={{ color: "red" }}>No of peoples*</span> : "No of Peoples "}</label>
          <input type="text"
            name='nopeoples'
            placeholder="nopeoples"
            id="username"

            onClick={() => { setFormError({ ...formError, nopeoples: "" }) }}
            onChange={change} />

          <span style={{ fontSize: "13px", color: formError.payment ? "red" : "" }}>{formError.payment}</span>

          <label for="username">{formError?.payment ? <span style={{ color: "red" }}>PatMent*</span> : "Pay Ment"}</label>

          <input type="text"
            name='payment'
            placeholder="payment"
            id="username"
            value={book.payment}

            onChange={change}
          />

          <button onClick={sub}>Submit</button>
        </form>
      </div>



    </>
  )
}

export default Regroom