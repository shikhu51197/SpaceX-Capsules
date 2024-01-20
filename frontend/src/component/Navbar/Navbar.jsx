import React, { useState } from "react";
import logo from "../../Image/pp,840x830-pad,1000x1000,f8f8f8.jpg";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";


const Navbar = () => {
  const [open, setOpen] = useState(false);


  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successfull");
    navigate("/");
    window.location.reload();
  };


  const handleclick = () => {
    console.log('clicked')
    setOpen(!open);
  };

  return (
    <nav className="fixed top-0 z-50 w-[100%] flex items-center justify-between flex-wrap bg-black py-5 lg:px-12 shadow border-solid border-t-2 border-black">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <Link to="/">
          <div className="flex items-center flex-shrink-0 w-[20%] ">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="block lg:hidden">
          <button
            id="nav"
            onClick={handleclick}
            className="flex items-center px-3 py-2 border-2 rounded text-white border-white hover:text-white hover:border-blue-700"
          >
             <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Your menu items */}
      <div className={`menu w-full mx-auto flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 block  ${open ? 'block' : 'hidden'}`}>
        <div className="text-md font-bold text-white lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 relative hover:underline decoration-blue-500 px-4 py-2 rounded mr-2 transition-all duration-300"
          >
            FALCON6
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></div>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 relative file hover:underline decoration-blue-500 px-4 py-2 rounded mr-2 transition-all duration-300"
          >
            DRAGON
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></div>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 relative hover:underline decoration-blue-500 px-4 py-2 rounded mr-2 transition-all duration-300"
          >
            STARSHIP
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></div>
          </a>
        </div>
        {token ? (
  <div className="flex mx-auto ">
    <a
      href="#"
      onClick={handleLogout}
      className="block text-md px-4 ml-5 py-2 rounded shadow-lg hover:animate-bounce shadow-cyan-500/50 text-white font-bold hover:text-white mt-4 ring hover:ring-blue-500 hover:border-opacity-50 lg:mt-0"
    >
      Logout
    </a>
  </div>
) : (
  <>
    <Link to="/signup">
      <a
        href="#"
        className="block text-md px-4 py-2 rounded shadow-lg shadow-cyan-500/50 text-white ml-2 font-bold hover:text-white mt-4 hover:ring-blue-500 ring hover:border-opacity-50 lg:mt-0 hover:animate-bounce"
      >
        Sign Up
      </a>
    </Link>
    <Link to="/login">
      <a
        href="#"
        className="block text-md px-4 ml-5 py-2 rounded shadow-lg hover:animate-bounce shadow-cyan-500/50 text-white font-bold hover:text-white mt-4 ring hover:ring-blue-500 hover:border-opacity-50 lg:mt-0"
      >
        Login
      </a>
    </Link>
  </>
)}


      </div>
    </nav>
  );
};

export default Navbar;
