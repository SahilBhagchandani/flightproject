import React, {useState} from 'react';
import Menu from './Menu';
import axios from 'axios';
import backendServer from '../webConfig';

function UserInfoUpdate (){

let NEW= {name:"Shervin", username:"Shervin1994", email: "Shervin.Suresh@gmail.com", phone:"+6(676)6786567"};
const [newInfo, newInfoSetter]=useState({});

function handleClick(event) {
    event.preventDefault();
    console.log("UserName=", newInfo.userName);
    console.log("Password=", newInfo.newPassword);
    alert("Information Successfully Updated")

    const data = {
      userName: newInfo.userName,
      userPassword: newInfo.newPassword,
      name : newInfo.name,
      email: newInfo.email,
      phoneNumber: newInfo.phone,
      customerid: localStorage.getItem("userid")
  }
  axios.defaults.withCredentials = true;
  axios.post(`${backendServer}/updateinfo`, data)
      .then(response => {
        
          if (response.status === 200) {
              
              
              axios.defaults.withCredentials = true;
              alert("Information Successfully Updated")
              
          }
          else if (response.status === 201) {
              
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
newInfoSetter (prev=> {return {...newInfo, [name]:value}});

}

let menuItems=[{link:"/CustomerPortal", name:"Portal"}, {link:"/Home", name:"Sign Out"} ];

return (
<div >
<Menu menuItems={menuItems}/>
    

    <div className="container">

    <h2>Please Enter Your New Information For Update</h2>
    <form onSubmit={handleClick}>

    <label className="fLabel">Name</label>
    <input
          
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={newInfo.name}
        /> 
<label className="fLabel">Username</label>
    <input
          
          onChange={handleChange}
          type="text"
          name="userName"
          placeholder="Enter Your Username"
          value={newInfo.userName}
        /> 
<label className="fLabel">Email</label>
    <input
          id="top-input"
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Enter Your Email"
          value={newInfo.email}
        />

<label className="fLabel">Phone Number</label>
    <input
          
          onChange={handleChange}
          type="text"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={newInfo.phone}
        />

<label className="fLabel">Password</label>
        <input
          
          onChange={handleChange}
          type="password"
          name="newPassword"
          placeholder="Enter Your New Password"
          value={newInfo.newPassword}
        />



      

    
        <button className="btnLogin" type="submit">Update</button>
      


      </form>

    </div>

</div>


)

}

export default UserInfoUpdate;