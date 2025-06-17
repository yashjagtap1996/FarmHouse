import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './Pages/About'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
