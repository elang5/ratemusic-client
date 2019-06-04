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

  const handleSetOpen = (e) => {
    setOpen(true);
    e.currentTarget.style.visibility = "hidden";
  }

  const handleSetClose = (e) => {
    setOpen(false);
    const openMenu = document.getElementById('open-container');
    openMenu.style.visibility = "visible";
  }

  return (
    <>
      <nav role="navigation" className="navbar" id="sidenav" style={open ? {marginLeft: "0"} : {marginLeft: "-22.4%"}}>
        <div className="nav-item menu">
          <Menu 
            id="closebtn" 
            className="svg menu" 
            onClick={(e) => handleSetClose(e)} />
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
        id="open-container"
        onClick={(e) => handleSetOpen(e)}
        >
        <Menu 
          id="openbtn" 
          className="svg menu closebtn" 
        />
      </div>
    </>
  )
}
