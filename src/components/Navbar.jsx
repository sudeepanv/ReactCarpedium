import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const navStyle = "text-black text-2x1 font-bold"
const fontStyle = "font-normal leading-[35.6px] text-[50px] md:text-[30px] font-['Madeia']";

function Navbar() {
  const[navbarOpen,setNavbarOpen] = useState(false)
  return (
    <>
    <nav className=" bg-[#D32F2F] text-[#FFFFFFB2] accent-[#FFEB3B] backdrop-blur-lg fixed top-0 w-full border-b-4 border-black">
      <div className="max-w-screen flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto ">
        <div className="flex justify-between w-full items-center md:w-1/4 p-3 mr-auto">
        <Link to="/">
        <img src="\assets\images\carpelogo.svg" 
        alt="Logo"></img>
        </Link>
        <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="px-3 me-3 md:hidden bg-[#C1E20D] boder-3px border-black rounded-md "
        onClick={()=>setNavbarOpen(!navbarOpen)}>
          {navbarOpen?(
            <div className={navStyle}>&times;</div>
          ):(<div className={navStyle}>&#9776;</div>)}
        </button>
        </div>
        <div className={"lg:flex flex-grow md:flex-none items-start flex md:h-auto overflow-hidden pr-10 " +
           (navbarOpen? "h-screen":"h-0")} 
           id="navbar-default">
            <ol className="font-medium flex flex-col justify-start text-center gap-11 md:gap-8 md:flex-row w-screen md:w-full">
              <li className="md:pt-2"><Link to={"/"} className={fontStyle}>Home</Link> </li>
              <li className="md:pt-2"> <a href="/#about" className={fontStyle}> About</a></li>
              <li className="md:pt-2"><Link to={"/events"} className={fontStyle}>Events</Link> </li>
              <li className="md:pt-2"> <a href="/#contact" className={fontStyle}> Contact</a></li>
              <li className="md:bg-[#ffbc48dd] md:px-4 py-1 md:border-[3px] border-black  rounded-[8px] me-6 md:me-0">
              <Link to={"/register"} className={fontStyle}>Register</Link> </li>
            </ol>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar