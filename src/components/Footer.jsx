import React from 'react'
import { Facebook, Instagram, Linkedin, X } from 'lucide-react'
import Button from '../UIs/Button'

function Footer() {
    return (
        <div className='bg-[var(--dark)]'>
            <div className="container flex mx-auto py-10 justify-between items-center pt-12">
                <div className="logo flex items-center gap-2">
                    <img src="./Logo.png" alt="" />
                    <span className='text-white text-[18px] font-medium'>DaVinch</span>
                </div>
                <div className="menu social">
                    <nav className='navMenu rounded-full'>
                        <ul className="md:flex space-x-10 hidden">
                            <li><a href="#home" className="text-[16px]">
                                <Facebook size={20} color="white" />
                            </a></li>
                            <li><a href="#services" className="text-[16px]">
                                <Linkedin size={20} color="white" />
                            </a></li>
                            <li><a href="#deals" className="text-[16px]">
                                <X size={20} color="white" />
                            </a></li>
                            <li><a href="#about" className="text-[16px]">
                                <Instagram size={20} color="white" />
                            </a></li>
                        </ul>
                    </nav>
                </div>
                <div className="contact">
                    <Button>Contact Us</Button>
                </div>
            </div>
        </div>
    )
}

export default Footer