import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Modal from './modal'
// reactIcons
// import { FaFacebook } from "react-icons/fa";

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
    { path: "/service", link: "Service" },
  ]

  // Modal details
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <header className='bg-navbg text-white fixed top-0 left-0 right-0 z-20 mb-16'>
      <nav className='px-6 py-6 max-w-7xl mx-auto flex justify-between items-center '>
        <a href='/' className='text-2xl font-bold '>LOAN<span className='text-customBlue'>PLUS</span></a>

        {/* navItems for lg devices */}
        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navItems.map(({ path, link }) => <li className='text-white' key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}>{link} </NavLink>
            </li>)
          }
        </ul>
        {/* menu icons */}

        <div className='text-white lg:flex gap-4 items-center hidden'>
          <button onClick={openModal} className='bg-customBlue px-8 py-3 font-bold text-xl rounded hover:bg-customGreen hover:text-white transition-all duration-200 ease-in'>Downloads</button>
        </div>

        {/* our modal component is here */}
        {/* <Modal isOpen={isModalOpen} onClose={closeModal}/> */}

        {/* mobile menu btn display mobile screen */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='cursor-pointer'>
            {
              isMenuOpen ? <i className="fa-solid fa-x w-5 h-5"></i> : <i className="fa-solid fa-bars w-5 h-5"></i>
            }
          </button>
        </div>
      </nav>
      {/* menu item only for mobile screen */}
      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {
            navItems.map(({ path, link }) => <li className='text-black' key={path}>
              <NavLink onClick={toggleMenu} to={path}>{link} </NavLink>
            </li>)
          }
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
