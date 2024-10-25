import React from 'react'
import SuggestRecipe from './SuggestRecipe';
function RecipeSection(props) {
  
  return (

    <div className='flex justify-center items-center'>
      <div className="w-11/12 ">
        <div className="flex justify-center items-center flex-col pt-20">
          <span className='text-sm text-white py-1 px-2.5 rounded-full bg-rose-400 mb-2'>RECIPES</span>
          <p className='text-6xl font-bold mb-2 indent-9'>EMBARK ON A JOURNEY</p>
          <p className='text-base text-gray-500'>With our diverse collection of recipes we have something to satisfy every palate.</p>
          <div className="my-10">
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black focus:bg-lime-500 focus:opacity-100 focus:border-black'>ALL</button>
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black focus:bg-lime-500 focus:opacity-100 focus:border-black'>BREAKFAST</button>
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black focus:bg-lime-500 focus:opacity-100 focus:border-black'>LUNCH</button>
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black focus:bg-lime-500 focus:opacity-100 focus:border-black'>DINNER</button>
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black focus:bg-lime-500 focus:opacity-100 focus:border-black'>DESSERT</button>
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black focus:bg-lime-500 focus:opacity-100 focus:border-black'>QUICK BITE</button>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-6  mb-12">
          <SuggestRecipe  recipes={props.recipes} />
          <SuggestRecipe  recipes={props.recipes} />
          <SuggestRecipe  recipes={props.recipes} />
          <SuggestRecipe  recipes={props.recipes} />
          <SuggestRecipe  recipes={props.recipes} />
          <SuggestRecipe  recipes={props.recipes} />
        </div>
      </div>
    </div>
  )
}

export default RecipeSection