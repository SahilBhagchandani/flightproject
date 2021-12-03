import React, {useState, useContext} from 'react';
import Menu from './Menu';
import { ReqContext } from '../Components/ReqContext';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import cookie, { plugToRequest } from 'react-cookies';
import backendServer from "../webConfig"
function SignUp () {
  const {cuId,setCuId, cuUsername,setCuUsername, cuIsLoggedin,setCuIsLoggedin, 
    adminIsLoggedin,setAdminIsLoggedin}=useContext(ReqContext);
  
  const [userInfo, setUserInfo]=useState({});
  const [loggedIn, setLoggedin]=useState(1);
  
  function handleClick(event) {
      event.preventDefault();
      console.log("UserName=", userInfo.userName);
      console.log("Password=", userInfo.password);
      

      const data = {
        userName: userInfo.userName,
        userPassword: userInfo.password,
        name : userInfo.name,
        email: userInfo.email,
        phoneNumber: userInfo.phone
    }
    axios.defaults.withCredentials = true;
    axios.post(`${backendServer}/signup`, data)
        .then(response => {
          
            if (response.status === 200) {
                
                
                // this.setState({
                //     MsgFlag: false,
                //     Msg: "Sign up success",
                //     userID: response.data.userID
                // })
                // this.props.history.push("/login")
                const data = {
                    userEmail: userInfo.userName,
                    userPassword: userInfo.password
                }
                axios.defaults.withCredentials = true;
                alert ("Signup was successful")
                setLoggedin(null);
                // axios.post('http://localhost:3001/login', data)
                // axios.post(config.API_URL + '/login', data)
                //     .then(response => {
                //         if (response.status === 200) {
                //             //redirect to dashboard
                //             // this.setState({
                //             //     authFlag: false,
                //             //     MsgFlag: false,
                //             //     Msg: "login success",
                //             //     userID: response.data.userID
                //             // })
                //             cookie.save('userID', response.data.userID, { path: '/' })
                //             cookie.save('userName', response.data.userName, { path: '/' })
                            
                //             // this.props.history.push("/dashboard")
                //         } else if (response.status === 201) {
                //             //Invalid credentials
                //             // this.setState({
                //             //     authFlag: true,
                //             //     MsgFlag: true,
                //             //     Msg: "Invalid Credentials"
                //             // })
                //         } else {
                //             //login failed
                //             // this.setState({
                //             //     authFlag: true,
                //             //     MsgFlag: true,
                //             //     Msg: "Login Failed"
                //             // })
                //         }
                //     }).catch(e => {
                //         console.log("Inside catch");
                //     })
            }
            else if (response.status === 201) {
                // console.log("Email ID already registered");
                // this.setState({
                //     Msg: "Email ID already registered",
                //     MsgFlag: true
                // })
                alert("user already exists");
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
  
  function handleChange(event){
  let {value, type, name} =event.target;
  setUserInfo (prev=> {return {...userInfo, [name]:value}});

}

let Result=  <div className="container"> 
    <h1 className="SLHeader">Please Create Your Account </h1>
    
    <div className="form-area">
      <form onSubmit={handleClick}>
    
      <label className="fLabel">Name</label>
      <input
        id="top-input"
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={userInfo.name}
      />
    
    <label className="fLabel">Phone Number</label>
    <input
        
        onChange={handleChange}
        type="text"
        name="phone"
        placeholder="Enter Your Phone Number"
        value={userInfo.phone}
      />

    <label className="fLabel">Email</label>  
      <input
        
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="Enter Your Email"
        value={userInfo.email}
      />


<label className="fLabel">Username</label>
      <input
        onChange={handleChange}
        type="text"
        name="userName"
        placeholder="Choose Your Username"
        value={userInfo.userName}
      />



<label className="fLabel">Password</label>
<input
        onChange={handleChange}
        id="bottom-input"
        type="password"
        name="password"
        placeholder="Choose a Password"
        value={userInfo.password}
      />
    
      <button className="btnS" type="submit">Create Account</button>
    


    </form>
{/* 
    {this.state.MsgFlag ? <div class="alert alert-danger" role="alert">{this.state.Msg}</div> : null} */}
</div>

{ loggedIn ? null : <Redirect to="/Login" /> }
</div>

return (Result)


}







export default SignUp;