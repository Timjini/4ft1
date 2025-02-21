import { useState } from 'react'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import FourFingersOneThumb from './components/FourFingersOneThumb'
import KeynotePresentation from './components/KeynotePresentation'
import Reviews from './components/Reviews'
import FormModal from './components/modals/ContactModal'
import Footer from './components/Footer'
import Navbar from './components/NavBar'


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <>
      <FormModal isOpen={isOpen} toggleModal={toggleModal} />
      <Navbar />
      <Hero toggleModal={toggleModal} />
      <VideoSection />
      <FourFingersOneThumb  toggleModal={toggleModal} />
      <KeynotePresentation toggleModal={toggleModal} />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
