import React, { useState } from 'react'
import './Nav.css'
import Logo from '../../svg/Logo'
import Register from '../../svg/Register'
import Login from '../../svg/Login'
import Album from '../../svg/Album'
import Menu from '../../svg/Menu'
import LinkedIn from '../../svg/LinkedIn';
import Spotify from '../../svg/Spotify';
import { NavLink } from 'react-router-dom'

export default function Nav() {
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
      <nav 
        role="navigation" 
        className="navbar" 
        id="sidenav" 
        style={open ? {marginLeft: "0"} : {marginLeft: "-30.4%"}}>
        <div 
          className="nav-item close menu" 
          onClick={(e) => handleSetClose(e)} >
          <Menu 
            id="closebtn" 
            className="svg menu" 
            />
            <h3 className="nav-text">CLOSE</h3>
        </div>
        <NavLink 
          className="nav-item link logo" 
          to={"/albums"} 
          onClick={(e) => handleSetClose(e)}
        >
          <Logo className="svg logo"/>
          <h3 className="nav-text logo">RM</h3> 
        </NavLink>
        <NavLink 
          className="nav-item link register" 
          to={"/register"} 
          onClick={(e) => handleSetClose(e)}
        >
          <Register className="svg register" />
          <h3 className="nav-text register">REGISTER</h3>
        </NavLink>
        <NavLink 
          className="nav-item link albums" 
          to={"/albums"}
          onClick={(e) => handleSetClose(e)}
        >
          <Album className="svg album" />
          <h3 className="nav-text albums">ALBUMS</h3>
        </NavLink>
        <NavLink 
          className="nav-item link login" 
          to={"/login"}
          onClick={(e) => handleSetClose(e)}
        >
          <Login className="svg login" />
          <h3 className="nav-text login">LOGIN</h3>
        </NavLink>
        <div className="nav-item social">
          <a href="https://www.linkedin.com/in/elang589/">
            <LinkedIn className="svg-social linkedin" />
          </a>
          <a href='https://open.spotify.com/user/elang5'>
            <Spotify className="svg-social spotify" />
          </a>
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
