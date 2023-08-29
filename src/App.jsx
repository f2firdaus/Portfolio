
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Headers from './components/Headers/Headers'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import PortfolioDetails from './components/Portfolio/PortfolioDetails'
import { useState } from 'react'

function App() {
 
const [port,setPort] =useState(true)
  return (
    <>
      <BrowserRouter>
        <div>
        <Headers />
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
          
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/portfolio/:id' element={ <PortfolioDetails setPort={ setPort} />}/>
          </Routes>
        </div>
        </BrowserRouter>
    </>
  )
}

export default App
