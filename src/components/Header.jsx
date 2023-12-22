import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/signin'>Sign In</NavLink>
        </ul>
    </div>
  )
}

export default Header