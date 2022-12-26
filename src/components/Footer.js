import React from 'react'
import "./FooterStyles.css"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Jl. Geger Arum, Isola, Sukasari.</p>
                        <p>Kota Bandung.</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />0822-1557-7298</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />questroom@upi.edu</h4>
                </div>
            </div>
            <div className="right">
                <h4>About us</h4>
                <p>Platform untuk menunjang sistem transparansi nlai dalam kegiatan belajar mengajar.</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "2rem"}} />
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "2rem"}} />
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer