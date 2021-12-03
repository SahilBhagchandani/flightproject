import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SingUp';
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom';
import Menu from './Pages/Menu';
import Logo from './Components/Logo.JPG'
import AdminLogin from './Pages/AdminLogin.jsx';
import UserInfoUpdate from './Pages/UserInfoUpdate';
import AdminAdd from './Pages/AdminAdd.jsx';
import AdminEdit from './Pages/AdminEdit';
import Shopping from './Pages/Shopping';
import AdminAdd22 from './Pages/AdminAdd22.jsx';
import SearchFlight from './Pages/SearchFlight';
import Home from './Pages/Home';
import CustomerPortal from './Pages/CustomerPortal';
import AdminPortal from './Pages/AdminPortal';
import ReqContextProvider from './Components/ReqContext';
import AdminUpdate from './Pages/AdminUpdate';
import CustomerFlights from './Pages/CustomerFlights';

function App() {


  return (
    <div>
     <ReqContextProvider>
    <Router>
    <div className="App">
    
     
       
   
        
        <img id="Logo" src={Logo} />
        <Switch>

        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/AdminLogin" component={AdminLogin} />         
          <Route path="/UserInfoUpdate" component={UserInfoUpdate} />         
          <Route path="/AdminAdd" component={AdminAdd} />         
          <Route path="/AdminAdd22" component={AdminAdd22} />         
          <Route path="/AdminEdit" component={AdminEdit} />     
          <Route path="/AdminLogin" component={AdminLogin} />  
          <Route path="/AdminUpdate" component={AdminUpdate} />   
          <Route path="/Shopping" component={Shopping} />  
          <Route path="/CustomerPortal" component={CustomerPortal} /> 
          <Route path="/CustomerFlights" component={CustomerFlights} />  
          <Route path="/AdminPortal" component={AdminPortal} />  
          <Route path="/Search" component={SearchFlight} />  
        </Switch>
        {/* <Redirect to={"/Home/" } /> */}
        </div>
        </Router>   
        </ReqContextProvider>
        </div>    

  );
}

export default App;
