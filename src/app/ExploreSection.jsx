import React from 'react'
import BFIcon from './home-icons/egg-and-bacon.png'
import LIcon from './home-icons/soup.png'
import DRIcon from './home-icons/burger.png'
import DTIcon from './home-icons/ice-cream.png'
import QBIcon from './home-icons/granola.png'
import Image from 'next/image'

function ExploreSection() {
  return (
    <div className='flex justify-center items-center'>
      <div className="bg-cyanBg rounded-3xl w-11/12 h-500 flex justify-between items-end">
        <div className="mb-11 ml-11  w-4/12">
          <span className='bg-red-400 py-1 px-3 rounded-full text-white text-sm'>EXPLORE</span>
          <p className='mt-5 text-5xl font-bold'>OUR DIVERSE</p>
          <p className='text-5xl font-bold mb-5'>PALETTE</p>
          <p className='text-gray-500 text-lg mb-16 '>
            If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our curated selection has something to satisfy every palate.
          </p>
          <button className='py-3 px-5 text-black text-xl font-bold border-solid rounded-full bg-transparent border border-black'>SEE MORE</button>
        </div>
        <div className="mr-11 my-11 w-4/12 h-10/12 grid grid-row-5 gap-3">
          <div className="flex justify-between items-center border-b border-gray-400 cursor-pointer hover:bg-black hover:bg-opacity-20 px-1 rounded-xl">
            <Image src={BFIcon} alt="egg" className='' width={40} height={40} />
            <span className="font-bold">BREAKFAST</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-400 cursor-pointer hover:bg-black hover:bg-opacity-20 px-1 rounded-xl">
            <Image src={LIcon} alt="soup" className='' width={40} height={40} />
            <span className="font-bold">LUNCH</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-400 cursor-pointer hover:bg-black hover:bg-opacity-20 px-1 rounded-xl">
            <Image src={DRIcon} alt="hamburger" className='' width={40} height={40} />
            <span className="font-bold">DINNER</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-400 cursor-pointer hover:bg-black hover:bg-opacity-20 px-1 rounded-xl">
            <Image src={DTIcon} alt="iceCream" className='' width={40} height={40} />
            <span className="font-bold">DESSERT</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-400 cursor-pointer hover:bg-black hover:bg-opacity-20 px-1 rounded-xl">
            <Image src={QBIcon} alt="snack" className='' width={40} height={40} />
            <span className="font-bold">QUICK BITE</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreSection