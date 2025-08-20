import { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
import About from './Pages/About'
import Teams from './Pages/Teams'
import Events from './Pages/Events'
import Resources from './Pages/Resources'
import Contact from './Pages/Contact'
import JoinUs from './Pages/JoinUs'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Animation from './Components/Animation'
import './App.css'




function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen flex flex-col justify-between gap-5`}>
      
        {/* <ScrollToTop /> */}
        <section className=''><Navbar isDark={isDark} setIsDark={setIsDark} /></section>
        {/* <Animation /> */}
        <div className='mt-50'>
          <Routes>
              <Route path='/' element={<Home isDark={isDark} />} />
              <Route path='/about' element={<About isDark={isDark} />} />
              <Route path='/teams' element={<Teams />} />
              <Route path='/events' element={<Events />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/joinus' element={<JoinUs />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <section className='pt-10'>
          <Footer isDark={isDark} />
        </section>

    </div>
  )
}

export default App
