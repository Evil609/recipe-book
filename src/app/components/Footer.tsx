import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../assets/reverse-logo.png"
import tiktok from "../assets/tiktok.png"
import facebook from "../assets/facebook-logo.png"
import instagrem from "../assets/instagram.png"
import youtube from "../assets/youtube.png"


function Footer() {

  return (
    <div className='flex justify-center items-center mb-5'>
      <div id="footer-container"className=' w-11/12 bg-black rounded-3xl' >
        <div id='content' className='flex items-center justify-between'>
          <div  className="my-2 ml-4">
          <Image src={logo} alt="logo" className="w-14 h-14 ml-6 my-2" /> 
          </div>
          <div  className="flex justify-between">
          <Link href={"/"} className="mx-4 text-white font-sans text-base font-semibold cursor-pointer hover:underline hover:text-gray-300 *:" >
              HOME
            </Link>
            <Link href={"/Recipes"} className="mx-4 text-white font-sans text-base font-semibold cursor-pointer hover:underline hover:text-gray-300 *:" >
              RECIPES
            </Link>
            <Link href={"/CookingTips"} className="mx-4 text-white font-sans text-base font-semibold cursor-pointer hover:underline hover:text-gray-300 *:" >
              COOKING TIPS
            </Link>
            <Link href={"/About"} className="mx-4 text-white font-sans text-base font-semibold cursor-pointer hover:underline hover:text-gray-300 *:" >
              ABOUT
            </Link>
          </div>
          <div  className="flex items-center justify-center ">
            <a href="https://www.tiktok.com" target='_blank'><Image src={tiktok} alt='' className='w-7 h-7 mr-4 bg-white rounded-xl ' /> </a>
            <a href="https://www.facebook.com" target='_blank'><Image src={facebook} alt='' className='w-7 h-7 mr-4 bg-white rounded-xl ' /> </a>
            <a href="https://www.instagram.com" target='_blank'><Image src={instagrem} alt='' className='w-7 h-7 mr-4 bg-white rounded-xl ' /></a>
            <a href="https://www.youtube.com" target='_blank'><Image src={youtube} alt='' className='w-7 h-7 mr-4 bg-white rounded-xl ' /></a>
          </div>
        </div>
        <div className="flex  justify-center items-center">
          <hr className='w-11/12 border-t-gray-500' />
        </div>
        <div id='copyright' className="text-gray-500 flex justify-center items-center"> 
          <p className='py-6 text-xs' >
            COPYRIGHT: &copy; {new Date().getFullYear()} DELICIOUS KITCHEN 
          </p>
        </div>
      </div>
    </div> 
  )
}

export default Footer