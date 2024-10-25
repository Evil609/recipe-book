import Image from "next/image"
import icon from "../assets/search.png"
import logo from "../assets/logo.png"
import Link from "next/link"
function NavBar(){
  
  return(
    <div className="flex items-center justify-center">
      <div id="nav-bar" className="flex justify-between h-18 w-11/12 border-solid border-gray-400 border items-center mt-4 rounded-full">
        <Link href={"/"} id="logo-nav-bar" className="ml-10 "> 
          <Image src={logo} alt="logo" className="w-14 h-14" /> 
        </Link>
        <div className="text-black" id="navigation">
          <div className=" flex justify-between " >
            <Link href={"/"} className="mx-4 text-gray-500 font-sans text-base font-semibold cursor-pointer hover:underline hover:text-gray-600 *:" >
              HOME
            </Link>
            <Link href={"/Recipes"} className="mx-4 text-gray-500 font-sans text-base font-semibold cursor-pointer hover:underline hover:text-gray-600 *:" >
              RECIPES
            </Link>
            {/* <Link href={"/CookingTips"} className="mx-4 text-gray-500 font-sans text-base font-semibold cursor-pointer hover:underline hover:text-gray-600 *:" >
              COOKING TIPS
            </Link>
            <Link href={"/About"} className="mx-4 text-gray-500 font-sans text-base font-semibold cursor-pointer hover:underline hover:text-gray-600 *:" >
              ABOUT
            </Link> */}
          </div>
        </div>
        <div className="mr-4 my-4 flex justify-center items-center" id="search">
          <button className=" p-2 bg-gray-200 rounded-full mr-4 hover:bg-gray-300 hover:opacity-85 " id="search-button"><Image src={icon} alt="search icon" className="h-5 w-5" /></button>
          <button className="text-white bg-black rounded-3xl px-5 py-2 hover:opacity-80"  id="sub-button">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}
export default NavBar