import React from 'react'
import Heading from '../UIs/Heading'

const Testimonials = () => {
    const testimonials =[
        {
            id: 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
            name: "John Doe",
            position: "CEO, Company A",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vel velit efficitur tincidunt. labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            id: 2,
            image: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
            name: "Jane Smith",
            position: "Marketing Manager, Company B",
            feedback: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            id: 3,
            image: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
            name: "Mike Johnson",
            position: "CTO, Company C",
            feedback: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            id: 4,
            image: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
            name: "Emily Davis",
            position: "Product Manager, Company D",
            feedback: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
    ]
  return (
    <div>
        <div className="bg-[var(--dark)] py-28 text-white">
            <section className="container mx-auto">
                <Heading>What our clients say</Heading>
                <div className='grid gap-12 grid-cols-2 mt-16'>
                    {testimonials.map((testimonial)=>(
                        <div key={testimonial.id} className='rounded-4xl pt-1 pl-1 testimonialBorderBg'>
                            <div className='bg-[var(--dark)] p-8 rounded-4xl'>
                                <div className="images flex items-center justify-between">
                                    <div className="profile flex items-center gap-4">
                                        <img className='w-[80px] h-[80px] rounded-full object-cover border-2 border-amber-50' src={testimonial.image} alt={testimonial.name} />
                                        <div className="names">
                                            <h4 className='text-[18px] font-semibold'>{testimonial.name}</h4>
                                            <p className='text-[14px]'>{testimonial.position}</p>
                                        </div>
                                    </div>
                                    <img src="./cots.png" alt="" />
                                </div>
                                <div className="feedback mt-6">
                                    <p className='text-[16px] font-light leading-7'>{testimonial.feedback}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
  )
}

export default Testimonials