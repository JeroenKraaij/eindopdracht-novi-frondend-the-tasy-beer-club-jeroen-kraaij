import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Smaaktest from './pages/Smaaktest/Smaaktest.jsx';
import Webshop from "./pages/Webshop/Webshop.jsx";
import ArticlePage from "./pages/ArticlePage/ArticlePage.jsx";
import BlogPost from "./pages/Blogs/Blogs.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Design from "./pages/Design/Design.jsx"
import OverOns from "./pages/OverOns/OverOns.jsx";
import Account from "./pages/Account/Account.jsx"
import Login from "./pages/Login/Login.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";


function App() {

  return (
    <>
        <header className='main-header'>
            <Header/>
        </header>
        <main className='main-outer-container'>
            <section className='main-inner-container'>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/smaaktest" element={<Smaaktest/>}/>
                    <Route path="/webshop" element={<Webshop/>}/>
                    <Route path="/over-ons" element={<OverOns/>}/>
                    <Route path="/artikelen/" element={<ArticlePage/>}/>
                    <Route path="/artikelen/:id" element={<BlogPost />}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/design" element={<Design/>}/>
                    <Route path="/inloggen" element={<Login/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/product/:id" component={ProductPage} />
                </Routes>
            </section>
        </main>
        <footer className='main-footer'>
        <Footer/>
        </footer>
    </>
  )
}

export default App
