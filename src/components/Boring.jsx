import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'


gsap.registerPlugin(ScrollTrigger);

export const Boring = () => {
  const boredContRef = React.useRef(null);

  useGSAP(()=>{
    const uiImagesL = gsap.utils.toArray('.imgL', boredContRef.current);
    const uiImagesR = gsap.utils.toArray('.imgR', boredContRef.current);

    gsap.set(uiImagesL,{
      scale:0.9,
    })
    gsap.set(uiImagesL[0],{
      xPercent: -350,
      yPercent: -100,
      rotation: -15,
    })
    gsap.set(uiImagesL[1],{
      xPercent: -300,
      yPercent: 100,
      rotation: 12,
    })
    gsap.set(uiImagesR,{
      scale:0.9,
    })
    gsap.set(uiImagesR[0],{
      xPercent: 170,
      yPercent: 100,
      rotation: 15,
    })
    gsap.set(uiImagesR[1],{ 
      xPercent: 230,
      yPercent: -50,
      rotation: -12,
    })
    gsap.set('h2',{opacity:0.4, y:20})

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: boredContRef.current,
        start: "top 60%",
        end: "bottom 20%",
        scrub: 1,
      }
    })
    tl.to('h2',{
      opacity:1,
      stagger:0.3,
    })
    .to(uiImagesL,{
      xPercent: '-=100',
      stagger:0.1,
      ease: 'none',
      duration:1,
    }, '<')
    .to(uiImagesR,{
      xPercent: '+=100',
      stagger:0.1,
      ease: 'none',
      duration:1
    }, '<')



  },{scope: boredContRef})
  return (
    <div ref={boredContRef} className='relative w-full overflow-hidden'>
      <div className="container mx-auto py-32 px-6 md:px-0 relative z-10">

        <div className="textSection text-center text-[var(--light)] text-3xl uppercase font-semibold headingFont relative z-20">
          <h2>tired of boring websites that</h2>
          <h2>fail to engage and inspire?</h2>
          <h2>Look no further.</h2>
        </div>

        <div className="uiImgs absolute inset-0 pointer-events-none z-0">
          <img className='imgL w-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./subImg.png" alt="" />
          <img className='imgL w-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./subImg1.png" alt="" />
          
          <img className='imgR w-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./subImg2.png" alt="" />
          <img className='imgR w-[140px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./subImg3.png" alt="" />
        </div>

      </div>
    </div>
  )
}
