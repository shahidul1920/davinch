import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const Button = (params) => {

  const starref = useRef(null)

  const hoverHandler = () => {
    gsap.to(starref.current, { rotation: "+=360", duration: 1, ease: "power2.out", transformOrigin: "50% 50%" })
  }

  return (
    <div>
      <button onMouseEnter={hoverHandler} className="btn px-4 py-2 rounded-full text-[16px] flex gap-1 items-center text-[var(--light)] cursor-pointer">
        {params.children}
        <img ref={starref} className='w-[20px] h-auto star' src="./star.svg" alt="" />
      </button>
    </div>
  )
}

export default Button