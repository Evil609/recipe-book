import React from 'react'
import Link from "next/link"

function HeroSection() {
  return (
    <div className='flex justify-center items-center' >
      <div className="h-560 bg-heroSectionBg w-11/12 bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-3xl my-5">
        <div className="flex  flex-col items-center justify-center bg-black bg-opacity-45 w-full h-full text-white rounded-3xl">
          <p className=' text-8xl font-bold ' >UNLEASH CULINARY</p>
          <p className=' text-8xl font-bold ' >EXCELLENCE</p>
          <p className='text-2xl pt-3' >Explore a world of flavors, discover</p>
          <p className='text-2xl' >hand crafted recipes, and let aroma of </p>
          <p className='text-2xl' >our passion for cooking fill your kitchen</p>
          <Link href={"/Recipes"} className='bg-orange-400 py-2 px-5 text-black mt-7 rounded-full text-lg  hover:opacity-90'>EXPLORE RECIPES</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection