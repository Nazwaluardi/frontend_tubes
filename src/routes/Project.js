import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="QUEST." text="To do list." />
      <Work />
      <Footer />
    </div>
  )
}

export default Project