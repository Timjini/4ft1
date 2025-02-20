import { useState } from 'react'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import TestimonialCarousel from './components/Testimonials'
import FourFingersOneThumb from './components/FourFingersOneThumb'
import KeynotePresentation from './components/KeynotePresentation'
import Reviews from './components/Reviews'
import FormModal from './components/modals/ContactModal'


function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Hero />
      <VideoSection />
      <FourFingersOneThumb />
      <KeynotePresentation />
      <Reviews />
      <FormModal open={open} />
    </>
  )
}

export default App
