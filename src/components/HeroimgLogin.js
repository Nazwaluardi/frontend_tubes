import React from 'react'
import "./HeroimgStyles.css"
import introimg from "../assets/intro-img.jpg"
import { Link } from "react-router-dom"

const HeroimgLogin = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className='intro-img' src={introimg} alt=''/>
        </div>
        <div className="content">
            <p>WELCOME</p>
            <h1>Education Platform.</h1>
            <div>
                <Link to="/pagequest" className='btn'>Quest</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroimgLogin