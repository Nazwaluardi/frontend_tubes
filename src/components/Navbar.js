import React, { useState } from 'react'
import "./NavbarStyles.css"
import { FaBeer, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Questroom.</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">Quest</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
        <div className='beer' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBeer size={20} style={{ color: "#fff" }} />)}
        </div>
    </div>
  )
}

export default Navbar