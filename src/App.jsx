import React, { createElement, useEffect, useState } from 'react'; // Import React explicitly
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { FaCartShopping } from "react-icons/fa6";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BannerPage from './pages/Banner/BannerPage';
import Contact from './pages/Helps/Contact'
import TopHeader from './components/topHeader/TopHeader';
import Login from './pages/User/Login/Login';
import Home from './pages/Banner/Home/Home';
import NotFound from './pages/nonFound/NotFound';
import Aboutus from './pages/About/Aboutus';
import LearnMore from './pages/Learnmore/LearnMore';
import ProductView from './pages/Products/productView/ProductView';


function App() {

  const [products,setProducts] = useState([])
  const[isLoading,setLoading] = useState(false);


  useEffect(()=>{
    const fetchedData = async()=>{
       setLoading(true);
        try{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            // console.log(data)
            setProducts(data)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    fetchedData();
},[])

  useEffect(()=>{
    console.log("UseEffect runs");
  },[])
   
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
    <ToastContainer/>
    <TopHeader  title="sasto Rewards" mode={mode} toggleMode={toggleMode} />
    <Header mode={mode} toggleMode={toggleMode}/>

    <Routes>
    <Route path='/' element ={<Home/>} />

    <Route path='/sastobazar-login' element ={<Login mode={mode} toggleMode={toggleMode} ></Login>}/>
    
    <Route path ="/contact" element={<Contact></Contact>}></Route>
    <Route path="*" element={<NotFound mode={mode} toggleMode={toggleMode} ></NotFound>}/>
    <Route path="/aboutus" element={<Aboutus mode={mode} toggleMode={toggleMode} ></Aboutus>}/>
    <Route path="/learnmore" element={<LearnMore mode={mode} toggleMode={toggleMode} ></LearnMore>}/>
    <Route path="/product-view/:id" element={<ProductView mode={mode} toggleMode={toggleMode} isloading={isLoading} products={products} ></ProductView>}/>


    </Routes>
    <Footer mode={mode} toggleMode={toggleMode} />
    </BrowserRouter>
 

   </>
)
  
}

export default App;
