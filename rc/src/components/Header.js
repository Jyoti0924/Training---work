import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container-fluid">
     <img src='images/img1.jpeg' alt='logo' className='logo'></img>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li className="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Header
