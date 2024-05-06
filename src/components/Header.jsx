/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { navLinks } from "../constants";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='fixed flex items-center h-[70px] z-[1000] w-full border border-solid border-transparent'>
            <nav className='container flex items-center justify-between gap-x-16'>
                <a href='/' className='text-2xl font-bold text-fuchsia-600 '>
                    DIGICOURSE
                </a>
                <div className='hidden lg:flex lg:justify-between w-full'>
                    <ul className='flex items-center gap-x-4'>
                        {navLinks.map((link) => {
                            return (
                                <li key={link.id}> 
                                    <a href={`#${link.id}`} className='link'>{link.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className='flex items-center gap-x-4'>
                        <button type="button" className='btn btn-outline'>
                            Sign Up
                        </button>
                        <button type ="button"
                        className='btn btn-primary'>Log In</button>
                    </div>
                </div>
                <div className={`header__menu-icon flex lg:hidden relative w-5 h-4 flex-shrink-0 cursor-pointer overflow-hidden ${toggleMenu ? "active" : ""}`} 
                onClick={() => setToggleMenu(!toggleMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            {/* --------- Mobile Navbar Menu --------- */ }
            

    </header>
  )
}

export default Header