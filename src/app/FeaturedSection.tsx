import React , {useState}from 'react'
import FeaturedRecipe from './FeaturedRecipe'
 
function FeaturedSection(props: { recipes: { title: string; description: string ; id: number ; type: string ; recipes: string[]; time: string; instructions: string[]; difficulty: string; serve: number; image: string; } }) {
  const [next,setNext] = useState(0)

  
  return (
    <div className='flex justify-center items-center '>
      <div className=" flex flex-col  w-11/12 h-570 border border-gray-400 rounded-3xl my-4">
        <div className='flex justify-between items-center p-11'>
          <p className='text-5xl font-bold '>FEATURED RECIPES</p>
          <div className="">
            <button className='w-9 h-9 mx-1 rounded-full border-2 border-black  text-lg'>&#10094;</button>
            <button className='w-9 h-9 mx-1 rounded-full border-2 border-black  text-lg'>&#10095;</button>
          </div>
        </div>
        <div className='px-5 pb-5 grid grid-cols-2 grid-rows-1 gap-4'>
          <FeaturedRecipe recipes={props.recipes[0]} />
          <FeaturedRecipe recipes={props.recipes[1]} />
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection