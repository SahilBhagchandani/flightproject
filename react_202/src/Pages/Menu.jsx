import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import './pageCssFiles/Menu.css';
import { ReqContext } from './../Components/ReqContext';

function Menu(props) {

  const {cuId,setCuId, cuUsername,setCuUsername, cuIsLoggedin ,setCuIsLoggedin, 
    adminUsername, setAdminUsername, adminIsLoggedin,setAdminIsLoggedin, 
    cuMile, setCuMile, flightList, setFlightList, setDistance}= useContext(ReqContext);
  
function signout(){

setCuUsername("");
setCuIsLoggedin(0);
setAdminUsername("");
setAdminIsLoggedin(0);
setCuId(-99);
setCuMile(0);
setDistance(0);


}

  let items= props.menuItems.map ( (item)=> {
    if (item.name==="Sign Out"){
      return (<li name={item.name}  onClick={signout}>
        <Link className="link" to={item.link}>{item.name}  </Link>
      </li>)
    }
    else 
    return (    
      <li name={item.name}  >
      <Link className="link" to={item.link}>{item.name}  </Link>
    </li>
    
    )  }     )

  return (




    <ul className="menu">

            
    {items}


            

    </ul>

)
    
}

export default Menu;