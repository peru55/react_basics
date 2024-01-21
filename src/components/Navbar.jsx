import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="nav-container">
            <div className="logo">Logo</div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar