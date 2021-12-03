import React, {useState, useContext, useEffect} from 'react';
import { ReqContext } from '../Components/ReqContext';
import Menu from './Menu';
import FlightCard from '../Components/FlightCard';
import axios from 'axios';
import backendServer from '../webConfig';
function CustomerFlights () {

    const [customerflightlist, setCustomerFlightList]=useState();
    const [loading2, setLoading2]=useState(true);

    axios.defaults.withCredentials = true;

    const data ={
        customerid: localStorage.getItem("userid")
    }
    console.log(localStorage.getItem("userid"));
    useEffect(() => {
        axios.post(`${backendServer}/customerFlights`, data)
        .then(response => {
        //    console.log(response)
            if (response.status == 200) {
                //redirect to dashboard
                console.log("uhuh");
                
                // setLoggedin(null);
                console.log(response.data);
                setCustomerFlightList(response.data.result);
                setLoading2(false);

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

            if(loading2){
            return <div>Loading</div>
        }

 
    // const { flightList, setFlightList, cuIsloggedin, setCuIsLoggedin}= useContext(ReqContext);
    // let flight1={ arrivalDate:"12/24/2021", arrivalTime:"12:30pm", arrivalCity:"London", arrivalAirport:"LondonAP", departureDate:"12/24/2021", departureTime:"12:30pm", departureCity:"Tokyo", departureAirport:"TokyoAP", price:300, flightNumber:100, capacity:250, cuSeat:250, distance:5000 };
    // let flight2={ arrivalDate:"12/22/2021", arrivalTime:"12:30pm", arrivalCity:"London", arrivalAirport:"LondonAP", departureDate:"12/24/2021", departureTime:"12:30pm", departureCity:"Milan", departureAirport:"MilanAP", price:350, flightNumber:234, capacity:280, cuSeat:60, distance:25000};
    // let flight3={ arrivalDate:"12/15/2021", arrivalTime:"12:30pm", arrivalCity:"London", arrivalAirport:"LondonAP", departureDate:"12/24/2021", departureTime:"12:30pm", departureCity:"Milan", departureAirport:"MilanAP", price:350, flightNumber:234, capacity:280, cuSeat:60, distance:25000};
    // let flight4={ arrivalDate:"12/16/2021", arrivalTime:"12:30pm", arrivalCity:"London", arrivalAirport:"LondonAP", departureDate:"12/24/2021", departureTime:"12:30pm", departureCity:"Milan", departureAirport:"MilanAP", price:350, flightNumber:85, capacity:280, cuSeat:60, distance:25000};
    // let flight5={ arrivalDate:"11/23/2021", arrivalTime:"12:30pm", arrivalCity:"London", arrivalAirport:"LondonAP", departureDate:"12/24/2021", departureTime:"12:30pm", departureCity:"Milan", departureAirport:"MilanAP", price:350, flightNumber:338, capacity:280, cuSeat:60, distance:25000};
    // const A=[flight5,flight3,flight2,flight1,flight4]
    
    // let [CuF, setCuF]=useState([flight1, flight5, flight4, flight3, flight2]);
    let menuItems=[{link:"/CustomerPortal", name:"Portal"}, {link:"/Home", name:"Sign Out"} ];
    let result;

    if(customerflightlist.length > 0){
    
    result= customerflightlist.map( (flight)=> {return (<div className="searchResults"> 
    <FlightCard  flight={flight} />
     </div>       
   
    
    )          });
    }
    else{
        result=<h1>No Flights Booked</h1>

    }
    
    return (

    <div>
    <Menu menuItems={menuItems}/>
        <div className="container">
        {result}



        </div>


    </div>

)


}

export default CustomerFlights;