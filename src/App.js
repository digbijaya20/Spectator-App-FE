import React from 'react';
import './App.css';
import NavBar from './Components/layouts/Navbar';
import Home from './Components/pages/Home';
import GuestState from './Context/guestContext/GuestState';

function App() {
  return (
    <GuestState>
    <div >
      <NavBar/>
      <Home/>
    </div>
    </GuestState>
  );
}

export default App;
