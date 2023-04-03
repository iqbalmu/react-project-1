import React from 'react'
import Hero from './page/hero/Hero'
import Profile from './page/profile/Profile'
import Skils from './page/skils/Skils'
import Projects from './page/project/Projects'
import Contact from './page/contact/Contact'
import Footer from './components/footer/Footer'
import './app.scss'

const App = () => {
  return (
    <div>
      <Hero />
      <Profile />
      <Skils />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App