import { useState } from 'react'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import TestimonialCarousel from './components/Testimonials'
import FourFingersOneThumb from './components/FourFingersOneThumb'
import KeynotePresentation from './components/KeynotePresentation'


function App() {

  return (
    <>
      <Hero />
      <TestimonialCarousel />
      <VideoSection />
      <FourFingersOneThumb />
      <KeynotePresentation />
    </>
  )
}

export default App
