import React, {useState, useContext} from 'react';
import './../Components/FlightInfo'
import Menu from './Menu';
import axios from 'axios';
import cookie, { plugToRequest } from 'react-cookies';
import backendServer from "../webConfig";

function AdminAdd() {

   let [flight, setFlight]=useState({});
  
  function handleClick(event) {
      event.preventDefault();
      // let message="Flight Successfully Added"
      // alert(message)
      // console.log(flight.flightNumber);
      // console.log(flight.capacity);

      const data = {
         flightNumber: flight.flightNumber,
         capacity: flight.capacity,
         price: flight.price,
         distance: flight.distance,
         arrivalAirport: flight.arrivalAirport,
         arrivalCity: flight.arrivalCity,
         arrivalDate: flight.arrivalDate,
         arrivalTime: flight.arrivalTime,
         departureAirport: flight.departureAirport,
         departureCity: flight.departureCity,
         departureDate: flight.departureDate,
         departureTime: flight.departureTime
     }
     console.log(data);
     axios.defaults.withCredentials = true;
     // axios.post('http://localhost:3001/login', data)
     axios.post(`${backendServer}/adminAdd`, data)
         .then(response => {
            console.log(response)
             if (response.status == 200) {
                 //redirect to dashboard
                 console.log("uhuh");
                 // setLoggedin(null);
                 console.log(response.data);
             } else if (response.status === 201) {
                 //Invalid credentials
                 let message = "flight already exists"
                 alert(message);
             } else {
                 //login failed
                 this.setState({
                     authFlag: true,
                     MsgFlag: true,
                     Msg: "Login Failed"
                 })
             }
         }).catch(e => {
             console.log(e);
         })

    }
  
  function handleChange(event){
  let {value, type, name} =event.target;
  setFlight (prev=> {return {...flight, [name]:value}});

}
let menuItems=[{link:"/AdminPortal", name:"Portal"}, {link:"/Home", name:"Sign Out"} ];
   return (
      <div>
      <Menu menuItems={menuItems} />
      <div className ="container">
      <h1>    Please Enter Flight Information </h1>

      <label className="fLabel">Flight Number</label>
      
      <input
         onChange={handleChange}
         type="text"
         name="flightNumber"
         placeholder="flightNumber"
         value={flight.flightNumber}
         />

      <label className="fLabel">Capacity</label>
      
      <input
         onChange={handleChange}
         type="text"
         name="capacity"
         placeholder="Determin Capacity"
         value={flight.capacity}
         />

<label className="fLabel">Price $</label>
      <input
         onChange={handleChange}
         type="text"
         name="price"
         placeholder="Determin Price"
         value={flight.price}
         />  

<label className="fLabel">Distance</label>
      <input
         onChange={handleChange}
         type="text"
         name="distance"
         placeholder="Enter Flight Distance (Mile)"
                  /> 

      <form onSubmit={handleClick}> 
      <div className="Departure">  
         <h2> Departure Information</h2>
         <input
         id="top-input"
         onChange={handleChange}
         type="text"
         name="departureCity"
         placeholder="Enter Departure City"
         value={flight.departureCity}
         />

         <input
         onChange={handleChange}
         type="text"
         name="departureAirport"
         placeholder="Enter Departure Airport"
         value={flight.departureAirport}
         />

         <input
         onChange={handleChange}
         type="time"
         name="departureTime"
         placeholder="Enter Departure Time"
         value={flight.departureTime}
         />

         <input
         onChange={handleChange}
         type="date"
         name="departureDate"
         placeholder="Enter Departure Date"
         value={flight.departureDate}
         />

      </div>

           
      <div className="Arrival">

         <h2> Arrival Information</h2>
         <input
         id="top-input"
         onChange={handleChange}
         type="text"
         name="arrivalCity"
         placeholder="Enter Arrival City"
         value={flight.arrivalCity}
         />

         <input
         onChange={handleChange}
         type="text"
         name="arrivalAirport"
         placeholder="Enter Arrival Airport"
         value={flight.arrivalAirport}
         />

         <input
         onChange={handleChange}
         type="time"
         name="arrivalTime"
         placeholder="Enter Arrival Time"
         value={flight.arrivalTime}
         />

         <input
         onChange={handleChange}
         type="date"
         name="arrivalDate"
         placeholder="Enter Arrival Date"
         value={flight.arrivalDate}
         />

      </div>

      <button id="adminAddBtn" type="submit">Create Flight</button>
      </form>

    </div>
    </div>
   )
}

export default AdminAdd;