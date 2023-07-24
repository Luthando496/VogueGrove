import { useState } from 'react'
// css
import 'swiper/css';
// import Swiper bundle with all modules installed
// import styles bundle
import 'swiper/css/bundle';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductScreen from './pages/ProductScreen'
import Footer from './components/Footer'



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/id" element={<ProductScreen />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    <Footer />
    </>
  )
}

export default App
