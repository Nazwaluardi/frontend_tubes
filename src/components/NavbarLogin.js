import React, { useState } from 'react'
import "./NavbarStyles.css"
import { FaBeer, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const NavbarLogin = () => {
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
        <Link to="/homelogin">
            <h1>Questroom.</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li><Link to="/homelogin">Home</Link></li>
            <li><Link to="/pagequest">Quest</Link></li>
            <li><Link to="/">Sign Out</Link></li>
        </ul>
        <div className='beer' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBeer size={20} style={{ color: "#fff" }} />)}
        </div>
    </div>
  )
}

export default NavbarLogin