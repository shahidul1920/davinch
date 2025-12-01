import React from 'react'

const Hero = () => {
    const boxesBase = 'h-[80px] bg-[var(--dark)]'
    return (
        <div className='bg-[var(--dark)] py-12'>
            <main className='heroSection container mx-auto text-white grid grid-cols-6 bg-amber-50 border border-amber-50 gap-[1px] grid-rows-6'>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase} h-full col-span-4 row-span-5 text-center flex flex-col justify-center items-center p-6`}>
                    <h1 className='text-5xl font-bold mb-6'>Welcome to Davinch</h1>
                    <p className='text-lg mb-4'>Your gateway to innovative solutions and cutting-edge technology. Explore our services and discover how we can help you achieve your goals.</p>
                    <button className='px-6 py-3 bg-[var(--primary-color)] text-white font-semibold rounded hover:bg-[var(--secondary-color)] transition'>Get Started</button>
                </div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
            </main>
        </div>
    )
}

export default Hero