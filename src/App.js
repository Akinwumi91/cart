import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import ShopcontextProvider from './context/Shopcontext'
import Itemdetails from './pages/Itemdetails'

const App = () => {
  return (
    <div className='App'>
      <ShopcontextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/shop/:id" element={<Itemdetails/>}/>
        </Routes>
      </Router>
      </ShopcontextProvider>
    </div>
  )
}

export default App