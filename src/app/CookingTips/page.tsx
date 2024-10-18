import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import JoinUs from '../components/JoinUs'

function CookingTips() {
  return (
    <body className='bg-orange-50'>
      <NavBar />
      <div>Cooking Tips</div>
      <JoinUs /> 
      <Footer />
    </body>
  )
}

export default CookingTips