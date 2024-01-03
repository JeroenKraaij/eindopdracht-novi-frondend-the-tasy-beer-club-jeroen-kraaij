import React from "react";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Smaaktest from "./pages/Smaaktest/Smaaktest.jsx";
import Webshop from "./pages/Webshop/Webshop.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Design from "./pages/Design/Design.jsx"
import OverOns from "./pages/OverOns/OverOns.jsx";

function App() {


  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/smaaktest" element={<Smaaktest/>}/>
            <Route path="/webshop" element={<Webshop/>}/>
            <Route path="/over-ons" element={<OverOns/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/design" element={<Design/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
