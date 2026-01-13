import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import WorkProcess from '../components/WorkProcess'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import { Boring } from '../components/Boring'
import VideoTestimonial from '../components/VideoTestimonial'

export const Home = () => {
    return (
        <>
            <Hero />
            <Boring />
            <VideoTestimonial />
            <WorkProcess />
            <Featured />
            <div className="w-full bg-[var(--dark)] h-[600px]"></div>
            
            <Testimonials />
            <CTA />
        </>
    )
}
