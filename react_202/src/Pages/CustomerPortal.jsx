import React, {useState, useContext, useEffect} from 'react';
import Menu from './Menu.jsx'
import { ReqContext } from '../Components/ReqContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backendServer from '../webConfig.js';
function CustomerPortal(){

let menuItems=[{link:"/UserInfoUpdate", name:"Update Info"}, {link:"/CustomerFlights", name:"My Flights" }, {link:"/Search", name:"Available Flights"}
, {link:"/Home", name:"Sign Out" }  ];

const [loading3, setLoading3]=useState(true);


const {cuId,setCuId,cuMile, setCuMile, cuUsername,setCuUsername, cuIsLoggedin ,setCuIsLoggedin, 
distance, setDistance, adminIsLoggedin,setAdminIsLoggedin}= useContext(ReqContext);

const data ={
    customerid: localStorage.getItem("userid")
}


useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.post(`${backendServer}/customerportaldata`, data)
        .then(response => {
          
            if (response.status === 200) {
              // alert("Successfull Purchase")
              setCuUsername(response.data.result[0].name)
              setCuMile(response.data.result[0].miles);
              

                
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

}, [])



// Customer should be replaced from database where id===cuId or username===cuUsername




return (
<div >
<Menu menuItems={menuItems}/>
    <div className="container">
        <h1> Welcome {cuUsername }! </h1>
        { cuMile>0? <h2> We're so proud to fly {cuMile} miles with you!</h2>  :null}


        
    </div>

</div>

)


}


export default CustomerPortal;