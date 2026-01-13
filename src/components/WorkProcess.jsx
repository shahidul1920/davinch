import React from 'react'
import Button from '../UIs/Button';
import Heading from '../UIs/Heading';

const WorkProcess = () => {

    const steps = [
        {
            rotate: "0deg",
            number: "1",
            title: "Step 1: Product design Research",
            desc: "This initial step involves a systematic and thorough exploration of the market landscape."
        },
        {
            rotate: "90deg",
            number: "2",
            title: "Step 2: UI design in figma",
            desc: "We focus on creating a user interface that is intuitive efficient, and enjoyable to use."
        },
        {
            rotate: "-90deg",
            number: "3",
            title: "Step 3: No-code develop in webflow",
            desc: "Bringing the design to life using Webflow development for pixel-perfect implementation."
        }
    ];


    return (
        <div className='bg-[var(--dark)] p-6 py-18 text-white'>
            <Heading>Our Work Process</Heading>

            <div className="container mx-auto grid gap-4 mt-5 md:mt-10">
                {steps.map((step, i) => (
                    <div key={i} className='flex w-full gap-7'>
                        <div className="left w-[80px] flex flex-col items-center text-center justify-center gap-2">
                            <div className="number text-[22px] grid place-content-center font-regular text-[var(--primary)] border border-white rounded-full min-w-[40px] min-h-[40px]">{step.number}</div>
                            <div className="line w-[1.4px] h-full bg-[#3c4141]" />
                        </div>
                        <div className="right grid gap-4">
                            <img className={`w-[35px] h-auto rotate-[${step.rotate}]`} src="./eatface.png" alt="" />
                            <h3 className='text-[22px] font-regular'>{step.title}</h3>
                            <p className='text-[19px] max-w-[580px] font-thin text-[var(--lightGray)]'>{step.desc}</p>
                            <Button className="mt-4">Learn More</Button>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default WorkProcess