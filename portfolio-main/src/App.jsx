import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Education/>
      <Skills/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App