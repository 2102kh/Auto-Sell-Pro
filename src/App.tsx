
import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import HomePage from './components/HomePage'
import NavBarMenu from './components/NavBarMenu'
import Services from './components/Services'
import Contact from './components/Contact'
import './styles/main.scss';

function App() {
 

  return (
    <>
      
      <NavBarMenu/>
      <div>Wellcome to AutoCashDeal</div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
