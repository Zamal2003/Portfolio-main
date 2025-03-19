import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills'
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Education/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App