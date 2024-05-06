/* eslint-disable no-unused-vars */
import React from 'react'
import { navLinks } from "../constants";

const Header = () => {
  return (
    <header className='fixed flex items-center h-[70px] z-[1000] w-full border border-solid border-transparent'>
            <nav className='container flex items-center justify-between gap-x-16'>
                <a href='/' className='text-2xl font-bold text-gray-10'>
                    Digicourse
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
                </div>
            </nav>
    </header>
  )
}

export default Header