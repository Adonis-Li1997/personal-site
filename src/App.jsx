import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Projects from './components/Projects'
import Personal from './components/Personal'
import Life from './components/Life'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Personal />
        <Life />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
