import React, { useRef } from 'react'
import gsap from 'gsap';
import Heading from '../UIs/Heading'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
    const featuredProjects = [
        {
            id: 1,
            title: "BargeDesk",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto exercitationem reiciendis quibusdam sit officia voluptas rem quaerat laborum ad minus accusamus molestiae iste inventore, animi dicta culpa doloribus a quidem. Adipisci in esse vero numquam perspiciatis. Quasi deserunt explicabo repellat?",
            imageUrl: "./prj.png"
        },
        {
            id: 2,
            title: "IPSaustralia",
            description: "Amet consectetur adipisicing elit. Iusto exercitationem reiciendis quibusdam sit officia voluptas rem quaerat laborum ad minus accusamus molestiae iste inventore, animi dicta culpa doloribus a quidem. Adipisci in esse vero numquam perspiciatis. Quasi deserunt explicabo repellat?",
            imageUrl: "./prj.png"
        },
        {
            id: 3,
            title: "TechNova",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto exercitationem reiciendis quibusdam sit officia voluptas rem quaerat laborum ad minus accusamus molestiae iste inventore, animi dicta culpa doloribus a quidem. Adipisci in esse vero numquam perspiciatis. Quasi deserunt explicabo repellat?",
            imageUrl: "./prj.png"
        }
    ]

    const projaf = useRef(null);
    
    useGSAP(()=>{  
        const cards = gsap.utils.toArray('.card', projaf.current);
              
        cards.forEach((card, index)=>{
            // if(index < cards.length - 1) { // Don't pin the last card
            //     gsap.timeline({
            //         scrollTrigger:{
            //             trigger: card,
            //             start: "top top",
            //             scrub: 1,
            //             pin: true,
            //             //end: () => `+=${card.offsetHeight}`,
            //         }
            //     })
            //     .to(card,{
            //         ease: "none",
            //         startAt:{filter: 'brightness(100%) blur(0px)'},
            //         scale: 0.9,
            //         filter: 'brightness(50%) blur(5px)',
            //         duration: 1
            //     }, '<')
            // }
            gsap.timeline({
                    scrollTrigger:{
                        trigger: card,
                        start: "top top",
                        scrub: 1,
                        pin: true,
                        //end: () => `+=${card.offsetHeight}`,
                    }
                })
                .to(card,{
                    ease: "none",
                    startAt:{filter: 'brightness(100%) blur(0px)'},
                    filter: 'brightness(50%) blur(1px)',
                    scale: 0.99,
                    duration: 1
                }, '<')
        })
    }, {scope: projaf})


  return (
    <div className='py-28 bg-[var(--dark)]'>
        <div className='mb-[80px]'>
            <Heading>Some Featured projects</Heading>
        </div>
        {/* projects cards */}

        <div ref={projaf} className="container mx-auto cardsSec flex flex-col justify-center items-center gap-20">
            {featuredProjects.map((project, i) =>(
                <div key={i} className="card w-full flex gap-8 py-[55px] px-[95px] bg-[#151515]">
                    <div className="imageSec">
                        <img className='w-[545px] h-auto object-cover' src={project.imageUrl} alt={project?.title} />
                    </div>
                    <div className="textSec flex flex-col justify-center">
                        <div className="circle w-[25px] h-[25px] border border-[#3c4141] border-b-white text-[var(--light)] text-[14px] rounded-full flex justify-center items-center mb-4">{project.id}</div>
                        <h3 className='text-[30px] font-regular text-white mb-6'>{project.title}</h3>
                        <p className='text-[16px] font-light text-white leading-7 max-w-[700px]'>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>




    </div>
  )
}

export default Featured