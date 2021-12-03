import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import FlightCard from '../Components/FlightCard';
import Menu from './../Pages/Menu'
import './pageCssFiles/Login.css'
import backendServer from "../webConfig";
import { ReqContext } from '../Components/ReqContext';


function SearchFlight() {


    const [flightlist, setFlightList]=useState();
    const [loading, setLoading]=useState(true);

    const {  
        cuId,setCuId, cuUsername,setCuUsername, flightPrice, setFlightPrice, 
        flightId,setFlightId, cuDiscount, setCuDiscount, 
        distance, setDistance, cuMile, setCuMile, arrivalAirport,setArrivalAirport, arrivalCity, setArrivalCity,
        arrivalDate, setArrivalDate, arrivalTime, setArrivalTime, destinationAirport, setDestinatonAirport, destinationCity,
         setDestinationCity, destinationTime, setDestinationTime, destinationDate, setDestinationDate}= useContext(ReqContext);

    // let flightlist= [];


    // const data = {
    //     flightNumber: flight.flightNumber,
    //     capacity: flight.capacity,
    //     price: flight.price,
    //     distance: flight.distance,
    //     arrivalAirport: flight.arrivalAirport,
    //     arrivalCity: flight.arrivalCity,
    //     arrivalDate: flight.arrivalDate,
    //     arrivalTime: flight.arrivalTime,
    //     departureAirport: flight.departureAirport,
    //     departureCity: flight.departureCity,
    //     departureDate: flight.departureDate,
    //     departureTime: flight.departureTime
    // // }
    // console.log(data);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get(`${backendServer}/searchFlights`)
        .then(response => {
        //    console.log(response)
            if (response.status == 200) {
                //redirect to dashboard
                console.log("uhuh");
                
                // setLoggedin(null);
                // console.log(response.data);
                setFlightList(response.data.result);
                setLoading(false);

                // let flightlist = response.data.result;
                // console.log(flightlist[0]);

            } else if (response.status === 201) {
                //Invalid credentials
                let message = "flight already exists"
                alert(message);
            } else {
                //login failed
                
            }
        }).catch(e => {
            console.log(e);
        })
        
        
    }, [])
    // axios.post('http://localhost:3001/login', data)
    

        // if(loading){
        //     return <div>Loading</div>
        // }





//Flights Should be replaced from DB
let flight1={ arrivalDate:"2021-12-24", arrivalTime:"12:30pm", arrivalCity:"London", arrivalAirport:"LondonAP", departureDate:"2021-12-24", departureTime:"12:30pm", departureCity:"Tokyo", departureAirport:"TokyoAP", price:300, flightNumber:100, capacity:250, passengerCount:239, distance:5000 };
let flight2={ arrivalDate:"2021-10-24", arrivalTime:"12:30pm", arrivalCity:"London", arrivalAirport:"LondonAP", departureDate:"2021-10-24", departureTime:"12:30pm", departureCity:"Milan", departureAirport:"MilanAP", price:350, flightNumber:234, capacity:280, passengerCount:60, distance:25000};
let flight3={ arrivalDate:"2021-7-22", arrivalTime:"12:30pm", arrivalCity:"London", arrivalAirport:"LondonAP", departureDate:"2021-07-22", departureTime:"12:30pm", departureCity:"Milan", departureAirport:"MilanAP", price:350,  flightNumber:230, capacity:280, passengerCount:70, distance:55000};
let flight4={ arrivalDate:"2021-11-23", arrivalTime:"12:30pm", arrivalCity:"London", arrivalAirport:"LondonAP", departureDate:"2021-11-23", departureTime:"12:30pm", departureCity:"Milan", departureAirport:"MilanAP", price:350, flightNumber:230, capacity:280, passengerCount:70, distance:55000};
let flight5={ arrivalDate:"2022-12-24", arrivalTime:"12:30pm", arrivalCity:"Tokyo", arrivalAirport:"LondonAP", departureDate:"2022-12-24", departureTime:"12:30pm", departureCity:"Berlin", departureAirport:"MilanAP", price:350, flightNumber:230, capacity:280, passengerCount:70, distance:55000};
let flight6={ arrivalDate:"2021-12-24", arrivalTime:"12:30pm", arrivalCity:"London", arrivalAirport:"LondonAP", departureDate:"2021-12-24", departureTime:"12:30pm", departureCity:"Tokyo", departureAirport:"TokyoAP", price:300, flightNumber:100, capacity:250, passengerCount:239, distance:5000 };
//Flights need to be stored inside Flights variable from the database
let menuItems=[{link:"/CustomerPortal", name:"Portal"}, {link:"/Home", name:"Sign Out"} ];

console.log("Miles"+ cuMile )



let allFlights=flightlist;
let [Flights, setFlights]= useState([]);

let [requestedResult, setRequestedResult]=useState({departureCity:"", arrivalCity: "", departureDate: "", flightNumber:""});

function handleChange(event){
    let {value, name} =event.target;
    setRequestedResult (prev=> {return {...requestedResult, [name]:value}});
    

};

function showAll(){
  
setResult(


    (allFlights.map( (flight)=> {return (<div className="searchResults"> 


    <FlightCard  flight={flight} upForSale={true} /> </div>       
    
    
    
        
        
        )          }) )





);

}


function showSearchResult(){
    
    
     


    let searchResults=allFlights;

    for (let key in requestedResult)
    searchResults=searchResults.filter(
        function (flight){
            if (flight[key]==requestedResult[key] || requestedResult[key]=="")
            return true;
            else    
            return false
        }
    )

    if (searchResults.length==0)
    setResult (
        <h2> No Result Was Found</h2>
    )

    else 

    setResult(
    
    
        (searchResults.map( (flight)=> {return (<div className="searchResults"> 
    
    
        <FlightCard  flight={flight} upForSale={true} /> </div>       
        
        
        
            
            
            )          }) )
    
    
    
    
    
    )
    
    }



let [result, setResult]= useState (Flights.map( (flight)=> {return (<div className="searchResults"> 


<FlightCard  flight={flight} upForSale={true} /> </div>       



    
    
    )          }) );

return  (<div >
 <Menu menuItems={menuItems}/>

<div className="container">
 <label className="fLabel">Origin City</label>
 <input
         id="top-input"
         onChange={handleChange}
         type="text"
         name="departureCity"
         placeholder="Enter Departure City"
         value={requestedResult.departureCity}
         />
<label className="fLabel">Destination City</label>
<input
         id="top-input"
         onChange={handleChange}
         type="text"
         name="arrivalCity"
         placeholder="Enter arrival City"
         value={requestedResult.arrivalCity}
         />

<label className="fLabel">Flight Number</label>
 <input
         id="top-input"
         onChange={handleChange}
         type="text"
         name="flightNumber"
         placeholder="Enter Flight Number"
         value={requestedResult.flightNumber}
         />

<label className="fLabel">Departure Date</label>
<input
         id="top-input"
         onChange={handleChange}
         type="date"
         name="departureDate"
         placeholder="Enter Departure Date"
         
         />

<button onClick={showSearchResult} className="btnAdd" id="search2"> Search Result</button> 
<button onClick={showAll} className="btnAdd" id="search1"> Show All</button>
</div>
 
 {result}
 </div>);

}

export default SearchFlight;