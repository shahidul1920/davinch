import Heading from '../UIs/Heading'
import Button from '../UIs/Button'

const CTA = () => {
    return (
        <div className='bg-[var(--dark)] p-6 xl:p-0'>
            <div className='flex container mx-auto py-15 justify-between items-center gap-10'>

                <div className="">
                    <div className="text">
                        <Heading>Ready to get started?</Heading>
                        <p className='text-white text-[18px] font-light mt-6 max-w-2xl'>
                            Join thousands of businesses using our services to boost their online presence and drive growth. Take the first step towards transforming your digital strategy today!
                        </p>
                        <div className="mt-6">
                            <Button>
                                Get Started Now
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <svg width="393" height="393" viewBox="0 0 393 393" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="354.5" y1="392.021" x2="354.5" y2="9.15527e-05" stroke="#404040" />
                        <line x1="274.5" y1="392.021" x2="274.5" y2="9.15527e-05" stroke="#404040" />
                        <line x1="195.5" y1="392.021" x2="195.5" y2="9.15527e-05" stroke="#404040" />
                        <line y1="290.5" x2="392.02" y2="290.5" stroke="#404040" />
                        <line y1="203.5" x2="392.02" y2="203.5" stroke="#404040" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M195.5 219C195.469 210.45 188.541 203.529 180 203.529C188.56 203.529 195.5 196.576 195.5 188C195.531 196.55 202.459 203.471 211 203.471C202.439 203.471 195.5 210.424 195.5 219Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M275.5 306C275.469 297.45 268.541 290.529 260 290.529C268.56 290.529 275.5 283.576 275.5 275C275.531 283.55 282.459 290.471 291 290.471C282.439 290.471 275.5 297.424 275.5 306Z" fill="white" />
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default CTA