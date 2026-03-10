import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import UseCase from './components/UseCase'
import WhyUs from './components/WhyUs'
import FAQSection from './components/FAQSection'
import GetStart from './components/GetStart'
import Testimonial from './components/Testimonial'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <UseCase />
            <WhyUs />
            <GetStart />
            <FAQSection />
            <Testimonial />
          </>
        } />
       
      </Routes>
    </Router>
  )
}

export default App
