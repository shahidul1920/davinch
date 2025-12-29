import React from 'react'

function Footer() {
  return (
    <div className='bg-[var(--dark)]'>
        <div className="container flex mx-auto py-10 justify-center items-center">
            <div className="logo flex items-center gap-2">
                <img src="./Logo.png" alt="" />
                <span className='text-white text-[18px] font-medium'>DaVinch</span>
            </div>
            <div className="menu social">
                <nav className='navMenu rounded-full'>
                    <ul className="md:flex space-x-10 hidden">
                        <li><a href="#home" className="text-[16px]"></a></li>
                        <li><a href="#services" className="text-[16px]"></a></li>
                        <li><a href="#deals" className="text-[16px]"></a></li>
                        <li><a href="#about" className="text-[16px]"></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Footer