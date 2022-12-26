import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Quest from '../components/Quest'

const PageQuest = () => {
  return (
    <div>
      <NavbarLogin />
      <Heroimg2 heading="QUEST TABLE." text="List quest." />
      <Quest />
      <Footer />
    </div>
  )
}

export default PageQuest  