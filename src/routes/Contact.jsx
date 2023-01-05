import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import Section2 from '../componants/Section2'
import Conatcus from '../componants/Conatcus'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Section2 heading="Contact" text="Let's Chat"/>
      <Conatcus/>
      <Footer/>
    </div>
  )
}

export default Contact
