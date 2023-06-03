import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className='w-24 h-10 rounded-sm' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0BUkIg24oZ_whaXVnSQeTXjA08g3OiHuLQ&usqp=CAU' ></img>

 
        <span className="ml-3 text-xl">Virtual car shopping</span>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
         <Link to="/cars" className="mr-5 hover:text-gray-900 cursor-pointer">Cars</Link>
         <Link to="/about" className="mr-5 hover:text-gray-900 cursor-pointer ">About us</Link>
         <Link to="/contact" className="mr-5 hover:text-gray-900 cursor-pointer">Contact Us</Link>
      </nav>
      <div className="flex md:flex-nowrap  justify-center items-end md:justify-start">
  <div className="relative sm:w-64 w-40 sm:mr-4  mr-2">
    
    <input
      type="text"
      id="footer-field"
      name="footer-field"
      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-purple-500 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
  <button className="inline-flex text-white  bg-purple-500 border-0 py-1 px-6 focus:outline-none hover:bg-purple-600 rounded">
   Search
  </button>
   
</div>

    </div>
  </header>
  
  )
}

export default Navbar