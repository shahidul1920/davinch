import React from 'react'
import Button from '../UIs/Button'

const Hero = () => {
    //const boxesBase = 'h-[80px] bg-[var(--dark)]'
    const boxesBase = 'h-[80px] bg-[var(--dark)]'
    const brandName = 'text-xl font-bold text-gray-200 opacity-60'
    return (
        <div className='py-12 overflow-x-hidden relative'>
            <img className='absolute inset-0 -z-1' src="./hero_da_vin.avif" alt="" />
            <main className='heroSection container mx-auto text-white grid grid-cols-6 bg-[#3c4141] border border-b-0 border-[#3c4141] gap-[1px] grid-rows-6'>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase} h-full col-span-4 row-span-5 text-center flex flex-col justify-center items-center p-2 md:p-6 relative`}>
                    <img className='absolute -top-[15px] -right-[15px]' src="./star.svg" alt="" />
                    <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 xl:mb-6'>Welcome to Davinch</h1>
                    <p className='text-[12px] xl:text-lg mb-4'>Your gateway to innovative solutions and cutting-edge technology. Explore our services and discover how we can help you achieve your goals.</p>

                    <Button>Learn More</Button>
                </div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes relative ${boxesBase}`}>
                    <img className='absolute -top-[15px] -left-[15px]' src="./star.svg" alt="" />
                </div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
                <div className={`boxes ${boxesBase}`}></div>
            </main>
            <div className="brandSection border border-[#3c4141] border-[0.4px] border-x-0 p-6 text-white text-center">
                <div className="container mx-auto flex flex-wrap xl:justify-between justify-center items-center gap-6">
                    <div>
                        <h1 className={brandName}>IPSaustralia</h1>
                    </div>
                    <div>
                        <img src="./star2.svg" alt="" />
                    </div>
                    <div>
                        <h1 className={brandName}>Bargedesk</h1>
                    </div>
                    <div>
                        <img src="./star2.svg" alt="" />
                    </div>
                    <div>
                        <h1 className={brandName}>Trust Holidays</h1>
                    </div>
                    <div>
                        <img src="./star2.svg" alt="" />
                    </div>
                    <div>
                        <h1 className={brandName}>OMCH</h1>
                    </div>
                    <div>
                        <img src="./star2.svg" alt="" />
                    </div>
                    <div>
                        <h1 className={brandName}>Upwork</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero