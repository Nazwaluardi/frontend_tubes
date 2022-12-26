import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutContentStyles.css"
import foto_sma from "../assets/foto-sma.jpg"
import foto_kuliah from "../assets/foto-kuliah.JPG"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Is Us?</h1>
            <p>Questroom adalah platform untuk menunjang sistem transparansi nilai, wadah untuk melakukan aksi protes positif, dan sebagai tracking tugas. </p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={foto_sma} className='img' alt="" />
                </div>
                <div className='img-stack bottom'>
                    <img src={foto_kuliah} className='img' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent