import Heading from '../UIs/Heading'
import Button from '../UIs/Button'

const CTA = () => {
  return (
    <div>
        <div className='bg-[var(--dark)]'>

            <div className="container mx-auto py-28">
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

            <div>
                
            </div>

        </div>
    </div>
  )
}

export default CTA