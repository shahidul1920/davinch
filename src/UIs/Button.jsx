import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const Button = (params) => {
  const containerRef = useRef(null)
  const starref = useRef(null)

  const { contextSafe } = useGSAP({ scope: containerRef })

  const hoverHandler = contextSafe(() => {
    gsap.to(starref.current, { rotation: 360, duration: 1, ease: "power2.out", transformOrigin: "50% 50%" })
  })
  const hoverLeave = contextSafe(() => {
    gsap.to(starref.current, { rotation: 0, duration: 1, ease: "power2.out", transformOrigin: "50% 50%" })
  })

  return (
    <div ref={containerRef}>
      <button onMouseEnter={hoverHandler} onMouseLeave={hoverLeave} className="btn px-4 py-2 rounded-full text-[16px] flex gap-1 items-center text-[var(--light)] cursor-pointer">
        {params.children}
        {/* <img ref={starref} className='w-[20px] h-auto star' src="./star.svg" alt="" /> */}
        <svg ref={starref} className='w-[20px] h-auto star' viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 31C15.469 22.4501 8.54135 15.5287 0 15.5287C8.56041 15.5287 15.5 8.57619 15.5 0C15.5309 8.54988 22.4586 15.4713 31 15.4713C22.4394 15.4713 15.5 22.4238 15.5 31Z" fill="white" />
        </svg>
      </button>
    </div>
  )
}

export default Button