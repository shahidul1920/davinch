import React from 'react'
import Heading from '../UIs/Heading'

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
  return (
    <div className='py-28 bg-[var(--dark)]'>
        <div className='mb-[80px]'>
            <Heading>Some Featured projects</Heading>
        </div>
        {/* projects cards */}

        <div className="container mx-auto cardsSec flex flex-col justify-center items-center gap-20">
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