import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WorkProcess from './components/WorkProcess'
import Featured from './components/Featured'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <div className="w-full bg-[var(--dark)] h-[600px]"></div>
      <WorkProcess />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default App