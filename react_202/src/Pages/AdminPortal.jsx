import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx'
import { ReqContext } from './../Components/ReqContext';

function AdminPortal(){
    const {  
        cuId,setCuId, cuMile, setCuMile, cuUsername,setCuUsername, cuIsLoggedin,setCuIsLoggedin, 
        adminUsername,setAdminUsername, adminIsLoggedin,setAdminIsLoggedin,flightId,setFlightId}= useContext(ReqContext);


        function signout(){
            setCuIsLoggedin(0);
            setCuUsername("");
            setAdminIsLoggedin(0);
            setAdminUsername("");
            setCuId(-99);
            setCuMile(0);
            }

let items=[{link:"/AdminAdd", name:"Add"}, {link:"/AdminEdit", name:"Edit/ Delete"}, {link:"/AdminUpdate", name:"Update Info"},
{link:"/Home", name:"Sign Out" , adminSignout:1}  ];

return (
<div >
<Menu menuItems={items}/>

    


</div>

)


}


export default AdminPortal;