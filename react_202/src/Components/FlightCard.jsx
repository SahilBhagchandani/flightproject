import React, {useContext} from 'react';
import pic from './Flight Pic.jpg'
import './FlightCard.css'
import {Link} from 'react-router-dom'
import { ReqContext } from './ReqContext';
import axios from 'axios';
import backendServer from '../webConfig';

function FlightCard(props){
let flightImage=__dirname+"./Flight Pic.jpg";
let f=props.flight;
let upForSale=props.upForSale;
const {  
    cuId,setCuId, cuUsername,setCuUsername, flightPrice, setFlightPrice, 
    flightId,setFlightId, cuDiscount, setCuDiscount, 
    distance, setDistance, cuMile, setCuMile, arrivalAirport,setArrivalAirport, arrivalCity, setArrivalCity,
    arrivalDate, setArrivalDate, arrivalTime, setArrivalTime, destinationAirport, setDestinatonAirport, destinationCity,
     setDestinationCity, destinationTime, setDestinationTime, destinationDate, setDestinationDate}= useContext(ReqContext);

    function applyDiscount(){
        if (cuMile<5000)
        setCuDiscount (0);
        else if (cuMile < 20000)
        setCuDiscount (0.05);
        else if (cuMile<40000)
        setCuDiscount (0.10);
        else if (cuMile<80000)
        setCuDiscount (0.15);
        else if (cuMile>100000)
        setCuDiscount (0.20);  
      }

function addHandler(){
    
    setFlightId(f.flightNumber);
    setFlightPrice(f.price*(1-cuDiscount));
    setDistance(f.distance);
    setArrivalAirport(f.arrivalAirport);
    setArrivalCity(f.arrivalCity);
    setArrivalDate(f.arrivalDate);
    setArrivalTime(f.arrivalTime);
    setDestinatonAirport(f.departureAirport);
    setDestinationCity(f.departureCity);
    setDestinationDate(f.departureDate);
    setDestinationTime(f.departureTime);
}
function deleteHandler(){

  console.log("helLo world");
  const data={
    customerid: localStorage.getItem("userid"),
    flightNumber: f.flightNumber

  }
  console.log(f.flightNumber)
  console.log(data);
  axios.post(`${backendServer}/cancelflight`, data)
  .then(response => {
    
      if (response.status === 200) {
        console.log("yoyoyohh");
        // window.location("/CustomerPortal");
        alert("flight Canceled")
        // window.location("/CustomerFlights")

        
      }
      else if (response.status === 201) {
          // console.log("Email ID already registered");
          // this.setState({
          //     Msg: "Email ID already registered",
          //     MsgFlag: true
          // })
      }
      else {
          console.log("Sign up failed");
          // this.setState({
          //     Msg: "Sign up failed",
          //     MsgFlag: true
          // })
      }
  })

}

let AS=f.capacity-f.passengerCount; //Available Number of Seats
applyDiscount();   

let result=<div className="FL" >
<img className="flightImage" src= {pic}/>
<h3 className="Header"> Flight  {f.flightNumber } </h3>
<hr/>
<p> <span className="FCI"> Arrival: </span>  {f.arrivalDate} , {f.arrivalTime }, {f.arrivalCity}-{f.arrivalAirport}  </p>
<hr/>
<p> <span className="FCI"> Departure: </span> {f.departureDate} , {f.departureTime }, {f.departureCity}-{f.departureAirport} </p>
<hr/>
{upForSale && <div> <p> <span className="FCI">Available Space: </span> {AS} Seats </p> <hr/> </div> }

<p> <span className="FCI">Price: </span>  {f.price*(1-cuDiscount)} $ </p>

{upForSale ? <Link to="/Shopping"> <button className="btnAdd" type="t" onClick={addHandler}> Buy </button> </Link> : <div> <hr/> <b><p style={{color:'black'}}> Thanks For Your Trust </p></b> <button onClick={deleteHandler} id="DeletetBtn" style={{marginTop: "-15px"}}>Cancel Flight</button> </div>} 
</div> 

if (AS<=0) 
return (null);
return(

result



  )


 }

export default FlightCard;