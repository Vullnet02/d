import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import AdminPanel from './pages/AdminPanel'
import About from './pages/About'
import { ServicesProvider } from './context/ServicesContext'
import './App.css'

function App() {
  return (
    <ServicesProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sherbimet" element={<Services />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ServicesProvider>
  )
}

export default App
