import React,{createContext, useState} from 'react';
export const ReqContext=createContext();

function ReqContextProvider(props){

const [cuId,setCuId]=useState(-100); //Customer Id
const [cuUsername,setCuUsername]=useState(""); // Customer Username
const [cuIsLoggedin,setCuIsLoggedin]=useState("0"); //Customer Login Status
const [adminIsLoggedin,setAdminIsLoggedin]=useState(0); // Admid Login Status
const [payment, setpayment]=useState(0);
const [flightId,setFlightId]=useState(-99); //Flight Id (number)
const [adminUsername,setAdminUsername]=useState(""); //Admin Username
const [distance, setDistance]=useState(0);
const [cuMile, setCuMile]=useState(0); //Miles travelled by customer
const [cuDiscount, setCuDiscount]=useState(0); // Discount for customer based on cuMile on flightsearch and shopping
const [flightPrice, setFlightPrice]=useState(-99); //Raw Price of flight on flightsearch and shopping
const [arrivalAirport, setArrivalAirport] =useState("")
const [arrivalCity, setArrivalCity] = useState("")
const [arrivalTime, setArrivalTime] = useState("")
const [arrivalDate, setArrivalDate] = useState("")
const [destinationAirport, setDestinatonAirport] = useState("")
const [destinationCity, setDestinationCity]= useState("")
const [destinationTime, setDestinationTime]= useState("")
const [destinationDate, setDestinationDate] = useState("")
const RValues={  
    cuId,setCuId, cuUsername,setCuUsername, cuIsLoggedin,setCuIsLoggedin, flightPrice, setFlightPrice,
    adminIsLoggedin,setAdminIsLoggedin,flightId,setFlightId, adminUsername,setAdminUsername,
    distance, cuDiscount, setCuDiscount, setDistance, cuMile, setCuMile, arrivalAirport,setArrivalAirport, arrivalCity, setArrivalCity,
    arrivalDate, setArrivalDate, arrivalTime, setArrivalTime, destinationAirport, setDestinatonAirport, destinationCity,
     setDestinationCity, destinationTime, setDestinationTime, destinationDate, setDestinationDate, payment, setpayment};


return(

<ReqContext.Provider value={RValues}>
{props.children}
</ReqContext.Provider>

)

}


export default ReqContextProvider;