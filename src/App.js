import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/layouts/Navbar';
import GuestState from './Context/guestContext/GuestState';
import AuthStatte from './Context/authContext/AuthState'
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';



function App() {
  return (
    <AuthStatte>
    <GuestState>
    <div >
      <NavBar/>
      <Switch>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Home}/>
        
      </Switch>
    </div>
    </GuestState>
    </AuthStatte>
  );
}

export default App;
