import React, {useState} from 'react';
import '../Components/FlightInfo'
import FlightInfo from '../Components/FlightInfo';

function AdminAdd() {

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

   return (
      <div className ="container">
      <h1>    Please Enter Flight Information </h1>
      <form>
      <FlightInfo/>

      <button id="adminAddBtn" type="submit">Create Flight</button>
      </form>

    </div>
   )
}

export default AdminAdd;