import React from 'react'

function JoinUs() {
  return (
    <div className='flex justify-center items-center ' >
      <div className=" w-11/12 bg-joinBg bg-no-repeat bg-cover h-96 rounded-3xl my-5 flex justify-center items-center flex-col">
        <div className="flex  justify-center flex-col items-center">
          <p className='text-white' >SUBSCRIBE</p>
          <p className='text-white font-serif text-6xl font-bold ' >JOIN THE FUN </p>
          <p className='text-white font-serif text-6xl font-bold ' >SUBSCRIBE NOW! </p>
          <p className='text-white ' >Subscribe to our newsletter for weekly serving of recipes , cooking,</p>
          <p className='text-white ' >tips, and exclusive insights straight to you inbox</p>

        </div>
        <div className="mt-8">
          <div className='flex  bg-white px-2 py-2 rounded-full'> 
            <input placeholder='Email Address' className='pl-4 w-80' />
            <button className='text-white bg-black rounded-3xl px-5 py-2 hover:opacity-80'>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs