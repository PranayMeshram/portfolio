import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import Section2 from '../componants/Section2'
import Pricecard from '../componants/Pricecard'
import Work from '../componants/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Section2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <Pricecard/>
      <Footer/>
      
    </div>
  )
}

export default Project
