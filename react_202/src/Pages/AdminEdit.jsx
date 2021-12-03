import React, {useState, useContext} from 'react';
import Menu from './Menu';
import './pageCssFiles/AdminEdit.css';
import axios from 'axios';
import backendServer from '../webConfig';
function AdminEdit() {

   const [flight, setFlight]=useState({});
   
   let menuItems=[{link:"/AdminPortal", name:"Portal"}, {link:"/Home", name:"Sign Out"} ];
   
   function Delete(event) {
    event.preventDefault();

    const data = {
      flightNumber: flight.flightNumber
  }
  console.log(data);


    axios.defaults.withCredentials = true;
     // axios.post('http://localhost:3001/login', data)
     axios.post(`${backendServer}/adminDelete`, data)
         .then(response => {
            console.log(response)
             if (response.status == 200) {
                 //redirect to dashboard
                 console.log("uhuh");
                 // setLoggedin(null);
                 console.log(response.data);

                 alert("Flight Successfully Deleted")
             } else if (response.status === 201) {
                 //Invalid credentials
                 let message = "flight does not exist"
                 alert(message);
             } else {
                 //login failed
                 let message = "flight does not exist"
                 alert(message);
             }
         }).catch(e => {
             console.log(e);
         })
   

    
    
  }

    function Edit(event) {
        event.preventDefault();


        const data = {
         flightNumber: flight.number,
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
     axios.post(`${backendServer}/adminEdit`, data)
         .then(response => {
            console.log(response)
             if (response.status == 200) {
                 //redirect to dashboard
                 console.log("uhuh");
                 // setLoggedin(null);
                 console.log(response.data);
                 alert("Flight Successfully Updated")
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

   return (

      <div>
      <Menu menuItems={menuItems}/>
      <div className="container">
      
      <h1> Please Enter Flight Number for Deletion</h1>
      <form onSubmit={Delete}> 
      <label className="fLabel">Flight Number</label>
      <input
         onChange={handleChange}
         type="text"
         name="flightNumber"
         placeholder="Enter Flight Number"
         value={flight.flightNumber}

         
         /> 
        <button id="DeletetBtn" type="submit">Delete Flight</button>
    <hr/>
    </form>

      <h1>    Please Enter Flight Information For Update </h1>

    
      
      

      <form onSubmit={Edit}> 
      <label className="fLabel">Flight Number</label>
      <input
         onChange={handleChange}
         type="text"
         name="number"
         placeholder="Enter Flight Number"
         value={flight.number}
                  /> 
      
      <label className="fLabel">Price</label>
      <input
         onChange={handleChange}
         type="text"
         name="price"
         placeholder="Enter Price"
         value={flight.price}
                  /> 

<label className="fLabel">Capacity</label>
      <input
         onChange={handleChange}
         type="text"
         name="capacity"
         placeholder="Enter Capacity"
         value={flight.capacity}
                  /> 

<label className="fLabel">Distance</label>
      <input
         onChange={handleChange}
         type="text"
         name="distance"
         placeholder="Enter Flight Distance (Mile)"
         value={flight.distance}
                  /> 
         
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

      <button id="UpdatetBtn" type="submit">Update</button>
      </form>

    </div>
   
    </div>
   )
}

export default AdminEdit;