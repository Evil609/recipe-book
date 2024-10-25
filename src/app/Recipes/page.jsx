'use client'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import JoinUs from '../components/JoinUs'
import AllRecipes from './AllRecipes'
import { recipes } from '../data/recipes'

function Recipes() {
  return (
  <div className='bg-main'>
    <NavBar />
    <AllRecipes recipes={recipes}/>
    <JoinUs />
    <Footer />
  </div>
  )
}

export default Recipes