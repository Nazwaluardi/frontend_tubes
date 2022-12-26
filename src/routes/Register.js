import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import FormRegister from '../components/FormRegister'

const Register = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="REGISTER." text="Register now." />
      <FormRegister />
      <Footer />
    </div>
  )
}

export default Register