import React, {useState, useContext} from 'react';
import Menu from './Menu';
import {Link, Redirect} from 'react-router-dom';

import backendServer from "../webConfig";
import axios from 'axios';


import { ReqContext } from './../Components/ReqContext';
function AdminLogin () {
    
    const [userInfo, setUserInfo]=useState({});
    const [adminLoggedIn, setAdminLoggedin]=useState(1);
    const {  
      cuId,setCuId, cuUsername,setCuUsername, cuIsLoggedin,setCuIsLoggedin, 
      adminIsLoggedin,setAdminIsLoggedin,flightId,setFlightId}= useContext(ReqContext);


    function handleClick(event) {
        event.preventDefault();
        console.log("UserName=", userInfo.userName);
        console.log("Password=", userInfo.password);

        const data = {
          email: userInfo.userName,
          password: userInfo.password
      }
        

        axios.post(`${backendServer}/adminlogin`, data)
            .then(response => {
                if (response.status === 200) {
                    //redirect to dashboard
                    console.log("uhuh");
                    console.log(response.data);
                    // setAdminLoggedin(null);
                    // <Redirect to="/AdminPortal" /> 
                    // window.location = '/AdminPortal';
                            setAdminIsLoggedin(1);

                    localStorage.setItem("adminid", response.data.result[0].idadmin)
                   
                    // cookie.save('userID', response.data.userID, { path: '/' })
                    // cookie.save('userName', response.data.userName, { path: '/' })
                    // this.props.history.push("/dashboard")
                } else if (response.status === 201) {
                    //Invalid credentials
                    alert("Invalid username of password");
                    
                } else {
                    //login failed
                    alert("Invalid username of password");
                    
                }
            }).catch(e => {
                console.log(e);
            })
          }

// =======
//         setAdminIsLoggedin(1);
//         setCuIsLoggedin(0);
//         setCuUsername("");
//         setCuId(-99);
// >>>>>>> 7e4d25627175280b375c441043440c3f620470b4
//       }
    
    function handleChange(event){
    let {value, type, name} =event.target;
    setUserInfo (prev=> {return {...userInfo, [name]:value}});
  
  }

let Result=  <div className="container"> 
      <h1 className="SLHeader">Please sign into your account </h1>
      
      <div className="form-area">
      <form onSubmit={handleClick}>
        <input
          id="top-input"
          onChange={handleChange}
          type="text"
          name="userName"
          placeholder="Enter Your Username"
          value={userInfo.userName}
        />




<input
          onChange={handleChange}
          id="bottom-input"
          type="password"
          name="password"
          placeholder="Enter Password"
          value={userInfo.password}
        />
      

    
        <button className="btnLogin" type="submit" onClick={handleClick}>Login</button>
      


      </form>

      { adminIsLoggedin===0 ? <h1></h1> : <Redirect to="/AdminPortal" /> }
</div>

  
       
</div>

return (Result)
    
  }

 








export default AdminLogin;