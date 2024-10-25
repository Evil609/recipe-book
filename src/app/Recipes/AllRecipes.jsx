"use client"
import React , {useState , useEffect} from 'react'
import SuggestRecipe from './SuggestRecipe'

function AllRecipes(props) {
  const [page , setPage] = useState(0);
  const [prevStyle , setPrevStyle ] = useState("py-1.5 px-4 mx-1 rounded-full border-2 border-gray-300 text-gray-300 text-lg")
  const [nextStyle , setNextStyle ] = useState("py-1.5 px-4 mx-1 rounded-full border-2 border-gray-500 text-gray-500 text-lg hover:bg-black hover:text-white")
  function nextPage(){
    if((page + 2) < 29){
    setPage(page + 9);
    setPrevStyle("py-1.5 px-4 mx-1 rounded-full border-2 border-gray-500 text-gray-500 text-lg hover:bg-black hover:text-white")
  }
  }
  function prevPage(){
    if(page !== 0){
    setPage(page - 9);
    setNextStyle("py-1.5 px-4 mx-1 rounded-full border-2 border-gray-500 text-gray-500 text-lg hover:bg-black hover:text-white")
    }
  }
  useEffect(()=>{
    if(page === 0){
      setPrevStyle("py-1.5 px-4 mx-1 rounded-full border-2 border-gray-300 text-gray-300 text-lg")
    }
  } , [page])
  useEffect(()=>{
    if((page + 2) === 29 ){
      setNextStyle("py-1.5 px-4 mx-1 rounded-full border-2 border-gray-300 text-gray-300 text-lg")
    }
  } , [page])
  return (
    <div className='flex justify-center items-center my-8' >
      <div className="w-11/12">
        <div className="flex justify-center items-center flex-col ">
          <p className='text-6xl font-bold pb-4'>WELCOME TO RECIPE SECTION </p>
          <p className='text-2xl pb-4'>HERE YOU WILL FIND DELICIOUS RECIPES THAT WILL FIT YOUR DESIRE AND MODE</p>
          <div className="">
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black'>ALL</button>
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black'>BREAKFAST</button>
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black'>LUNCH</button>
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black'>DINNER</button>
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black'>DESSERT</button>
            <button className='py-1.5 px-4 text-base rounded-full border border-gray-500 mx-2 opacity-50 hover:opacity-100 *:border-black'>SNACK</button>
          </div>
        </div>
        <div className="grid grid-cols-3  gap-5 my-10">
          <SuggestRecipe recipes={props.recipes[0 + page]}/>
          <SuggestRecipe recipes={props.recipes[1 + page]}/>
          <SuggestRecipe recipes={props.recipes[2 + page]}/>
          <SuggestRecipe recipes={props.recipes[3 + page]}/>
          <SuggestRecipe recipes={props.recipes[4 + page]}/>
          <SuggestRecipe recipes={props.recipes[5 + page]}/>
          <SuggestRecipe recipes={props.recipes[6 + page]}/>
          <SuggestRecipe recipes={props.recipes[7 + page]}/>
          <SuggestRecipe recipes={props.recipes[8 + page]}/>
        </div>
        <div className="flex justify-center items-center"> 
          <button className={prevStyle} onClick={prevPage}>Previous</button>
          <button className={nextStyle} onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default AllRecipes