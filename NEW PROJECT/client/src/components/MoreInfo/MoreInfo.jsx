import React, { useEffect, useState } from 'react'
import './moreinfo.css'

import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function MoreInfo() {
  const { id } = useParams()
  const [room, setroom] = useState([])
  useEffect(() => {
    axios.post(`http://localhost:2000/imageupload/single/${id}`).then((response) => {
      console.log(response.data.data);
      setroom(response.data.data)
    }).catch((error) => {
      console.log(error);
    })
    console.log(room);
  }, [])

  return (
    <> <div >
      <img src="/asset/back.jpg" alt="" id='main' />
      <div class='container' id='moreinfo'>
        <div id='imgsection'>
          <img src={`/upload/${room.image}`} alt="" id='moreimg' />
          <h5 style={{ color: "blue" }}>Your Price Includes:</h5>
          <table id='offer'>
            <tr>
              <td>Free Cancelation Available</td>
            </tr>
            <tr>
              <td>Breakfast At Rs 660</td>
            </tr>

            <tr>
              <th>Complements</th>
            </tr>
            <tr>
              <td>Cofee&Tea</td>
            </tr>
            <tr>
              <td>Free WIFI</td>
            </tr>
            <tr>
              <td>Drinking Water</td>
            </tr>
            <tr>
              <td>Free Fitness center</td>
            </tr>
          </table>
        </div>
        <div id='moreview'>
          <h3 style={{ color: "blue" }}><i>Room Details</i></h3>
          <table>
            <tr>
              <th>Price:</th>
              <td>{room.rate}</td>
            </tr> <br />

            <tr>
              <th>Place:</th>
              <td>{room.location}</td>
            </tr>
            <br />
            <tr>
              <th>Available</th>
              <td>{room.facilities}</td>
            </tr> <br />
            <tr>
              <th>Extra:</th>
              <td>{room.extrainfo}</td>
            </tr> <br />
            <tr>
              <th >Discount:</th>
              <td style={{ color: "red" }}>{room.discount}</td>
            </tr> <br />
            <tr>
              <th>Near By Place:</th>
              <td>{room.nearbyplace}</td>
            </tr> <br />
            <tr>
              <th>Rating:</th>
              <td>{room.roomrating}</td>
            </tr>
            <tr>
              <Link to={`/regroom/${room._id}`}> <button class='btn btn-primary  '>Book Now</button> </Link>
            </tr>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default MoreInfo