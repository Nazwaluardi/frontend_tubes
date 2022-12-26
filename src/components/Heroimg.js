import React from 'react'
import "./HeroimgStyles.css"
import introimg from "../assets/intro-img.jpg"
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className='intro-img' src={introimg} alt=''/>
        </div>
        <div className="content">
            <p>WELCOME</p>
            <h1>Education Platform.</h1>
            <div>
                <Link to="/project" className='btn'>Quest</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg