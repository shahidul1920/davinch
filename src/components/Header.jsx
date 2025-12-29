import { ChevronDown } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-[var(--dark)] text-[var(--light)]'>
            <header className='container mx-auto flex justify-between items-center py-4 px-5 xl:px-0'>
                <NavLink to="/">
                    <div className="logo flex items-center gap-1">
                        <img src="./Logo.png" alt="davinciHouse logo" />
                        <h1 className="text-xl font-medium">davinciHouse</h1>
                    </div>
                </NavLink>
                {/* menu here */}
                <div className="menu hidden md:block">
                    <nav className='navMenu rounded-full'>
                        <ul className="md:flex space-x-10 hidden">
                            <li><a href="#home" className="text-[14px] xl:text-[16px]">Home</a></li>
                            <li><a href="#services" className="text-[14px] xl:text-[16px] flex items-center gap-2">Services<ChevronDown size={18} /></a></li>
                            <li><a href="#deals" className="text-[14px] xl:text-[16px]">Deals</a></li>
                            <li><a href="#about" className="text-[14px] xl:text-[16px]">About</a></li>
                        </ul>
                    </nav>
                </div>
                {/* contact button   */}
                <div className="contact-button hidden md:block">
                    <button className="btn px-4 py-2 rounded-full text-[14px] xl:text-[16px] text-[var(--text-dark)]">Contact Us</button>
                </div>
            </header>
        </div>
    )
}

export default Header