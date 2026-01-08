import React from 'react'

export const Boring = () => {
  return (
    <div>
        <div className="container mx-auto py-20 px-6 md:px-0 relative">
            <div className="text-center text-white text-3xl uppercase font-semibold headingFont">
                <h2>tired of boring websites that</h2>
                <h2>fail to engage and inspire?</h2>
                <h2>Look no further.</h2>
            </div>
            <div className="uiImgs absolute">
                <img className='mt-4 w-[140px]' src="./subImg.png" alt="" />
                <img className='mt-4 w-[140px]' src="./subImg1.png" alt="" />
                <img className='mt-4 w-[140px]' src="./subImg2.png" alt="" />
                <img className='mt-4 w-[140px]' src="./subImg3.png" alt="" />
            </div>
        </div>
    </div>
  )
}
