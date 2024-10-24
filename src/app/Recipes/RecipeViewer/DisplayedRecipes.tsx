import React  from 'react'
import { useSearchParams } from 'next/navigation'
import Image from "next/image"
import clockIcon from "../../home-icons/stopwatch.png"
import bagIcon from "../../home-icons/shopping-bag.png"
import domeIcon from "../../home-icons/food.png"

function DisplayedRecipes() {
  const searcParams = useSearchParams();
  const recipe = JSON.parse(searcParams.get("recipe"))
  const ingredients = recipe.recipes
  const instructions = recipe.instructions
  return (
    <div className='flex justify-center items-center'>
      <div className="w-11/12">
        <div className="border rounded-3xl border-gray-400 border-solid flex justify-center flex-col items-center my-6 py-6">
          <span className='bg-rose-400 mt-8 px-3 py-1 mb-5 rounded-full'>RECIPE</span>
          <p className='text-8xl font-bold'>{recipe.title}</p>
          <p className="w-5/12 text-center pt-4 text-lg text-gray-500">Welcome to Cooks Delight, where culinary dreams come alive! Today, we embark on a journey of flavors with a dish that promises to elevate your dining experience – our Citrus Infusion Delight: {recipe.title}.</p>
          <div className="flex justify-between items-center text-lg font-bold w-3/12 pt-5">
            <div className="flex justify-center items-center ">
              <Image src={clockIcon} width={50} height={50} className='w-7 h-7 ' alt="clock" />
              <p>{recipe.time}</p>
            </div>
            <p>	&#183;</p>
            <div className="flex justify-center items-center">
              <Image src={bagIcon} width={50} height={50} className='w-7 h-7 ' alt="bag" />
              <p>{recipe.difficulty} PREP</p>
            </div>
            <p>	&#183;</p>
            <div className="flex justify-center items-center">
              <Image src={domeIcon} width={50} height={50} className='w-7 h-7 ' alt="serving-dome" />
              <p>{recipe.serve} SERVES</p>
            </div>
          </div>
          <Image src={`/RecipesImages/${recipe.image}`} width={800} height={400} alt={recipe.image} className='w-11/12 h-640 object-cover rounded-3xl mt-7 mb-10' />
          <div className="flex w-11/12 justify-between ">
            <div className=" ">
              <div className="">
                <p className='text-4xl font-bold pb-2'>
                  Instructions:
                </p>
                <ol className='list-decimal pl-8'>
                {instructions.map((instruction, index) =>{
                  return <li className='text-gray-600 text-xl' key={index}>{instruction}</li>
                })}
                </ol>
              </div>
            </div>
            <div className="bg-white rounded-xl "> 
              <div className="p-5">
                <p className='text-red-600 font-bold'>Ingredients:</p>
                <ul className='list-disc pl-8'>
                  {ingredients.map((ingredient , index)=>{
                    return <li className=''  key={index}>{ingredient}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayedRecipes