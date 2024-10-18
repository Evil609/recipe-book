import React from 'react'

function FeaturedRecipe(props: { recipes: { title: string; description: string ; id: number ; type: string ; recipes: string[]; time: string; instructions: string[]; difficulty: string; serve: number; image: string; } }) {
  const recipe = props.recipes;
  const image = recipe.image;
  return (
    <div className=" bg-white rounded-3xl h-410">
    <img src={`RecipesImages/${image}`} alt='' className='rounded-t-3xl h-60 w-full object-center object-cover  ' />
    <div className="py-3 px-4">
      <p className='text-2xl font-bold '>{recipe.title}</p>
      <p className='text-base pt-4 '>{recipe.description}</p>
      <div className="flex  justify-between items-center pt-3">
        <p className='text-xs font-bold'>{recipe.time} Min - {recipe.difficulty} prep - {recipe.serve} serves</p>
        <button className='border-2 border-solid border-black px-4 py-2 text-bold rounded-full text-sm'>VIEW RECIPES</button>
      </div>
    </div>
  </div>
  )
}

export default FeaturedRecipe