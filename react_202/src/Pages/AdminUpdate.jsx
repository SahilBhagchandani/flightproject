import React, {useState, useContext} from 'react';
import Menu from './Menu';
import axios from 'axios';
import backendServer from '../webConfig';

function AdminUpdate (){

let NEW= {name:"Shervin", username:"Shervin1994", email: "Shervin.Suresh@gmail.com", phone:"+6(676)6786567"};
const [newInfo, newInfoSetter]=useState({});
let menuItems=[{link:"/AdminPortal", name:"Portal"}, {link:"/Home", name:"Sign Out"} ];

function handleClick(event) {
    event.preventDefault();
    console.log(localStorage.getItem("adminid"));

    const data = {
      adminid : localStorage.getItem("adminid"),
      userName: newInfo.userName,
      password: newInfo.newPassword
  }
    

    axios.post(`${backendServer}/updateadmininfo`, data)
        .then(response => {
            if (response.status === 200) {
                //redirect to dashboard
                console.log("uhuh");
                console.log(response.data);
                alert("Information Successfully Updated")

                // setAdminLoggedin(null);
               
                // cookie.save('userID', response.data.userID, { path: '/' })
                // cookie.save('userName', response.data.userName, { path: '/' })
                // this.props.history.push("/dashboard")
            } else if (response.status === 201) {
                //Invalid credentials
                
            } else {
                //login failed
                
            }
        }).catch(e => {
            console.log(e);
        })
  }

function handleChange(event){
let {value, type, name} =event.target;
newInfoSetter (prev=> {return {...newInfo, [name]:value}});

}


return (
<div >

    <Menu menuItems={menuItems} />

    <div className="container">

    <h2>Please Enter Your New Username and Password For Update</h2>
    <form onSubmit={handleClick}>

    
<label className="fLabel">Username</label>
    <input
          
          onChange={handleChange}
          type="text"
          name="userName"
          placeholder="Enter Your Username"
          value={newInfo.userName}
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

export default AdminUpdate;