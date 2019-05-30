import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h2>RateMusic</h2>
      <nav role="navigation">
        <div className="logo">
          <Link to='/albums'>
            RateMusic
          </Link>
        </div>
        <div className="register">
          <Link className="register" to="/register">
            Register
          </Link>
        </div>
        <div className="albums">
          <Link className="albums" to="/albums">
            Albums
          </Link>
        </div>
        {/* <div className="charts">
          <Link className="charts" to="/charts">
            Charts
          </Link>
        </div> */}
        {/* <div className="reviews">
          <Link className="reviews" to="/reviews">
            Reviews
          </Link>
        </div> */}
        <div className="login">
          <Link className="login" to="/login">
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}
