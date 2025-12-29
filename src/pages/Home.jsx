import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import WorkProcess from '../components/WorkProcess'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <div className="w-full bg-[var(--dark)] h-[600px]"></div>
            <WorkProcess />
            <Testimonials />
            <CTA />
        </>
    )
}
