import './App.css';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import ProductAll from './Components/ProductAll';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import PrivateRouter from './Components/PrivateRouter';

function App() {

  let [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Banner />
      <Routes>
        <Route path='/' element={<ProductAll authenticate={authenticate} />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/product/:id' element={<PrivateRouter authenticate={authenticate} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
