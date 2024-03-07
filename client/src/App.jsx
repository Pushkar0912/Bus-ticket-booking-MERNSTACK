import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
