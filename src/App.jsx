import React, { createElement, useState } from 'react'; // Import React explicitly
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { FaCartShopping } from "react-icons/fa6";


import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BannerPage from './pages/Banner/BannerPage';
import TopHeader from './components/topHeader/TopHeader';


function App() {
  

   return  (
    <>
 <TopHeader></TopHeader>
 <Header/>
 <BannerPage></BannerPage>
 <Footer/>
   </>
)
  
}

export default App;
