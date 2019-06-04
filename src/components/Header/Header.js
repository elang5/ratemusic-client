import React, { useState } from 'react'
import './Header.css'
import Logo from '../../svg/Logo'
import Register from '../../svg/Register'
import Login from '../../svg/Login'
import Album from '../../svg/Album'
import Menu from '../../svg/Menu'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen ] = useState(false)

  return (
    <header className="header">
      <nav role="navigation" className="navbar" id="sidenav" style={open ? {marginLeft: "0"} : {marginLeft: "-200px"}}>
        <Menu id="closebtn" className="svg menu" onClick={() => setOpen(false)} />
        <div className="nav-item logo">
          <NavLink className="link logo" to={"/albums"}>
            <Logo className="svg logo"/>
          </NavLink>
          <h3 className="nav-text logo">RM</h3>
        </div>
        <div className="nav-item register">
          <NavLink className="link register" to={"/register"}>
            <Register className="svg register" />
          </NavLink>
          <h3 className="nav-text register">REGISTER</h3>
        </div>
        <div className="nav-item albums">
          <NavLink className="link albums" to={"/albums"}>
            <Album className="svg album" />
          </NavLink>
          <h3 className="nav-text albums">ALBUMS</h3>
        </div>
        <div className="nav-item login">
          <NavLink className="link login" to={"/login"}>
            <Login className="svg login" />
          </NavLink>
          <h3 className="nav-text login">LOGIN</h3>
        </div>
      </nav>
      <Menu id="openbtn" className="svg menu" onClick={() => setOpen(true)} />
    </header>
  )
}
