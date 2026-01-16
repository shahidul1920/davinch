import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MoveRight } from 'lucide-react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const FeaturedSec = () => {
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
        },
        {
            id: 4,
            title: "InnoWave",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto exercitationem reiciendis quibusdam sit officia voluptas rem quaerat laborum ad minus accusamus molestiae iste inventore, animi dicta culpa doloribus a quidem. Adipisci in esse vero numquam perspiciatis. Quasi deserunt explicabo repellat?",
            imageUrl: "./prj.png"
        }
    ]

    const featureRef = useRef(null);
    useGSAP(()=>{
        const element = featureRef.current;
        gsap.set(element,{
            opacity:0,
            y:120
        })
        gsap.to(element,{
            opacity:1,
            y:0,
            duration:1,
            scrollTrigger:{
                trigger: element,
                start: "top 60%",
                end: "bottom 30%",
                markers: true
            }
        })
        
    }, {scope: featureRef})

    return (
        <div ref={featureRef} className='bg-[var(--dark)]'>
            <div className="title container mx-auto pt-20 pb-6 text-center text-[var(--light)]">
                <span className='headingFont'>Our work</span>
                <h2 className='text-[40px] font-bold headingFont'>
                    Some of our<br />
                    featured projects
                </h2>
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                {featuredProjects.map((proj, i) => (
                    <div key={i} className="imageCard overflow-hidden">
                        <div className="imgs w-full h-[300px]">
                            <img src={proj.imageUrl} alt={proj.title} className='w-full h-full object-fill' />
                        </div>
                        <div className="texts text-[var(--light)]">
                            <h3 className='text-[24px] font-bold text-[var(--light)] headingFont my-4'>{proj.title}</h3>
                            <p className='text-[16px] text-[var(--lightShade)] leading-[1.6]'>{proj.description}</p>
                            <div className="exploreSite mt-4">
                                <a className='text-[var(--primary-color)] underline flex items-center gap-2' href="#">Explore Site <MoveRight /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
