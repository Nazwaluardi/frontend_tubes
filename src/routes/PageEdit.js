import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Edit from '../components/Edit'

const PageEdit = () => {
  return (
    <div>
      <NavbarLogin />
      <Heroimg2 heading="EDIT QUEST." text="Edit quest." />
      <Edit />
      <Footer />
    </div>
  )
}

export default PageEdit  