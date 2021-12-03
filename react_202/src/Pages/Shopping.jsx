import React, {useState, useContext, browserHistory} from 'react';
import './pageCssFiles/Shopping.css';
import Cards from './../Components/Cards.jpg'
import {Redirect, Link} from 'react-router-dom';
import { ReqContext } from '../Components/ReqContext';
import axios from 'axios';
import backendServer from '../webConfig';

function Shopping () {
let [isBought, setIsBought]= useState(false);
const [customer, customerinfo]=useState({});


const {  
  cuId,setCuId, cuUsername,setCuUsername, cuIsLoggedin,setCuIsLoggedin, 
  cuMile, setCuMile, flightPrice, setFlightPrice, flightList, setFlightList,
  flightId,setFlightId, distance, arrivalAirport,setArrivalAirport, arrivalCity, setArrivalCity,
  arrivalDate, setArrivalDate, arrivalTime, setArrivalTime, destinationAirport, setDestinatonAirport, destinationCity,
   setDestinationCity, destinationTime, setDestinationTime, destinationDate, setDestinationDate, payment, setpayment}= useContext(ReqContext);

function payHandler(){

// Use (state cuId or CuUsername, flightId) and (flightList, setFlightList) to update customer flightlist on db
// Use (state cuId or CuUsername) and (cuMile, setCuMile) to update customer tranvelled miles
// setCuMile(cuMile+distance);
//Save nu cuMile, to the db
console.log("Hello");
console.log(localStorage.getItem("userid"));
console.log(customer.cardname);
console.log(flightId);
console.log(destinationAirport);

const data = {
  name: customer.cardname,
  cardnumber: customer.cardnumber,
  expmonth: customer.expmonth,
  expyear: customer.expyear,
  cvv: customer.cvv
}

const data2={
  customerid: localStorage.getItem("userid"),
  flightNumber: flightId,
  arrivalAirport: arrivalAirport,
  arrivalCity: arrivalCity,
  arrivalDate: arrivalDate,
  arrivalTime: arrivalTime,
  departureAirport: destinationAirport,
  departureCity: destinationCity,
  departureDate: destinationDate,
  departureTime: destinationTime,
  price: flightPrice,
  distance: distance

}
const data3={
  userid: localStorage.getItem("userid")
}

axios.defaults.withCredentials = true;
    axios.post(`${backendServer}/shoppingflights`, data)
        .then(response => {
          
            if (response.status === 200) {
              // alert("Successfull Purchase")
                
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
    axios.post(`${backendServer}/bookedflights`, data2)
        .then(response => {
          
            if (response.status === 200) {
              console.log("yoyoyo");
              // window.location("/CustomerPortal");
              // setpayment(1);
                
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

        axios.post(`${backendServer}/milesupdate`, data3)
        .then(response => {
          
            if (response.status === 200) {
              console.log("yoyoyohh");
              // window.location("/CustomerPortal");
              setCuMile(response.data.result[0].miles)
              setpayment(1);
                
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


function cancelHandler(){

setFlightId(-99);
alert(setFlightId);
}
function handleChange(event){
  let {value, type, name} =event.target;
  customerinfo (prev=> {return {...customer, [name]:value}});
  
  return
  
 
}


let tag =  <div>   


<div className="row">
  <div className="col-75">
    <div className="container">
      <form>
      
        <div className="row">
      
          <div className="col-50">
            <h1>Payment for flight Number {flightId} at cost of {flightPrice}$ </h1>
            <label for="fname">Accepted Cards</label>
            <img id="cardsImage" src={Cards} />
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
              <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input className="Sinput" type="text" id="cname" name="cardname" onChange={handleChange} value={customer.cardname} placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input className="Sinput" type="text" id="ccnum" name="cardnumber" onChange={handleChange} value={customer.cardnumber} placeholder="1111-2222-3333-4444"/>
            
            <div className="row">
              <div className="col-50" >
                <label for="expyear">Exp Year</label>
                <input className="Sinput" type="text" id="expyear" name="expyear" onChange={handleChange} value={customer.expyear} placeholder="2018"/>
              </div>
              <div className="col-50">
              <label for="expmonth">Exp Month</label>
            <input className="Sinput" type="text" id="expmonth" name="expmonth" onChange={handleChange} value={customer.expmonth} placeholder="September"/> 
              </div>

              <div className="col-50">
              <label for="cvv">CVV</label>
                <input className="Sinput" type="text" id="cvv" name="cvv" onChange={handleChange} value={customer.cvv} placeholder="352"/>
              </div>
            </div>
          </div>
          
        </div>
        
       <Link to="/Search"> <button className="Sinput"   className="cancelBtn"> Cancel </button> </Link>
        <Link to ="/CustomerPortal">
          <button className="Sinput" onClick={payHandler}  className="payBtn"> Pay </button>
          </Link>
        
      </form>

    </div>
  </div>
  
  
  
  
 
  </div>
  {/* { payment===0 ? <h1></h1> : <Redirect to="/CustomerPortal" /> } */}
  

  
         </div>

return (tag)
}

export default Shopping;

