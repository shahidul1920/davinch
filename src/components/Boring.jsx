import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React from 'react'

export const Boring = () => {
  useGSAP(()=>{
    const uiImagesL = gsap.utils.toArray('.uiImgs .imgL');
    const uiImagesR = gsap.utils.toArray('.uiImgs .imgR');
    gsap.set(uiImagesL[0], {
      x: 400,
      y: -150,
      rotation: -15
    });
    gsap.set(uiImagesL[1], {
      x: 380,
      y: -120,
      rotation: 12
    })
    gsap.set(uiImagesL, {
      scale: 0.9
    })
    gsap.set(uiImagesR, {
      scale: 0.9
    })
    gsap.set(uiImagesR[0], {
      x: 1050,
      y: -250,
      rotation: 15
    });
    gsap.set(uiImagesR[1], {
      x: 980,
      y: -220,
      rotation: -12
    })
    gsap.set('.headAniSec h2', {
      opacity: 0.4
    })
    gsap.timeline({
      scrollTrigger:{
        trigger: '.headAniSec',
        start: 'top 60%',
        end: 'bottom 20%',
        scrub: 1,
        markers: true
      }
    })
    .to('.headAniSec h2',{
      opacity: 1,
      stagger: 0.3,
    })
    .to(uiImagesL,{
      x: "-=100",
      stagger: 0.2,
      ease: 'none',
      duration: 1
    }, '<')
    .to(uiImagesR,{
      x: '+=100',
      stagger: 0.2,
      ease: 'none',
      duration: 1
    }, '<')
  })

  return (
    <div>
        <div className="container headAniSec mx-auto py-20 px-6 md:px-0 relative">
            <div className="text-center text-white text-3xl uppercase font-semibold headingFont">
                <h2>tired of boring websites that</h2>
                <h2>fail to engage and inspire?</h2>
                <h2>Look no further.</h2>
            </div>
            <div className="uiImgs absolute">
                <img className='mt-4 w-[140px] imgL' src="./subImg.png" alt="" />
                <img className='mt-4 w-[140px] imgL' src="./subImg1.png" alt="" />
                <img className='mt-4 w-[140px] imgR' src="./subImg2.png" alt="" />
                <img className='mt-4 w-[140px] imgR' src="./subImg3.png" alt="" />
            </div>
        </div>
    </div>
  )
}
