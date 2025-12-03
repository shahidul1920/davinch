import React from 'react'

const Button = (params) => {
  return (
    <div>
        <button className="btn px-4 py-2 rounded-full text-[16px] text-[var(--text-dark)] flex gap-1 items-center text-[var(--light)]">
            {params.children}
            <img className='w-[20px] h-auto' src="./star.svg" alt="" />
        </button>
    </div>
  )
}

export default Button