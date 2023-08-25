// import logo from './logo.svg';
// import './App.css';

import { Checkbox } from '@mui/material';
import { useDebugValue, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import Navbar from './scenes/global/Navbar';
import Home from "./scenes/home/Home";
import ItemDetails from './scenes/itemDetails/ItemDetails';
import CartMenu from './scenes/global/CartMenu';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="ckeckout" element={<Checkout />} />
          <Route path="ckeckout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu/>
      </BrowserRouter >

    </div>
  );
}

export default App;
