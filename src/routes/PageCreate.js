import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Create from '../components/Create'

const PageCreate = () => {
  return (
    <div>
      <NavbarLogin />
      <Heroimg2 heading="CREATE QUEST." text="Create new quest." />
      <Create />
      <Footer />
    </div>
  )
}

export default PageCreate  