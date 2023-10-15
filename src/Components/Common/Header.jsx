import React from 'react'
import { Link } from 'react-router-dom'

import { handleLogout } from "../Authentication/Login";


const Header = ({ user }) => {
  console.log('header data like', user)
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
     
        
          <li><a> Welcome, {user?.displayName}!</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        {user && (
        <div>
          Welcome, {user?.displayName}! {/* Display the user's name */}
          {/* Add a logout button here if needed */}
        </div>
      )}
        <li><a className='btn'><Link to='/about-us'> About Us </Link></a></li>
      </ul>
    </div>
    <div className="navbar-end">
  {user ? (
    <button className="btn" onClick={handleLogout}>Logout</button>
  ) : (
    <>
      <a className="btn"><Link to="/login">Login</Link></a>
      <a className="btn">Register</a>
    </>
  )}
</div>

  </div>
  )
}

export default Header