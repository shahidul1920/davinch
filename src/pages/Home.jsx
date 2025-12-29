import React from 'react'

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
