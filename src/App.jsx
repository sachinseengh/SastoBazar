import React, { createElement, useState } from 'react'; // Import React explicitly
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { FaCartShopping } from "react-icons/fa6";
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BannerPage from './pages/Banner/BannerPage';
import Contact from './pages/Helps/Contact'
import TopHeader from './components/topHeader/TopHeader';
import Login from './pages/User/Login/Login';
import Home from './pages/Banner/Home/Home';


function App() {

   
  const toggleMode=()=>{

   if(mode==="light"){
     setMode("dark");
     document.body.style.backgroundColor='#042743';
     
   

   }else{
     setMode("light");
     document.body.style.backgroundColor='white';
   
     
   }
 }
 const [mode,setMode]=useState("light");

  

   return  (
    <>
    <BrowserRouter>
    <TopHeader mode={mode} toggleMode={toggleMode} />
    <Header mode={mode} toggleMode={toggleMode}/>

    <Routes>
    <Route path='/' element ={<Home/>} />

    <Route path='/sastobazar-login' element ={<Login mode={mode} toggleMode={toggleMode} ></Login>}/>
    
    <Route path ="/contact" element={<Contact></Contact>}></Route>

    </Routes>
    <Footer mode={mode} toggleMode={toggleMode} />
    </BrowserRouter>
 

   </>
)
  
}

export default App;
