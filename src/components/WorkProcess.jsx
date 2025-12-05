import React from 'react'

const WorkProcess = () => {

    const steps = [
        {
            number: "1",
            title: "Product design Research",
            desc: "This initial step involves a systematic and thorough exploration of the market landscape."
        },
        {
            number: "2",
            title: "UI design in figma",
            desc: "We focus on creating a user interface that is intuitive, efficient, and enjoyable to use."
        },
        {
            number: "3",
            title: "No-code develop in webflow",
            desc: "Bringing the design to life using Webflow development for pixel-perfect implementation."
        }
    ];


    return (
        <div className='bg-[var(--dark)] py-18 text-white'>
            <div className="container mx-auto">
                <div className="heading flex gap-2 items-center justify-center">
                    <h2 className='text-[40px] font-regular text-center'>Our Work Process</h2>
                    <img className='w-[30px]' src="./star3.svg" alt="" />
                </div>
            </div>



            <div className="border-l border-white/20 ml-6 space-y-0">

                {steps.map((step, index) => (
                    <div key={index} className="relative pl-10 pb-16 last:pb-0">

                        {/* THE CIRCLE NUMBER */}
                        {/* absolute positioning with -left ensures it centers on the border line */}
                        <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-black font-semibold">
                            {step.number}
                        </div>

                        {/* THE CONTENT */}
                        <div>
                            {/* Optional: The gradient icon placeholder */}
                            <div className="mb-4 h-10 w-10 rounded-full bg-gradient-to-tr from-orange-300 to-indigo-500 opacity-80 blur-[1px]"></div>

                            <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                            <p className="text-gray-400 max-w-md leading-relaxed">
                                {step.desc}
                            </p>

                            {/* Example Button for the first item */}
                            {index === 0 && (
                                <button className="mt-6 rounded-full border border-gray-600 px-6 py-2 text-sm hover:bg-white hover:text-black transition">
                                    See Examples
                                </button>
                            )}
                        </div>
                    </div>
                ))}

            </div>






        </div>
    )
}

export default WorkProcess