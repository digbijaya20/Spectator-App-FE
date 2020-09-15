import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/layouts/Navbar';
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import GuestState from './Context/guestContext/GuestState';


function App() {
  return (
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
  );
}

export default App;
