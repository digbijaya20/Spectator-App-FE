import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1><i className='fas fa-glass-cheers' />
          Spector App
        </h1>
        <p>Made with <span>❤</span> by Digbijaya</p> 
      </div>
      <ul>
        <li>Hello, Digbijaya</li>
        <span className="sm-hide">|</span>
        <li>
          <a href="#!">
            <span className="sm-hide">Logout</span>
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar