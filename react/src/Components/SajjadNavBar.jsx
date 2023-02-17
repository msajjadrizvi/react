import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div>

      <NavLink className="link" to="/contact">
        Contact
      </NavLink>
      <NavLink className="link" to="/about">
        About
      </NavLink>

      <NavLink className="link" to="/blogs">
        Blogs
      </NavLink>


      <NavLink className="link" to="/works">
        Works
      </NavLink>


      <NavLink className="link" to="/">
        Home
      </NavLink>

      <div className="a">
        Logo
      </div>

    </div>
  )
}

export default Navbar