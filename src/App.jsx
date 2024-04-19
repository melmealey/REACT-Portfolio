import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'


function App() {
  return (
    <div className ="App">
      <Router>
        <Routes>
          <Route path ="/" element = {<Home />}/>
          <Route path ="/about" element = {<About />}/>
          <Route path ="/portfolio" element = {<Portfolio />}/>
          <Route path ="/resume" element = {<Resume />}/>
          <Route path ="/contact" element = {<Contact />}/>


        </Routes>
        </Router>  
  
    </div>
  )
}

export default App
