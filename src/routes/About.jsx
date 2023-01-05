import React from 'react'
import Aboutsection from '../componants/Aboutsection';

import Footer from '../componants/Footer';
import Navbar from '../componants/Navbar'
import Section2 from '../componants/Section2';
const About = () => {
  return (
    <div>
      <Navbar/>
      <Section2 heading="About Me" text="I'm a Frindly Front-End Developer"/>
      <Aboutsection/>
      <Footer/>
    </div>
  )
}

export default About;
