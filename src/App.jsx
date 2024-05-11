
import './App.css'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Header from './components/Header'
import Statistics from './components/Statistics'
import About from './sections/About'
import Blogs from './sections/Blogs'
import Courses from './sections/Courses'
import Guide from './sections/Guide'
import Hero from './sections/Hero'
import PopularCourses from './sections/PopularCourses'


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <About />
      <PopularCourses />
      <Courses />
      <Guide />
      <Blogs />
      <CTA />
      <Footer />
      
    </>
  )
}

export default App
