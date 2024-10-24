"use client"
import React , {useState , useEffect }from 'react'
import FeaturedRecipe from './FeaturedRecipe'
 
function FeaturedSection(props: { recipes: { title: string; description: string ; id: number ; type: string ; recipes: string[]; time: string; instructions: string[]; difficulty: string; serve: number; image: string; } }) {
  const [page , setPage ] = useState(0)
  const [prevStyle , setPrevStyle ] = useState("w-9 h-9 mx-1 rounded-full border-2 border-gray-300 text-gray-300 text-lg")
  function nextPage(){
    setPage(page + 2)
    setPrevStyle("w-9 h-9 mx-1 rounded-full border-2 border-gray-500 text-gray-500 text-lg hover:bg-black hover:text-white")
  }
  function prevPage(){
    if(page !== 0){
      setPage(page - 2)
    }
    
  }

  useEffect(()=>{
    if(page === 0){
      setPrevStyle("w-9 h-9 mx-1 rounded-full border-2 border-gray-300 text-gray-300 text-lg")
    }
  } , [page])
  return (
    <div className='flex justify-center items-center '>
      <div className=" flex flex-col  w-11/12 h-570 border border-gray-400 rounded-3xl my-4">
        <div className='flex justify-between items-center p-11'>
          <p className='text-5xl font-bold '>FEATURED RECIPES</p>
          <div className="">
            <button id="prevButton" className={prevStyle} onClick={prevPage}>&#10094;</button>
            <button className='w-9 h-9 mx-1 rounded-full border-2 border-gray-500 text-gray-500 text-lg hover:bg-black hover:text-white ' onClick={nextPage}>&#10095;</button>
          </div>
        </div>
        <div className='px-5 pb-5 grid grid-cols-2 grid-rows-1 gap-4'>
          <FeaturedRecipe recipes={props.recipes[0 + page]} />
          <FeaturedRecipe recipes={props.recipes[1 + page]} />
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection