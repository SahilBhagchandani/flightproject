import React, { useState, useContext } from 'react';
import Menu from './Menu.jsx';
import {Link} from 'react-router-dom';
import { ReqContext } from '../Components/ReqContext';

function Home(){
    localStorage.setItem("email","");
    localStorage.setItem("userid","");
    localStorage.setItem("adminid","");
    let items=[{link:"/Login", name:"Login"}, {link:"/AdminLogin", name:"AdminLogin"} ];
    //let items=[{link:"/Login", name:"Login"}, {link:"/CustomerPortal", name:"CustomerPortal"}, {link:"/Signup", name:"SignUp"}, {link:"/AdminLogin", name:"AdminLogin"}, {link:"/AdminAdd", name:"AdADd"}, {link:"/AdminEdit", name:"AdEdit"}, {link:"/Shopping", name:"Shopping"} ];
const {cuId,setCuId, cuUsername,setCuUsername, cuIsLoggedin,setCuIsLoggedin, 
    adminIsLoggedin,setAdminIsLoggedin,flightId,setFlightId}= useContext(ReqContext);
return (
    <div> <Menu menuItems={items}/>
      <h1 className="SLHeader">Welcome to SRNS </h1>
      
<h2 className="HomeHeader"> Please Sign in / Sign Up </h2>


</div>

)

}

export default Home;