import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  // ✅ Apply dark mode to <html>
  useEffect(() => {
    const root = document.documentElement

    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-[#0a0a0f] 
                 text-gray-900 dark:text-gray-100 
                 transition-colors duration-300"
    >
      <Navbar
        scrolled={scrolled}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App