import React from 'react'

function SuggestRecipe(props: { recipes: { title: string; description: string ; id: number ; type: string ; recipes: string[]; time: string; instructions: string[]; difficulty: string; serve: number; image: string; } }) {
  const randomNum = Math.floor(Math.random()*(29));
  const recipe = props.recipes[randomNum];
  const image = recipe.image;
  return (
          <div id={recipe.id} className="bg-white rounded-3xl shadow-gray-500 shadow-sm">
            <div className="mb-6">
              <img src={`RecipesImages/${image}`} alt={image} className='h-60 w-full object-center object-cover rounded-t-3xl'/>
            </div>
            <div className="px-6">
              <p className='text-2xl font-bold mb-1'>{recipe.title}</p>
              <p className=' text-gray-500 mb-12 '>{recipe.description}</p>
              <div className="mb-4 flex justify-between items-center ">
                <p className='text-sm font-bold '>{recipe.time} - {recipe.difficulty} prep - {recipe.serve} serves</p>
                <button className='px-5 py-2 cursor-pointer border-black border rounded-full font-bold hover:shadow-lg'>VIEW RECIPE</button>
              </div>
            </div>
          </div>
  )
}

export default SuggestRecipe