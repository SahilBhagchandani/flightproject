import React, {useState} from 'react';
function FlightInfo(){

    let [flight, setFlight]=useState({});
  
    function handleClick(event) {
        event.preventDefault();
        console.log("UserName=", flight.userName);
        console.log("Password=", flight.password);
      }
    
    function handleChange(event){
    let {value, type, name} =event.target;
    setFlight (prev=> {return {...flight, [name]:value}});
  
  }
  

let result= <div>


<h2>Flight Number</h2>
      <input
         onChange={handleChange}
         type="text"
         name="Flight Number"
         placeholder="Flight Number"
         value={flight.Number}
         />
<h2>Capacity</h2>
      <input
         onChange={handleChange}
         type="text"
         name="capacity"
         placeholder="Determin Capacity"
         value={flight.capacity}
         />
<h2>Price $ </h2>
      <input
         onChange={handleChange}
         type="text"
         name="price"
         placeholder="Determin Price"
         value={flight.price}
         />  
      


      <div className="Departure">  
         <h2> Departure Information</h2>
         <input
         id="top-input"
         onChange={handleChange}
         type="text"
         name="departureCity"
         placeholder="Enter Arrival City"
         value={flight.arrivalCity}
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
         value={flight.departuredate}
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
         value={flight.arrivaldate}
         />

      </div>



</div>
return result;
}
export default FlightInfo;