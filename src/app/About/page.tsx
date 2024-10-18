import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import JoinUs from '../components/JoinUs'

function About() {
  return (
    <body className='bg-orange-50'>
      <NavBar /> 
      <div>About</div>
      <JoinUs />
      <Footer />
    </body>
  )
}

export default About