import React, { useState } from 'react'
import './Header.css'
import Logo from '../../svg/Logo'
import Register from '../../svg/Register'
import Login from '../../svg/Login'
import Album from '../../svg/Album'
import Menu from '../../svg/Menu'
import LinkedIn from '../../svg/LinkedIn';
import Spotify from '../../svg/Spotify';
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen ] = useState(false)

  return (
    <>
      <nav role="navigation" className="navbar" id="sidenav" style={open ? {marginLeft: "0"} : {marginLeft: "-22.4%"}}>
        <div className="nav-item menu">
          <Menu 
            id="closebtn" 
            className="svg menu" 
            onClick={() => setOpen(false)} />
            <h3 className="nav-text">CLOSE</h3>
        </div>
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
        <div className="nav-item social">
          <LinkedIn className="svg-social" />
          <Spotify className="svg-social" />
        </div>
      </nav>
      <div 
        className="open"
        onClick={() => {
          setOpen(true)}}
        >
        <Menu 
          id="openbtn" 
          className="svg menu closebtn" 
        />
      </div>
    </>
  )
}
