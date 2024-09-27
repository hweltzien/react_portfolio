import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

import About from './pages/About'


function App() {
  

  return (
   <div className="App">
      <Navigation />
      <main className='min-h-[85vh]'>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
