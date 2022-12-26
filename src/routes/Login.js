import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import FormLogin from '../components/FormLogin'

const Login = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="LOGIN." text="Login now." />
      <FormLogin />
      <Footer />
    </div>
  )
}

export default Login