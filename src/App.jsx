import React, { createElement, useState } from 'react'; // Import React explicitly
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { FaCartShopping } from "react-icons/fa6";


import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  const [count, setCount] = useState(0);

   return  (
    <>
 <Header/>
 <Footer/>
   </>
)
  
}

export default App;
