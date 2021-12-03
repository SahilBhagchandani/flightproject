import React, {useState, useContext, useEffect} from 'react';
import './pageCssFiles/Login.css';
import Menu from './Menu';
import FlightCard from '../Components/FlightCard';
import { ReqContext } from '../Components/ReqContext';
import {Link, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import cookie, { plugToRequest } from 'react-cookies';
import backendServer from "../webConfig";

function Login () {

    const [userInfo, setUserInfo]=useState({});
    const [LoggedIn, setLoggedin]=useState(1);
    const [isLog, setLog]=useState(0)
    const {cuId,setCuId, cuUsername,setCuUsername, cuIsLoggedin ,setCuIsLoggedin, 
      adminIsLoggedin,setAdminIsLoggedin, cuDiscount, setCuDiscount, cuMile, setCuMile}= useContext(ReqContext);
    
    

    function handleClick(event) {
        event.preventDefault();
        console.log("UserName=", userInfo.userName);
        console.log("Password=", userInfo.password);
        
        
        const data = {
            email: userInfo.userName,
            password: userInfo.password
        }
        axios.defaults.withCredentials = true;

        // axios.post('http://localhost:3001/login', data)
        axios.post(`${backendServer}/login`, data)
            .then(response => {
                if (response.status === 200) {
                    //redirect to dashboard
                    console.log("uhuh");
                    
                    console.log(response.data);
                    localStorage.setItem("userid", response.data.result[0].iduser);
                    localStorage.setItem("email", response.data.result[0].email);
                    localStorage.setItem("name", response.data.result[0].name);
                    console.log("miles "+ response.data.result[0].miles);
                    setCuUsername(response.data.result[0].name)
                    setCuMile(response.data.result[0].miles);
                    setCuIsLoggedin(1);
                    
                   
                    // cookie.save('userID', response.data.userID, { path: '/' })
                    // cookie.save('userName', response.data.userName, { path: '/' })
                    // this.props.history.push("/dashboard")
                } else if (response.status === 201) {
                    //Invalid credentials
                    alert("incorrect username or password");
                } else {
                    //login failed
                    alert("incorrect username or password");
                }
            }).catch(e => {
                console.log(e);
            })


        //If userInfo.username and password are valid according to Db Do the Following
        // setCuIsLoggedin(1);
        // setCuId( m)  m=customerId from Db
        //setcuUsername (n) n=customerUsername from db
        //use setCuMile to read cuMile state from db (mile travelled by customer) 
        
        

        setAdminIsLoggedin(0);
        setCuMile(0);
        
      }
    
    function handleChange(event){
    let {value, type, name} =event.target;
    setUserInfo (prev=> {return {...userInfo, [name]:value}});
    
    return 
    
   
   
  }

let menuItems=[{link:"/Home", name:"Home"}]


let Result=  
<div>
<Menu menuItems={menuItems}/>


<div className="container"> 
      <h2 className="SLHeader">Please sign into your account </h2>
      
      <div className="form-area">
         
      <form onSubmit={handleClick}>

      <label className="fLabel">Username</label>
        <input
          id="top-input"
          onChange={handleChange}
          type="text"
          name="userName"
          placeholder="Enter Your Username"
          value={userInfo.userName}
        />



<label className="fLabel">Password</label>
<input
          onChange={handleChange}
          id="bottom-input"
          type="password"
          name="password"
          placeholder="Enter Password"
          value={userInfo.password}
        />
      

    
      <button className="btnLogin" type="submit"  onClick={handleClick}>Login</button>
    

 

      </form>
</div>

  
  
   <div className="SignUp">

      <h4>Or </h4>
       <Link className="link" to="/Signup">
       <button className="btnSignup" type="submit"> Create Account </button> 
       </Link>

   </div>   
      
{/* 
   { LoggedIn ? null : <Redirect to={"/CustomerPortal"} /> } */}



</div>
{ cuIsLoggedin===0 ? <h1></h1> : <Redirect to="/CustomerPortal" /> }
</div>


return (Result)

 
}







export default Login;