// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Booking from './Pages/Booking';
import About from './Pages/About';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import { ThemeProvider } from './ThemeContext'; // Make sure this is correct path
import { ToastProvider } from './ToastProvider';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ToastProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking" element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>

            } />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
