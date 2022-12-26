import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Delete from '../components/Delete'

const PageDelete = () => {
  return (
    <div>
      <NavbarLogin />
      <Heroimg2 heading="DELETE QUEST." text="Delete quest." />
      <Delete />
      <Footer />
    </div>
  )
}

export default PageDelete  