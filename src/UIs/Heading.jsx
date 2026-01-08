import React from 'react'

const Heading = (props) => {
    return (
        <div className="container mx-auto">
            <div className="heading flex gap-2 items-center">
                <h2 className='text-[40px] font-regular text-white text-left headingFont'>{props.children}</h2>
                <img className='w-[30px]' src="./star3.svg" alt="" />
            </div>
            <div className="uiImgs">
                <img className='mt-4' src="./heading_decor.svg" alt="" />
            </div>
        </div>
    )
}

export default Heading